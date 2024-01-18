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

/**
 * @description Register schema for validation
 */
export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }),
})