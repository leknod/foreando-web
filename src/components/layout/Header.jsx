"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../brand/Logo";
import MenuIcon from "../icons/MenuIcon";
import MobileMenu from "./MobileMenu";
import { poppins } from "@/lib/fonts";

const navLinks = [
  { label: "Lista completa", href: "/foros" },
  { label: "Categorías", href: "/categorias" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`${poppins.className} sticky top-0 z-50 w-full bg-white antialiased shadow-[0_4px_20px_rgba(59,130,246,0.25)]`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href={"/"}>
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-primary inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2563eb]"
            >
              Listar foro
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
            aria-label="Abrir menú"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
