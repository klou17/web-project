"use client";

import { useForm } from "@/hooks/useForm";
import { z } from "zod";
import { formSchema } from "@/lib/auth-schema";
import { AuthCard } from "@/components/auth/card";

const SignUp = () => {
  const form = useForm({
    schema: formSchema,
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <AuthCard
      title="Sign Up"
      description="Create your account to get started"
      form={form}
      onSubmit={onSubmit}
      fields={[
        { name: "name", label: "Name", placeholder: "John Doe" },
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
      footerText="Already have an account?"
      footerLink="/sign-in"
      footerLinkText="Sign in"
    />
  );
};

export default SignUp;
