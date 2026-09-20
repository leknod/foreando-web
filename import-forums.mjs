// import-forums.mjs
// Ejecutar con: node import-forums.mjs
// Requiere: DATABASE_URL en .env.local

import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL);

const raw = JSON.parse(readFileSync("forums-data.json", "utf-8"));
const forums = Array.isArray(raw) && raw[0]?.json_agg ? raw[0].json_agg : (raw.json_agg || raw);

console.log(`📋 Foros a importar: ${forums.length}\n`);

let success = 0;
let errors = 0;

for (const f of forums) {
  try {
    await sql`
      INSERT INTO forums (id, name, short_description, long_description, icon, featured, category_id, url, slug, sort_order, status)
      VALUES (
        ${f.id},
        ${f.name},
        ${f.short_description},
        ${f.long_description},
        ${f.icon},
        ${f.featured},
        ${f.category_id},
        ${f.url},
        ${f.slug},
        ${f.sort_order},
        ${f.status}
      )
    `;
    success++;
    console.log(`✅ [${success}] ${f.name}`);
  } catch (err) {
    errors++;
    console.error(`❌ ${f.name}: ${err.message}`);
  }
}

console.log(`\n🎉 Importación completada: ${success} ok, ${errors} errores`);
