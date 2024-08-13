"use client";

import Image from "next/image";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { PersonalInformationSchema } from "@/schemas/personal-information";
import { z } from "zod";
import { FormProvider, useFormContext } from "@/context/useFormContext";
import FormLayout from "@/components/FormLayout";
import Label from "@/components/Label";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Button from "@/components/Button";
import StageIndicator from "@/components/StageIndicator";

const Home = () => {
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
  <FormProvider>
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
  </FormProvider>
  );
};

export default Home;


// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
