import { Metadata } from "next";
import RegisterForm from "./components/ReisterForm";

export const metadata: Metadata = {
title: "Register",
description: "Register to your account",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <RegisterForm />
    </main>
  );
}
