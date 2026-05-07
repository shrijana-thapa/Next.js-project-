import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z
    .string()
    .min(1, "Email is required").and(
      z.email({ message: "Enter a valid email" })
    ),

  age: z
    .string()
    .min(1, "Age is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Age must be a valid number",
    })
    .refine((val) => Number(val) >= 1 && Number(val) <= 120, {
      message: "Age must be between 1 and 120",
    }),
});

export type UserSchema = z.infer<typeof userSchema>;