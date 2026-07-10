import { z } from 'zod';

export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    status: z.enum(['active', 'inactive', 'out of stock']),
    createdAt: z.string().transform((str) => new Date(str)),
});
export const productsSchema = z.array(productSchema);
export type Product = z.infer<typeof productSchema>;