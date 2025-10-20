import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  // Honeypot field (should be empty)
  website: z.string().max(0).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

