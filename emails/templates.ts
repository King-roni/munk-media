import { escapeText, renderKV } from "@/lib/email";

export type ContactData = {
  name?: string;
  email: string;
  message: string;
  page: "home" | "contact";
};

export function contactHtml(d: ContactData): string {
  return `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
      <h2>New Contact Message</h2>
      ${renderKV({ Name: d.name || "-", Email: d.email, Page: d.page })}
      <h3 style="margin-top:16px">Message</h3>
      <div style="white-space:pre-wrap">${escapeText(d.message)}</div>
    </div>`;
}

export function contactText(d: ContactData): string {
  return `New Contact Message

Name: ${d.name || "-"}
Email: ${d.email}
Page: ${d.page}

Message:
${d.message}
`;
}

export function creatorHtml(data: Record<string, string | undefined>): string {
  return `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
      <h2>New Creator Application</h2>
      ${renderKV(data)}
    </div>`;
}

export function creatorText(data: Record<string, string | undefined>): string {
  const lines = Object.entries(data)
    .filter(([, v]) => v != null && v !== "")
    .map(([k, v]) => `${k}: ${v}`);
  return `New Creator Application\n\n${lines.join("\n")}\n`;
}

