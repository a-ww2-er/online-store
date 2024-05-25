import { z } from "zod";

//validate register inputs
export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string(),
})