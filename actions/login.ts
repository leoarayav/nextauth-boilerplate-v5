"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

/**
 * @description Login a user
 * @param {object} values - The values to login with
 * @returns {void}
 */
export const login = (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);
  if (!validateFields.success)
    return {
      error: "Invalid fields!"
    }
  return { success: "Email sent!" }
}