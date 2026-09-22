"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../brand/Logo";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { label: "Todos los foros", href: "/foros" },
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
        className="sticky top-0 z-50 w-full bg-card antialiased shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-18">
          <Link href={"/"}>
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="/listar-foro">Listar foro</Button>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground-secondary transition-colors hover:bg-card-hover md:hidden"
            aria-label="Abrir menú"
          >
            <Menu />
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
