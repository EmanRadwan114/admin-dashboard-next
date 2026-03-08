"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebase/firebase.config.client";
import { useSignOut } from "react-firebase-hooks/auth";

const Logout: React.FC = () => {
  const router = useRouter();
  const [signOut] = useSignOut(auth);
  const handleLogout = async () => {
    const res = await signOut();
    if (res) {
      await fetch("/api/logout", {
        method: "POST",
      });
      toast.success("Logged out Successfully!");
      router.push("/login");
    } else {
      toast.error("Failed to logout");
    }
  };
  return (
    <div className="my-5">
      <Button
        className="bg-red-800 text-white w-full hover:bg-red-900 gap-2"
        onClick={handleLogout}
      >
        <LogOut />
        Logout
      </Button>
    </div>
  );
};

export default Logout;
