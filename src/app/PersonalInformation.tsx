import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { PersonalInformationSchema } from "@/schemas/personal-information";
import { z } from "zod";
import { useFormContext } from "@/context/useFormContext";
import FormLayout from "@/components/FormLayout";
import Label from "@/components/Label";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Button from "@/components/Button";
import StageIndicator from "@/components/StageIndicator";

const PersonalInfoForm = () => {
  const { updateFormValues, setCurrentStage } = useFormContext();
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof PersonalInformationSchema>>({
	resolver: zodResolver(PersonalInformationSchema),
  });

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof PersonalInformationSchema>) => {
	updateFormValues(data);
	setCurrentStage((prev) => prev + 1);
	router.push("/travel-preferences");
  };

  return (
	<FormLayout>
  	<StageIndicator />
  	<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    	<div>
      	<Label htmlFor="first_name">Full Name</Label>
      	<Input {...register("first_name")} id="first_name" />
      	<InputError error={errors.first_name?.message} />
    	</div>
        <div>
      	<Label htmlFor="last_name">Full Name</Label>
      	<Input {...register("last_name")} id="last_name" />
      	<InputError error={errors.last_name?.message} />
    	</div>
    	<div>
      	<Label htmlFor="date_of_birth">Date of Birth</Label>
      	<Input {...register("date_of_birth")} id="date_of_birth" type="date" />
      	<InputError error={errors.date_of_birth?.message} />
    	</div>
    	<div>
      	<Label htmlFor="nationality">Nationality</Label>
      	<Input {...register("nationality")} id="nationality" />
      	<InputError error={errors.nationality?.message} />
    	</div>
    	<div>
      	<Label htmlFor="email">Email</Label>
      	<Input {...register("email")} id="email" type="email" />
      	<InputError error={errors.email?.message} />
    	</div>
    	<div>
      	<Label htmlFor="phone">Phone Number</Label>
      	<Input {...register("phone")} id="phone" />
      	<InputError error={errors.phone?.message} />
    	</div>
    	<Button type="submit">Next</Button>
  	</form>
	</FormLayout>
  );
};

export default PersonalInfoForm;
