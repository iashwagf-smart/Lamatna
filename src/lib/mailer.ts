import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendOtpEmail(to: string, name: string, code: string) {
  await transporter.sendMail({
    from: `"لمتنا" <${process.env.GMAIL_USER}>`,
    to,
    subject: "رمز التحقق - لمتنا",
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
        <h2 style="color: #3D3A5C; margin-bottom: 8px;">مرحباً ${name} 👋</h2>
        <p style="color: #555;">رمز التحقق الخاص بك:</p>
        <div style="background: #3D3A5C; color: #fff; font-size: 36px; font-weight: bold; letter-spacing: 8px; text-align: center; padding: 20px; border-radius: 8px; margin: 24px 0;">
          ${code}
        </div>
        <p style="color: #888; font-size: 13px;">صالح لمدة 5 دقائق. لا تشاركه مع أحد.</p>
      </div>
    `,
  });
}
