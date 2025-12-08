// app/api/auditoria/route.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const websiteUrl = formData.get("websiteUrl");

    // Validación básica de URL
    if (!websiteUrl || !websiteUrl.startsWith("https://")) {
      return NextResponse.json(
        { error: "URL inválida o no segura (debe ser HTTPS)." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailSubject = `[AUDITORÍA GRATUITA] Nueva solicitud de ${name}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Se envía a ti mismo
      subject: mailSubject,
      html: `
        <h2>Solicitud de Auditoría Web Gratuita</h2>
        <p>Has recibido una nueva solicitud de auditoría para el sitio web:</p>
        <p><strong>URL del Sitio:</strong> <a href="${websiteUrl}" target="_blank">${websiteUrl}</a></p>
        <br>
        <p><strong>Datos del Solicitante:</strong></p>
        <ul>
            <li><strong>Nombre:</strong> ${name}</li>
            <li><strong>Correo:</strong> ${email}</li>
            <li><strong>Teléfono:</strong> ${phone || "No proporcionado"}</li>
        </ul>
        <br>
        <p>Por favor, revisa el sitio y contacta al cliente lo antes posible.</p>
      `,
    });

    return NextResponse.json(
      { message: "Solicitud de auditoría enviada correctamente" },
      { status: 200 }
    );
  } catch (err) {
    console.error("ERROR EN API de Auditoría:", err);
    return NextResponse.json(
      { error: "Fallo al procesar la solicitud de auditoría" },
      { status: 500 }
    );
  }
}
