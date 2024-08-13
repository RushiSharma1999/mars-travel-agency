import z from "zod";

export const PersonalInformationSchema = z.object({
    first_name: z.string()
        .min(1, { message: "First name is required" }),
    last_name: z.string()
        .min(1, { message: "Last name is required" }),
    date_of_birth: z.string()
        .min(1, {message: "Date of birth is required"}),
    nationality: z.string()
        .min(1, {message: "Nationality is required"}),
    email: z.string()
        .email({message: "Email is required"}),
    phone: z.string()
        .min(1, {message: "Phone number is required"})
});