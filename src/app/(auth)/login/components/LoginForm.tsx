"use client";
import FormField from "@/components/FormField";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import PasswordField from "@/components/PasswordField";
import Spinner from "@/components/Spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, loginSchema } from "../validation/login.validation";
import { useLogin } from "../hooks/useLogin";

const ReisterForm: React.FC = () => {
  // react hook form & zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  // firbase
  const { error, onLoginSubmit } = useLogin(reset);

  const firebaseErr = error?.code;

  //   handlers
  const onSubmit = async (data: LoginInput) => {
    await onLoginSubmit(data);
  };

  return (
    <section className="p-6 bg-white shadow-lg rounded-md sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3">
      {/* header */}
      <header className="text-center space-y-2 mb-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-gray-600">Please fill in the form below to login</p>

        {/* firebase error */}
        {error && <p className="text-red-800 text-sm">{firebaseErr}</p>}
      </header>

      {/* form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Email Address"
          placeholder="Enter your email address"
          id="email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <PasswordField
          label="Password"
          placeholder="Enter your password"
          id="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? <Spinner /> : "Login"}
        </Button>
      </form>

      {/* register link */}
      <p className="text-center mt-4 text-gray-600">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-foreground hover:underline transition-all duration-300"
        >
          Register
        </Link>
      </p>
    </section>
  );
};

export default ReisterForm;
