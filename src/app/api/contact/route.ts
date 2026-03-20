import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = process.env.EMAIL_TO ?? "sachinpatidar413@gmail.com";

function getTransporter() {
  const host = process.env.EMAIL_SMTP_HOST;
  const port = process.env.EMAIL_SMTP_PORT;
  const user = process.env.EMAIL_SMTP_USER;
  const pass = process.env.EMAIL_SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error(
      "Missing email configuration. Set EMAIL_SMTP_HOST, EMAIL_SMTP_PORT, EMAIL_SMTP_USER, and EMAIL_SMTP_PASS."
    );
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465 ? true : false, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, service, plan } = body;

    if (!name || !email || !message || !service || !plan) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = getTransporter();

    const fromAddress = process.env.EMAIL_FROM ?? process.env.EMAIL_SMTP_USER;

    await transporter.sendMail({
      from: fromAddress,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New hire request: ${service} (${plan})`,
      text: `You received a new request from ${name} <${email}>.

Service: ${service}
Pricing plan: ${plan}

Message:
${message}`,
      html: `
        <h1>New hire request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ error: (error as Error)?.message ?? "Unknown error" }, { status: 500 });
  }
}
