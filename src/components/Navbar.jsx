"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/favicon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Cart", href: "/cart" },
  ];
  return (
    <header className="w-full bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={36}
            height={36}
            className="select-none pointer-events-none"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-1 hover:text-black text-lg dark:hover:text-white transition"
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm font-medium hover:text-red-500 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-6 py-2.5 rounded-full transition shadow-sm hover:shadow-md"
          >
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-700 dark:text-neutral-200"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-base font-medium py-1 text-neutral-800 dark:text-neutral-200"
            >
              <span>{link.name}</span>
              {link.hasDropdown && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>
          ))}

          <hr className="my-2 border-neutral-100 dark:border-neutral-800" />

          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-center font-medium py-2 text-neutral-700 dark:text-neutral-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="text-center bg-red-500 text-white font-medium py-3 rounded-full"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
