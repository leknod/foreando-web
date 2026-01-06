"use client";
import Logo from "../brand/Logo";
import MenuIcon from "../icons/MenuIcon";
import { poppins } from "@/lib/fonts";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { AnimatePresence } from "motion/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`shadow-primary/10 px-6 py-4 shadow-md md:py-5 ${poppins.className} antialiased`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" aria-label="Ir a la página principal">
            <Logo />
          </Link>
          <div className="hidden font-semibold md:block">
            <nav>
              <ul className="flex gap-10">
                <li>
                  <Link href="/foros">Lista completa</Link>
                </li>
                <li>
                  <a href="#">Categorías</a>
                </li>
                <li>
                  <a
                    className="bg-primary text-foreground-dark hover:bg-primary/90 rounded-lg px-4 py-2"
                    href="#"
                  >
                    Listar foro
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
