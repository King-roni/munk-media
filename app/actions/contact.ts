"use server";

import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { contactHtml, contactText, ContactData } from "@/emails/templates";

const ContactSchema = z.object({
  name: z.string().trim().optional(),
  email: z.string().email(),
  message: z.string().trim().min(10, "Please enter at least 10 characters."),
  page: z.enum(["home", "contact"]),
  company: z.string().max(0).optional().default(""), // honeypot must remain empty
});

export async function submitContact(
  _prevState: unknown,
  formData: FormData
): Promise<{ ok: boolean; error?: string }> {
  try {
    const payload = {
      name: formData.get("name")?.toString(),
      email: formData.get("email")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      page: (formData.get("page")?.toString() || "home") as "home" | "contact",
      company: formData.get("company")?.toString() || "",
    };

    const parsed = ContactSchema.safeParse(payload);
    if (!parsed.success) return { ok: false, error: "Invalid form submission." };
    if (parsed.data.company !== "") return { ok: false, error: "Invalid form submission." };

    const data = parsed.data as ContactData;

    console.log("[forms] sending", { 
      subject: `New Message from ${data.name || "Website Visitor"}`, 
      replyTo: data.email 
    });

    await sendEmail({
      subject: `New Message from ${data.name || "Website Visitor"}`,
      html: contactHtml(data),
      text: contactText(data),
      replyTo: data.email,
    });

    return { ok: true };
  } catch (e) {
    console.error("[forms] error:", e);
    return {
      ok: false,
      error:
        "Something went wrong. Please try again or email us at info@munk-media.com.",
    };
  }
}
