"use client";
import FormField from "@/components/FormField";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterInput,
} from "../validation/register.validation";
import PasswordField from "@/components/PasswordField";
import Spinner from "@/components/Spinner";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase.config";
import { toast } from "react-toastify";
import { updateProfile, User } from "firebase/auth";
import { useRouter } from "next/navigation";

const ReisterForm: React.FC = () => {
  const router = useRouter();

  // react hook form & zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  // firbase
  const [createUserWithEmailAndPassword, , , error] =
    useCreateUserWithEmailAndPassword(auth);

  const firebaseErr =
    (
      error?.customData as unknown as {
        _tokenResponse: {
          error: {
            message: string;
          };
        };
      }
    )?._tokenResponse?.error?.message || error?.message;

  // handlers
  const onSubmit = async (data: RegisterInput) => {
    try {
      const res = await createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      // update profile to store username
      if (res?.user) {
        await updateProfile(res?.user as User, {
          displayName: data.fullName,
        });
        toast.success("Account created successfully");
        reset();
        router.push("/login");
      }
    } catch (error: unknown) {
      toast.error((error as { message: string })?.message);
    }
  };

  return (
    <section className="p-6 bg-white shadow-lg rounded-md sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3">
      {/* header */}
      <header className="text-center space-y-2 mb-4">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-gray-600">
          Please fill in the form below to create an account
        </p>

        {/* firebase error */}
        {error && <p className="text-red-800 text-sm">{firebaseErr}</p>}
      </header>

      {/* form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Full Name"
          placeholder="Enter your full name"
          id="fullName"
          type="text"
          {...register("fullName")}
          error={errors.fullName?.message}
        />
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
        <PasswordField
          label="Confirm Password"
          placeholder="Confirm your password"
          id="confirmPassword"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? <Spinner /> : "Register"}
        </Button>
      </form>

      {/* login link */}
      <p className="text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-foreground hover:underline transition-all duration-300"
        >
          Login
        </Link>
      </p>
    </section>
  );
};

export default ReisterForm;
