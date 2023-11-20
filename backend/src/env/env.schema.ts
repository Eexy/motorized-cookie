import {z} from "zod";

export const envSchema = z.object({
    PORT: z.coerce.number().default(3000)
})
