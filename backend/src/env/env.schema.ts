import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DB_URL: z.string().trim(),
  JWT_SECRET: z.string().trim(),
  MAIL_HOST: z.string().optional(),
  MAIL_SERVICE: z.string().optional(),
  MAIL_SECURE: z.coerce.boolean().default(false),
  MAIL_PORT: z.coerce.number().int().optional(),
  MAIL_USER: z.string().trim().toLowerCase().optional(),
  MAIL_PASSWORD: z.string().trim().optional(),
});
