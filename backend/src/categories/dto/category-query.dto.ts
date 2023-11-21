import { z } from 'zod';

export const categoryQueryDtoSchema = z.object({
  limit: z.number().int().min(1).default(25),
  page: z.number().int().min(1).default(1),
});

export type CategoryQueryDto = z.infer<typeof categoryQueryDtoSchema>;
