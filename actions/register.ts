"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

/**
 * @description Register a user
 * @param {object} values - The values to register with
 * @returns {void}
 */
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success)
    return {
      error: "Invalid fields!"
    }
  return { success: "Email sent!" }
}