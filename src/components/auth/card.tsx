import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuthFormField } from "./formField";

interface Props {
  title: string;
  description: string;
  form: any;
  onSubmit: (values: any) => void;
  fields: { name: string; label: string; placeholder: string; type?: string }[];
  footerText?: string;
  footerLink?: string;
  footerLinkText?: string;
}

export const AuthCard = ({
  title,
  description,
  form,
  onSubmit,
  fields,
  footerText,
  footerLink,
  footerLinkText,
}: Props) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {fields.map((field) => (
              <AuthFormField
                key={field.name}
                control={form.control}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                inputType={field.type}
              />
            ))}
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      {footerText && footerLink && (
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            {footerText}{" "}
            <Link href={footerLink} className="text-primary hover:underline">
              {footerLinkText}
            </Link>
          </p>
        </CardFooter>
      )}
    </Card>
  );
};
