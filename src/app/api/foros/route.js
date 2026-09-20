import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { nombre, url, descripcion } = await request.json();

    if (!nombre || !url || !descripcion) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 },
      );
    }

    const slug = nombre
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    await sql`
      INSERT INTO forums (name, url, short_description, slug, status)
      VALUES (${nombre}, ${url}, ${descripcion}, ${slug}, 'pending')
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al insertar foro:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 },
    );
  }
}
