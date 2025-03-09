"use client";

import { z } from "zod";
import { AuthCard } from "@/components/auth/card";
import { signInFormSchema } from "@/lib/auth-schema";
import { useForm } from "@/hooks/useForm";

const SignIn = () => {
  const form = useForm({
    schema: signInFormSchema,
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    console.log(values);
  };

  return (
    <AuthCard
      title="Sign In"
      description="Welcome back! Please sign in to continue"
      form={form}
      onSubmit={onSubmit}
      fields={[
        {
          name: "email",
          label: "Email",
          placeholder: "john@email.com",
          type: "email",
        },
        {
          name: "password",
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
        },
      ]}
      footerText="Don't have an account yet?"
      footerLink="/sign-up"
      footerLinkText="Sign Up"
    />
  );
};

export default SignIn;
