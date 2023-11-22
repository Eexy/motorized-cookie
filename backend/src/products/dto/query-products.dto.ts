import { z } from 'zod';

export const queryProductsDtoSchema = z.object({
  category: z.string().trim().toLowerCase().optional(),
  limit: z.number().int().min(0).max(25).default(25).optional(),
  page: z.number().int().min(1).default(1).optional(),
});

export type QueryProductsDto = z.infer<typeof queryProductsDtoSchema>;
