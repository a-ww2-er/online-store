import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string(),
});
export const registerSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Please input your full name" })
    .refine(
      (value) => /^[a-zA-Z ]*$/.test(value),
      "Name cannot contain numbers or special characters"
    ),
  email: z.string().email("Email is invalid"),
  password: z
    .string()
    .min(8, {
      message: "Password must be 8 characters long",
    })
    .refine(
      (value) =>
        /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/.test(
          value
        ),
      "Password must contain uppercase, a number and a special character"
    )
});

