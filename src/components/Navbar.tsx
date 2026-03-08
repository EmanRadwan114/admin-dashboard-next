"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Logout from "./Logout";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "Home" },
    { href: "/products", label: "Products" },
  ];

  // handlers
  const handleCloseMobileNav = () => {
    setIsOpen(false);
  };

  // desktop sidebar
  const desktopNav = (
    <aside className="hidden lg:block fixed inset-s-0 bottom-0 top-0 w-64 bg-gray-800 text-white h-screen px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-500 pb-4">
        Admin Dashboard
      </h2>
      <nav>
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                className={`transition-colors duration-300 rounded-md group ${isActive ? "bg-white/10" : "hover:bg-white/10"}`}
              >
                <Link
                  href={link.href}
                  className="block py-2 px-4 text-white group-hover:text-white/80 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Logout />
      </nav>
    </aside>
  );

  // mobile navbar
  const mobileNav = (
    <header className="lg:hidden bg-white shadow-md w-full">
      <nav className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <Menu
          className="size-8 p-1 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <div
          className={`fixed z-10 shadow-sm ${isOpen ? "bg-black/50 inset-0" : "bg-transparent top-0 inset-s-0"} transition-colors duration-500`}
          onClick={handleCloseMobileNav}
        >
          <div
            className={`absolute top-0 left-0 right-0 bg-white p-4 w-64 h-screen ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500`}
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="size-8 p-1 cursor-pointer mb-4 block ms-auto"
              onClick={handleCloseMobileNav}
            />
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-500 pb-4 text-foreground">
              Admin Dashboard
            </h2>
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li
                    key={link.href}
                    className={`transition-colors duration-300 rounded-md group ${isActive ? "bg-foreground/80" : "hover:bg-foreground/80 "}`}
                  >
                    <Link
                      href={link.href}
                      className={`block py-2 px-4 group-hover:text-white/80 ${isActive ? "text-white" : "text-foreground"} transition-colors duration-300`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Logout />
          </div>
        </div>
      </nav>
    </header>
  );

  return (
    <>
      {desktopNav}
      {mobileNav}
    </>
  );
};

export default Navbar;
