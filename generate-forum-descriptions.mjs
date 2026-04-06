// generate-forum-descriptions.mjs
// Ejecutar con: node generate-forum-descriptions.mjs
//
// Variables de entorno necesarias (.env.local o .env):
//   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY=eyJ...   <- usa la service role key, no la anon key
//   OPENAI_API_KEY=sk-...
//
// Instala dependencias si no las tienes:
//   npm install @supabase/supabase-js openai dotenv

import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import * as dotenv from "dotenv";

// Carga variables de entorno desde .env.local o .env
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

// ─── CONFIGURACIÓN ────────────────────────────────────────────────────────────

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Nombre de tu tabla y columna destino en Supabase
const TABLE_NAME = "forums"; // <- cambia si tu tabla se llama diferente
const CONTENT_COLUMN = "long_description"; // <- nombre de la columna donde guardar el texto

// Columnas que leeremos de cada foro
const SELECT_COLUMNS = "id, name, short_description, url";

// Cuántos foros procesar en paralelo (no pongas más de 3-5 para no saturar la API)
const CONCURRENCY = 2;

// Solo procesar foros donde la columna destino esté vacía (true = no sobreescribir)
const SKIP_ALREADY_FILLED = false;

// ─── VALIDACIÓN ───────────────────────────────────────────────────────────────

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || !OPENAI_API_KEY) {
  console.error("❌ Faltan variables de entorno. Revisa tu .env.local:");
  console.error("   NEXT_PUBLIC_SUPABASE_URL");
  console.error("   SUPABASE_SERVICE_ROLE_KEY");
  console.error("   OPENAI_API_KEY");
  process.exit(1);
}

// ─── CLIENTES ─────────────────────────────────────────────────────────────────

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// ─── PROMPT ───────────────────────────────────────────────────────────────────

function buildPrompt(forum) {
  return `Eres un experto en comunidades online y redacción de contenido web para directorios de foros.

Escribe un texto detallado y atractivo para la siguiente comunidad/foro en formato HTML.

IMPORTANTE:
- No inventes datos concretos (usuarios, visitas, etc.). Si no se sabe, usa expresiones como "parece", "se percibe", "da la impresión".
- Evita frases genéricas tipo "comunidad activa", "gran variedad de temas", "espacio ideal", etc.
- Cada sección debe aportar información distinta (sin repetir ideas).
- Prioriza ejemplos concretos frente a descripciones abstractas.
- El texto debe sonar como alguien que ha navegado el foro, no como una descripción genérica.
- Evita tono promocional o de marketing.

---

ESTRUCTURA OBLIGATORIA (usa exactamente estos 5 bloques con H2):

1. <h2>¿De qué se habla en ${forum.name}?</h2>
Describe los temas reales del foro.
Incluye ejemplos concretos de hilos o discusiones típicas (aunque sean aproximaciones realistas).
Empieza con un primer párrafo potente con keywords naturales.

2. <h2>La comunidad y su perfil</h2>
Describe qué tipo de usuarios participan y cómo interactúan.
Incluye nivel, actitud (colaborativos, directos, caóticos…), idioma y posible origen.

3. <h2>Actividad y popularidad</h2>
Describe el ritmo del foro (activo, irregular, veterano…).
Evita números si no son verificables.
Da contexto temporal (foro antiguo vs reciente).

4. <h2>¿Qué encontrarás?</h2>
Explica el tipo de contenido y cómo está organizado.
Describe el tono del contenido (técnico, práctico, debate puro, etc.).

5. <h2>¿Por qué este foro destaca?</h2>
Explica qué lo hace diferente frente a otros foros similares.
Sé específico (por ejemplo: nivel técnico, archivo histórico, tipo de usuarios, nicho concreto).

---

REGLAS DE FORMATO:
- Devuelve ÚNICAMENTE HTML, sin \`\`\` html ni ningún wrapper
- Usa <h2> para secciones, <h3> si aporta valor
- Usa <p>, <ul>/<li>, <strong> y <em> con criterio (no por rellenar)
- Párrafos cortos y separados
- Entre 500 y 900 palabras
- Español de España
- Tono cercano, natural, ligeramente informal
- NO incluyas <html>, <head>, <body> ni estilos

---

Datos del foro:
- Nombre: ${forum.name}
- Descripción corta: ${forum.short_description || "No disponible"}
- URL: ${forum.url || ""}`;
}

// ─── FUNCIONES PRINCIPALES ────────────────────────────────────────────────────

async function generateText(forum) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: buildPrompt(forum) }],
    temperature: 0.7,
    max_completion_tokens: 1200,
  });

  return response.choices[0].message.content.trim();
}

async function processForum(forum, index, total) {
  const label = `[${index + 1}/${total}] "${forum.name}"`;

  try {
    console.log(`⏳ ${label} — generando texto...`);
    const text = await generateText(forum);

    const { error } = await supabase
      .from(TABLE_NAME)
      .update({ [CONTENT_COLUMN]: text })
      .eq("id", forum.id);

    if (error) {
      console.error(
        `❌ ${label} — error al guardar en Supabase:`,
        error.message,
      );
    } else {
      const words = text.split(/\s+/).length;
      console.log(`✅ ${label} — guardado (${words} palabras)`);
    }
  } catch (err) {
    console.error(`❌ ${label} — error al generar:`, err.message);
  }
}

async function runInBatches(items, batchSize, fn) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map((item, j) => fn(item, i + j, items.length)));
  }
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🚀 Iniciando generación de textos para foros...\n");

  // Leer foros de Supabase
  let query = supabase.from(TABLE_NAME).select(SELECT_COLUMNS);

  if (SKIP_ALREADY_FILLED) {
    query = query.or(`${CONTENT_COLUMN}.is.null,${CONTENT_COLUMN}.eq.`);
  }

  const { data: forums, error } = await query;

  if (error) {
    console.error("❌ Error al leer foros de Supabase:", error.message);
    process.exit(1);
  }

  if (!forums || forums.length === 0) {
    console.log("ℹ️  No hay foros pendientes de procesar.");
    return;
  }

  console.log(`📋 Foros a procesar: ${forums.length}`);
  console.log(`⚙️  Concurrencia: ${CONCURRENCY}\n`);

  await runInBatches(forums, CONCURRENCY, processForum);

  console.log("\n🎉 ¡Proceso completado!");
}

main();
