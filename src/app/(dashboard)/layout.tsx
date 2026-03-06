import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for eyego task",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <Navbar />
      <main className="flex-1 my-10 px-4 sm:max-w-xl lg:max-w-4xl xl:max-w-7xl m-auto">
        {children}
      </main>
    </div>
  );
}
