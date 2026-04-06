"use client";

import Hero from "@/components/layout/Hero";
import { useState } from "react";
import { User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import { poppins } from "@/lib/fonts";

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

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
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

      <div className="mx-auto max-w-xl px-6 py-12 sm:py-16">
        {isSubmitted ? (
          <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Mensaje enviado
            </h2>
            <p className="mt-3 text-gray-600">
              Hemos recibido tu mensaje correctamente. Te responderemos lo antes
              posible al correo proporcionado.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ nombre: "", email: "", mensaje: "" });
              }}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:from-blue-600 hover:to-blue-700"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-900"
                >
                  <User className="h-4 w-4 text-blue-500" />
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
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-900"
                >
                  <Mail className="h-4 w-4 text-blue-500" />
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
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-900"
                >
                  <MessageSquare className="h-4 w-4 text-blue-500" />
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
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
                <div className="mt-2 flex justify-end">
                  <span
                    className={`text-xs ${formData.mensaje.length >= 450 ? "text-amber-600" : "text-gray-400"}`}
                  >
                    {formData.mensaje.length}/500 caracteres
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`${poppins.className} mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-6 py-3.5 text-sm font-medium text-white antialiased transition-all hover:from-blue-600 hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-70`}
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

            <p className="mt-6 text-center text-xs text-gray-500">
              Al enviar este formulario aceptas nuestra{" "}
              <a
                href="/politica-de-privacidad"
                className="text-blue-500 hover:underline"
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
