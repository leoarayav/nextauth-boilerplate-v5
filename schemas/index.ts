import * as z from "zod"

/**
 * @description Login schema for validation
 */
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }) 
})