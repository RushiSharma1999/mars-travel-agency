import { z } from "zod";

export const TravelPreferencesSchema = z.object({
  departure_date: z.string().min(1, { message: "Departure date is required" }),
  return_date: z.string().min(1, { message: "Return date is required" }),
  accommodation_preference: z.enum(["Space Hotel", "Martian Base"], { message: "Accommodation preference is required" }),
  special_requests: z.string().optional(),
});
