import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DB_URL: z.string().trim(),
  JWT_SECRET: z.string().trim(),
});
