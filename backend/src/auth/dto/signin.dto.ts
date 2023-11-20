import { z } from 'zod';

export const signinDtoSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string(),
});

export type SigninDto = z.infer<typeof signinDtoSchema>;
