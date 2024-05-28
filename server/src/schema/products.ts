import { string, z } from "zod";

export const productsSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  //tags: z.array(z.string()),
  category: z.string(),
  rating: z.number(),
});
