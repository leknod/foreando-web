import { X } from "lucide-react";
import Logo from "../brand/Logo";
import Link from "next/link";

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-4/5 max-w-sm flex-col bg-card shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-6">
          <Logo onClick={onClose} />
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground-secondary transition-colors hover:bg-card-hover"
            aria-label="Cerrar menú"
          >
            <X />
          </button>
        </div>

        <nav className="flex flex-1 flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="border-b border-border-subtle py-4 text-base font-medium text-foreground-secondary transition-colors hover:text-foreground"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-6">
          <Link
            href="/listar-foro"
            onClick={onClose}
            className="bg-primary flex w-full items-center justify-center rounded-lg py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Listar foro
          </Link>
        </div>
      </div>
    </>
  );
}
