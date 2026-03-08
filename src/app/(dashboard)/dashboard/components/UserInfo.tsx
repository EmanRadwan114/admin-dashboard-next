"use client";
import { auth } from "@/lib/firebase/firebase.config.client";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRef } from "react";
import { Mail } from "lucide-react";

const UserInfo: React.FC = () => {
  const [user] = useAuthState(auth);
  const [date] = useState(() => new Date());

  console.log(user);
  return (
    <div className="bg-white rounded-md shadow-md border border-neutral-200 p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-800">
          Welcome{" "}
          <span className="text-foreground/60 capitalize">
            {user?.displayName}!
          </span>
        </h2>
        <div className="flex gap-2 items-center">
          <div className="size-3 bg-green-600 rounded-full"></div>
          <span className="text-neutral-600 text-lg">
            {date.toDateString()}
          </span>
        </div>
        <p className="text-neutral-600 text-lg flex gap-2 items-center">
          <Mail size={20} className="text-foreground/60" />
          {user?.email}
        </p>
      </div>
      <div className="size-20 rounded-md bg-foreground -rotate-12 shadow-md text-white font-extrabold flex items-center justify-center text-4xl capitalize -order-1 sm:order-1">
        {user?.displayName?.slice(0, 1)}
      </div>
    </div>
  );
};

export default UserInfo;
