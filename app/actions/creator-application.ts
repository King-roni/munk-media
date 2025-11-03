"use server";

import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { creatorHtml, creatorText } from "@/emails/templates";

const CreatorSchema = z
  .object({
    creatorName: z.string().trim().optional(),
    email: z.string().email(),
    socials: z.string().optional(),
    niche: z.string().optional(),
    followers: z.string().optional(),
    contentLinks: z.string().optional(),
    country: z.string().optional(),
    notes: z.string().optional(),
    ageConfirmed: z.union([z.literal("true"), z.literal("false")]).optional(),
    company: z.string().max(0).optional().default(""), // honeypot
  })
  .passthrough(); // allow any extra fields present in the current form

export async function submitCreatorApplication(
  _prevState: unknown,
  formData: FormData
): Promise<{ ok: boolean; error?: string }> {
  try {
    // collect all keys (form already exists)
    const entries: Record<string, string | undefined> = {};
    for (const [key, value] of formData.entries()) {
      entries[key] = value?.toString();
    }

    const parsed = CreatorSchema.safeParse(entries);
    if (!parsed.success) return { ok: false, error: "Invalid form submission." };
    if (parsed.data.company !== "") return { ok: false, error: "Invalid form submission." };

    const data = parsed.data as Record<string, string | undefined>;
    const senderEmail = data.email || "no-reply@munk-media.com";

    await sendEmail({
      subject: `New Creator Application – ${data.creatorName || "Unknown"}`,
      html: creatorHtml(data),
      text: creatorText(data),
      replyTo: senderEmail,
    });

    return { ok: true };
  } catch (_e) {
    return {
      ok: false,
      error:
        "Something went wrong. Please try again or email us at info@munk-media.com.",
    };
  }
}

