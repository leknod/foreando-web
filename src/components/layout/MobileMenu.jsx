import CloseIcon from "../icons/CloseIcon";
import { motion } from "motion/react";

export default function MobileMenu({ onClose }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-surface-dark/50 fixed inset-0 z-40"
        onClick={onClose}
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-surface fixed top-0 right-0 z-50 flex h-dvh w-4/5 flex-col gap-20 px-14 py-10 font-semibold"
      >
        <div className="flex justify-end">
          <button className="cursor-pointer" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <nav>
          <ul className="space-y-6">
            <li>
              <a href="#">Lista completa</a>
            </li>
            <li>
              <a href="#">Categorías</a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto flex justify-center">
          <a
            className="bg-primary text-foreground-dark hover:bg-primary/90 rounded-lg px-4 py-2"
            href="#"
          >
            Listar foro
          </a>
        </div>
      </motion.aside>
    </>
  );
}
