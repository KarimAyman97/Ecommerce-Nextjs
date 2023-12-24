import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().email("invalid email!").min(1, "this field is required"),
    password: z.string().min(1, "this field is required"),
  })
  .required();
