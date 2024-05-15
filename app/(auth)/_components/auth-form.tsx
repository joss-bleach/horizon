"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface AuthFormProps {
  type: string;
}

const authFormSchema = z.object({});

export const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof authFormSchema>) => {
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
        <>Form</>
      )}
    </section>
  );
};
