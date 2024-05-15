import { z } from "zod";

export const authFormSchema = (type: string) =>
  z.object({
    firstName: type === "sign-in" ? z.string().optional() : z.string().min(3),
    lastName: type === "sign-in" ? z.string().optional() : z.string().min(3),
    address: type === "sign-in" ? z.string().optional() : z.string().max(50),
    city: type === "sign-in" ? z.string().optional() : z.string().max(50),
    postCode:
      type === "sign-in" ? z.string().optional() : z.string().min(6).max(8),
    dateOfBirth: type === "sign-in" ? z.string().optional() : z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Your password must contain at least 8 characters",
    }),
  });
