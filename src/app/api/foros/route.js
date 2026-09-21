import { sql } from "@/lib/db";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const { nombre, url, descripcion, descripcionLarga } = await request.json();

    if (!nombre || !url || !descripcion) {
      return NextResponse.json(
        { error: "Los campos obligatorios deben ser completados" },
        { status: 400 },
      );
    }

    const slug = nombre
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    let formattedLongDescription = null;
    if (descripcionLarga && descripcionLarga.trim()) {
      const trimmed = descripcionLarga.trim();
      if (/<[a-z][\s\S]*>/i.test(trimmed)) {
        formattedLongDescription = trimmed;
      } else {
        formattedLongDescription = trimmed
          .split(/\n\s*\n/)
          .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br />")}</p>`)
          .join("\n");
      }
    }

    let iconUrl = null;
    try {
      let parsedUrl = url.trim();
      if (!/^https?:\/\//i.test(parsedUrl)) {
        parsedUrl = `https://${parsedUrl}`;
      }
      const hostname = new URL(parsedUrl).hostname;
      if (hostname) {
        iconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
      }
    } catch (err) {
      console.warn("No se pudo extraer el dominio para el favicon:", err);
    }

    await sql`
      INSERT INTO forums (name, url, short_description, long_description, slug, status)
      VALUES (${nombre}, ${url}, ${descripcion}, ${formattedLongDescription}, ${slug}, 'pending')
    `;

    if (resend) {
      try {
        await resend.emails.send({
          from: "Foreando <hola@foreando.com>",
          to: "kramleknod@gmail.com",
          subject: `Nuevo foro enviado: ${nombre}`,
          html: `
            <h2>¡Nuevo foro enviado para revisión!</h2>
            ${
              iconUrl
                ? `<p style="margin-bottom:12px;"><img src="${iconUrl}" width="32" height="32" style="border-radius:6px; vertical-align:middle; margin-right:8px;" alt="${nombre}" /><strong>${nombre}</strong></p>`
                : ""
            }
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>URL:</strong> <a href="${url}" target="_blank">${url}</a></p>
            <p><strong>Breve descripción:</strong> ${descripcion}</p>
            <p><strong>Descripción detallada:</strong> ${
              formattedLongDescription || "<em>No proporcionada (se generará automáticamente con IA)</em>"
            }</p>
            <p><strong>Estado:</strong> Pendiente de aprobación (<code>pending</code>)</p>
          `,
        });
      } catch (emailError) {
        console.error("Error enviando email con Resend:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al insertar foro:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 },
    );
  }
}
