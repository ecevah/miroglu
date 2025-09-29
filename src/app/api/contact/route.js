import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, content } = body || {};

    if (!name || !email || !content) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `Miroğlu Web Form <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO || "mihrali.yalcin@mymiroglulojistik.com.tr",
      replyTo: email,
      subject: `Yeni İletişim Mesajı: ${name}`,
      text: `Gönderen: ${name}\nE-posta: ${email}\n\nMesaj:\n${content}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 10px">Web Form Mesajı</h2>
          <p><strong>Gönderen:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Mesaj:</strong></p>
          <pre style="white-space:pre-wrap;background:#f7f7f8;padding:12px;border-radius:8px;border:1px solid #eee">${content}</pre>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true, id: info.messageId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("contact api error", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
