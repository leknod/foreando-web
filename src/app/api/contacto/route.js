import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nombre, email, mensaje } = await request.json();

  try {
    await resend.emails.send({
      from: "Contacto Foreando <hola@foreando.com>",
      to: "kramleknod@gmail.com",
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false }, { status: 500 });
  }
}
