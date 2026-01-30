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
        className={`fixed top-0 right-0 z-50 flex h-full w-4/5 max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
          <Logo onClick={onClose} />
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100"
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
              className="border-b border-gray-100 py-4 text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-200 p-6">
          <a
            href="#"
            className="bg-primary flex w-full items-center justify-center rounded-lg py-4 text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            Listar foro
          </a>
        </div>
      </div>
    </>
  );
}
