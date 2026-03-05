import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
    ),
});

export type LoginInput = z.infer<typeof loginSchema>;
