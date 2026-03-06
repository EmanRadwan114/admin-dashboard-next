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
      <main className="lg:ms-64 lg:ps-8 w-full">
        <div className="container lg:my-10 px-4 mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
