import { neon } from "@neondatabase/serverless";

let sqlClient;

function getDb() {
  if (!sqlClient) {
    let url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error(
        "DATABASE_URL environment variable is missing in Vercel. Please add DATABASE_URL in Vercel Project Settings > Environment Variables."
      );
    }
    // Si se pegó con comillas accidentales en Vercel, limpiarlas
    url = url.trim().replace(/^["']|["']$/g, "");
    sqlClient = neon(url);
  }
  return sqlClient;
}

export const sql = (...args) => getDb()(...args);
