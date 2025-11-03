import { Resend } from "resend";

export type SendEmailInput = {
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
  to?: string;
};

export async function sendEmail(input: SendEmailInput): Promise<{ ok: true }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing. Set it in Vercel env.");
  }
  const resend = new Resend(apiKey);

  const from = process.env.EMAIL_FROM || "Munk Media <info@munk-media.com>";
  const to = input.to || process.env.EMAIL_TO || "info@munk-media.com";

  const { subject, html, text, replyTo } = input;
  if (!subject) throw new Error("Subject is required");

  const emailPayload: any = {
    from,
    to,
    subject,
  };

  if (html) emailPayload.html = html;
  if (text) emailPayload.text = text;
  if (replyTo) emailPayload.replyTo = replyTo;

  await resend.emails.send(emailPayload);

  return { ok: true };
}

// util helpers
export function escapeText(s: string | undefined): string {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function renderKV(obj: Record<string, unknown>): string {
  const rows = Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 8px;font-weight:600;">${escapeText(
          k
        )}</td><td style="padding:4px 8px;">${escapeText(String(v))}</td></tr>`
    )
    .join("");
  return `<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee">${rows}</table>`;
}

