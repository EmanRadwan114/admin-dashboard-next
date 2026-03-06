import { Metadata } from "next";
import LoginForm from "./components/LoginForm";

export const metadata: Metadata = {
title: "Login",
description: "Login to your account",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <LoginForm />
    </main>
  );
}
