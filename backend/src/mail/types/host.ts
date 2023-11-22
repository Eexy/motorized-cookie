import { z } from 'zod';

export const hostSchema = z.object({
  service: z.string().optional(),
  secure: z.boolean().default(false),
  host: z.string(),
  port: z.coerce.number().int(),
  user: z.string().trim().toLowerCase(),
  password: z.string().trim(),
});

export type IHost = z.infer<typeof hostSchema>;
