import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../../contexts/AuthContext";

const robotoFont = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard to monitor products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} antialiased`}>
        <StoreProvider>
          <AuthProvider>
            {children}
            <ToastContainer />
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
