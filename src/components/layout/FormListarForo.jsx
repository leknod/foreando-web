"use client";

import Hero from "@/components/layout/Hero";
import { useState } from "react";
import {
  MessageSquare,
  Globe,
  FileText,
  Send,
  CheckCircle,
} from "lucide-react";
import { poppins } from "@/lib/fonts";

export default function FormListarForo() {
  const [formData, setFormData] = useState({
    nombre: "",
    url: "",
    descripcion: "",
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
    if (name === "descripcion" && value.length > 150) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Hero
        title="Lista tu foro"
        subtitle="Comparte tu comunidad con miles de usuarios"
      />

      <div className="mx-auto max-w-xl px-6 py-12 sm:py-16">
        {isSubmitted ? (
          <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Solicitud enviada
            </h2>
            <p className="mt-3 text-gray-600">
              Hemos recibido tu solicitud correctamente. Revisaremos los datos y
              te notificaremos cuando tu foro sea publicado.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:from-blue-600 hover:to-blue-700"
            >
              Volver al inicio
            </a>
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
                  <MessageSquare className="h-4 w-4 text-blue-500" />
                  Nombre del foro
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej: ForoCoches, Mediavida..."
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="url"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-900"
                >
                  <Globe className="h-4 w-4 text-blue-500" />
                  URL del foro
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  required
                  placeholder="https://www.ejemplo.com"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="descripcion"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-900"
                >
                  <FileText className="h-4 w-4 text-blue-500" />
                  Breve descripcion
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe brevemente de que trata tu foro..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
                <div className="mt-2 flex justify-end">
                  <span
                    className={`text-xs ${formData.descripcion.length >= 140 ? "text-amber-600" : "text-gray-400"}`}
                  >
                    {formData.descripcion.length}/150 caracteres
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
                  Enviar solicitud
                </>
              )}
            </button>

            <p className="mt-6 text-center text-xs text-gray-500">
              Al enviar este formulario aceptas nuestros{" "}
              <a href="#" className="text-blue-500 hover:underline">
                terminos y condiciones.
              </a>
            </p>
          </form>
        )}
      </div>
    </>
  );
}
