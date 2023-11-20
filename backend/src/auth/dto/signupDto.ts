import { z } from 'zod';

export const signupDtoSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  gender: z.enum(['M', 'F']),
  firstName: z.string().trim().toLowerCase(),
  lastName: z.string().trim().toLowerCase(),
  password: z.string().trim().min(3),
});

export type SignupDto = z.infer<typeof signupDtoSchema>;
