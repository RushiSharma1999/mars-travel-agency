import { z } from "zod";

export const HealthSafetySchema = z.object({
  health_declaration: z.boolean().refine(val => val === true, { message: "Health declaration is required" }),
  emergency_contact_name: z.string().min(1, { message: "Emergency contact name is required" }),
  emergency_contact_email: z.string().min(1, { message: "Emergency contact email is required" }),
  medical_conditions: z.string().optional(),
});
