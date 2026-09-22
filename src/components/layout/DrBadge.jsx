"use client";

import { useState, useRef, useEffect } from "react";

export default function DrBadge({ dr, variant = "corner" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Cerrar al pulsar fuera
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    // Pequeño retardo para no colisionar con el evento de apertura
    const timer = setTimeout(() => {
      document.addEventListener("pointerdown", handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsOpen((prev) => {
      const next = !prev;
      clearTimeout(timeoutRef.current);
      if (next) {
        // Auto-cierre tras 3.5 segundos en móvil
        timeoutRef.current = setTimeout(() => setIsOpen(false), 3500);
      }
      return next;
    });
  };

  const handleMouseEnter = () => {
    // En móviles/touch no procesamos hover para evitar conflictos con el tap
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      return;
    }
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={`Domain Rating: ${dr} (Ahrefs)`}
        className={
          variant === "corner"
            ? "flex cursor-default select-none items-center gap-1 rounded-bl-xl bg-linear-to-l from-badge-dr-from to-badge-dr-to px-3 py-1.5 font-mono text-xs font-bold shadow-sm"
            : "flex cursor-default select-none items-center gap-1 rounded-full border border-primary-soft-border bg-primary-soft/90 px-2 py-0.5 font-mono text-[11px] font-bold shadow-2xs"
        }
      >
        <span
          className={
            variant === "corner"
              ? "text-[10px] font-semibold uppercase tracking-wider text-foreground-subtle"
              : "text-[9px] font-semibold uppercase tracking-wider text-foreground-subtle"
          }
        >
          DR
        </span>
        <span className="text-badge-dr-text">{dr}</span>
      </button>

      {/* Tooltip / Popover flotante */}
      <div
        className={`pointer-events-none absolute right-0 top-full z-50 mt-1.5 w-max max-w-[220px] transition-all duration-200 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-1 scale-95 opacity-0"
        }`}
      >
        <div className="rounded-lg border border-slate-700/60 bg-slate-900/95 px-2.5 py-1.5 text-center text-white shadow-xl backdrop-blur-xs">
          <div className="text-[11px] font-semibold text-blue-300">
            Domain Rating: {dr}
          </div>
          <div className="text-[10px] text-slate-300">
            Métrica de autoridad (Ahrefs)
          </div>
        </div>
      </div>
    </div>
  );
}
