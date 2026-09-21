// sync-ahrefs-dr.mjs
// Script para sincronizar el Domain Rating (DR) de Ahrefs con la base de datos Neon.
//
// Uso:
//   node sync-ahrefs-dr.mjs           (solo los que no tienen DR)
//   node sync-ahrefs-dr.mjs --all     (todos los foros)
//   node sync-ahrefs-dr.mjs --mock    (rellena valores de prueba para previsualizar el diseño)
//
// Requiere en .env.local o .env:
//   DATABASE_URL=...
//   AHREFS_API_KEY=...

import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

const DATABASE_URL = process.env.DATABASE_URL;
const AHREFS_API_KEY = process.env.AHREFS_API_KEY;

const isAll = process.argv.includes("--all");
const isMock = process.argv.includes("--mock");

if (!DATABASE_URL) {
  console.error("❌ Falta DATABASE_URL en .env.local o .env");
  process.exit(1);
}

if (!AHREFS_API_KEY && !isMock) {
  console.error("❌ Falta AHREFS_API_KEY en tu .env.local.");
  console.log("\nℹ️  Para obtenerla de forma gratuita:");
  console.log("   1. Regístrate en https://ahrefs.com");
  console.log("   2. Ve a Account settings -> API keys");
  console.log("   3. Genera una clave APIv3 y añádela a .env.local como AHREFS_API_KEY=tu_clave\n");
  console.log("💡 Tip: Puedes ejecutar 'node sync-ahrefs-dr.mjs --mock' para probar el diseño con datos de prueba.");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

/**
 * Extrae el dominio raíz o host limpio de una URL
 */
function extractDomain(rawUrl) {
  if (!rawUrl) return null;
  try {
    const url = new URL(rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return rawUrl.replace(/https?:\/\//, "").split("/")[0].replace(/^www\./, "");
  }
}

/**
 * Espera un tiempo determinado en milisegundos
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchAhrefsDr(domain) {
  const url = `https://api.ahrefs.com/v3/public/domain-rating-free?target=${encodeURIComponent(domain)}`;
  
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AHREFS_API_KEY}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    if (res.status === 429) {
      console.warn("⚠️ Rate limit alcanzado. Esperando 5 segundos...");
      await sleep(5000);
      return fetchAhrefsDr(domain);
    }
    const errorText = await res.text();
    throw new Error(`HTTP ${res.status}: ${errorText}`);
  }

  const data = await res.json();
  const rawDr = data?.domain_rating?.domain_rating ?? data?.domain_rating;
  if (rawDr === undefined || rawDr === null) {
    return null;
  }
  return Math.round(Number(rawDr));
}

async function main() {
  console.log("🚀 Iniciando sincronización de Domain Rating (DR)...");
  if (isMock) {
    console.log("🧪 Modo de prueba (--mock) activado. No se llamará a la API de Ahrefs.\n");
  }

  const forums = isAll
    ? await sql`SELECT id, name, url, ahrefs_dr FROM forums ORDER BY id`
    : await sql`SELECT id, name, url, ahrefs_dr FROM forums WHERE ahrefs_dr IS NULL ORDER BY id`;

  console.log(`📋 Encontrados ${forums.length} foros para procesar.\n`);

  if (forums.length === 0) {
    console.log("✅ Todos los foros ya tienen su DR asignado. Usa --all para forzar una resincronización.");
    return;
  }

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < forums.length; i++) {
    const forum = forums[i];
    const domain = extractDomain(forum.url);

    if (!domain) {
      console.warn(`[${i + 1}/${forums.length}] ⚠️ ${forum.name}: URL inválida (${forum.url})`);
      continue;
    }

    try {
      let dr;
      if (isMock) {
        // Generar un DR realista basado en hash simple
        const hash = Array.from(forum.name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
        dr = 25 + (hash % 60); // Valores entre 25 y 84
      } else {
        dr = await fetchAhrefsDr(domain);
        // Pequeña pausa entre peticiones para ser amigables con el rate limit
        await sleep(500);
      }

      if (dr !== null && dr !== undefined) {
        await sql`UPDATE forums SET ahrefs_dr = ${dr} WHERE id = ${forum.id}`;
        console.log(`[${i + 1}/${forums.length}] ✅ ${forum.name} (${domain}) -> DR: ${dr}`);
        successCount++;
      } else {
        console.log(`[${i + 1}/${forums.length}] ⚪ ${forum.name} (${domain}) -> Sin datos de DR`);
      }
    } catch (err) {
      console.error(`[${i + 1}/${forums.length}] ❌ ${forum.name} (${domain}):`, err.message);
      errorCount++;
    }
  }

  console.log("\n────────────────────────────────────────");
  console.log(`🏁 Sincronización completada.`);
  console.log(`   ✅ Actualizados con éxito: ${successCount}`);
  console.log(`   ❌ Errores: ${errorCount}`);
  console.log("────────────────────────────────────────\n");
}

main().catch((err) => {
  console.error("Error fatal:", err);
  process.exit(1);
});
