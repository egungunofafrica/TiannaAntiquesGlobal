import { z } from "zod";

export const antiqueSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  category: z.string(),
});

export type Antique = z.infer<typeof antiqueSchema>;

export const contactInfoSchema = z.object({
  name: z.string(),
  title: z.string(),
  email: z.string().email(),
  textingNumber: z.string(),
  whatsappNumber: z.string(),
  location: z.string(),
  bio: z.string(),
  countries: z.array(z.string()),
});

export type ContactInfo = z.infer<typeof contactInfoSchema>;
