import { string, z } from "zod";

export const productsSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  previousPrice:z.number().optional(),
  tags: z.array(z.string()).optional(),
  category: z.string(),
  rating: z.number(),
});
