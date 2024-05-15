"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

interface AuthFormProps {
  type: string;
}

// Validation
import { authFormSchema } from "@/lib/validation";

// Components
import { Form } from "@/components/ui/form";
import { AuthFormInput } from "./auth-form-input";
import { Button } from "@/components/ui/button";

export const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postCode: "",
      dateOfBirth: "",
    },
  });

  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="items-center gap-1">
          <Image
            src="/horizon-logo.svg"
            alt="Horizon logo"
            width={30}
            height={30}
          />
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link account" : type === "sign-in" ? "Sign in" : "Sign up"}
          </h1>
          <p className="text-16 text-gray-600">
            {user
              ? "Link an account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* Plaid link */}</div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleOnSubmit)}
              className="space-y-8"
            >
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <AuthFormInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <AuthFormInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <AuthFormInput
                    control={form.control}
                    name="address"
                    label="Address"
                    placeholder="Enter your address"
                  />
                  <AuthFormInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                  />
                  <div className="flex gap-4">
                    <AuthFormInput
                      control={form.control}
                      name="postCode"
                      label="Post Code"
                      placeholder="Enter your post code"
                    />
                    <AuthFormInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </>
              )}
              <AuthFormInput
                control={form.control}
                name="email"
                label="Email address"
                placeholder="Enter your email address"
              />
              <AuthFormInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button
                  className="form-btn"
                  type="submit"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                       Submitting...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign in"
                  ) : (
                    "Sign up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p>
              {type === "sign-in"
                ? "Don't have an account? "
                : "Already have an account? "}
              <Link
                className="text-[#aa5efe] opacity-90 hover:opacity-100 transition font-semibold"
                href={type === "sign-in" ? "/sign-up" : "sign-in"}
              >
                Click here
              </Link>{" "}
              to {type === "sign-in" ? "sign up" : "sign in"}.
            </p>
          </footer>
        </>
      )}
    </section>
  );
};
