"use client";

import Hero from "@/components/layout/Hero";
import { useState } from "react";
import { User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function FormContacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setIsSubmitted(true);
    } catch {
      alert("Error al enviar. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mensaje" && value.length > 500) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Hero
        title="Contacto"
        subtitle="¿Tienes alguna duda o sugerencia? Escríbenos"
      />

      <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {isSubmitted ? (
          <div className="rounded-2xl border border-border-subtle bg-card p-8 text-center shadow-lg sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Mensaje enviado
            </h2>
            <p className="mt-3 text-foreground-muted">
              ¡Gracias por escribirnos! Ya tenemos tu mensaje y te contestamos enseguida.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ nombre: "", email: "", mensaje: "" });
              }}
              className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-primary to-primary-hover px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:from-primary-hover hover:to-primary-active"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border-subtle bg-card p-8 shadow-lg sm:p-10"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <User className="h-4 w-4 text-primary" />
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  className="w-full rounded-lg border border-border bg-card-muted px-4 py-3 text-foreground placeholder-foreground-subtle transition-all outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ejemplo@correo.com"
                  className="w-full rounded-lg border border-border bg-card-muted px-4 py-3 text-foreground placeholder-foreground-subtle transition-all outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full resize-none rounded-lg border border-border bg-card-muted px-4 py-3 text-foreground placeholder-foreground-subtle transition-all outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20"
                />
                <div className="mt-2 flex justify-end">
                  <span
                    className={`text-xs font-mono ${formData.mensaje.length >= 450 ? "text-amber-600" : "text-foreground-subtle"}`}
                  >
                    {formData.mensaje.length}/500 caracteres
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-linear-to-r from-primary to-primary-hover px-6 py-3.5 text-sm font-medium text-primary-foreground antialiased transition-all hover:from-primary-hover hover:to-primary-active disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </>
              )}
            </button>

            <p className="mt-6 text-center text-xs text-foreground/70">
              Al enviar este formulario aceptas nuestra{" "}
              <a
                href="/politica-de-privacidad"
                className="text-primary hover:underline"
              >
                política de privacidad
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </>
  );
}
