import * as z from "zod"

/**
 * @description Login schema for validation
 */
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string() 
})