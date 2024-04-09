import { z } from "zod";

export const LoginValidation = z.object({
  email: z.string().email().min(2, { message: "Please enter email." }),
  password: z.string().min(2, { message: "Please enter password" }),
});
