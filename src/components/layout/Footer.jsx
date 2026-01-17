import Link from "next/link";
import Logo from "../brand/Logo";
import { poppins } from "@/lib/fonts";

const footerLinks = {
  destacado: [
    { label: "Foros populares", href: "#" },
    { label: "Nuevas comunidades", href: "#" },
    { label: "Categorías", href: "#" },
    { label: "Tendencias", href: "#" },
  ],
  sobreNosotros: [
    { label: "Listar foro", href: "#" },
    { label: "Publicitarse", href: "#" },
    { label: "Quiénes somos", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Aviso Legal", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de cookies", href: "#" },
    { label: "Términos de uso", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo imgWidth="10" textSize="text-2xl" on="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Directorio de foros y comunidades online en español. Encuentra tu
              comunidad ideal y conecta con personas que comparten tus
              intereses.
            </p>
          </div>
          <div>
            <h3
              className={`mb-4 text-sm font-semibold ${poppins.className} tracking-wider text-white uppercase`}
            >
              Destacado
            </h3>
            <ul className="space-y-3">
              {footerLinks.destacado.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-gray-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`mb-4 text-sm font-semibold ${poppins.className} tracking-wider text-white uppercase`}
            >
              Sobre nosotros
            </h3>
            <ul className="space-y-3">
              {footerLinks.sobreNosotros.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-gray-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`mb-4 text-sm font-semibold ${poppins.className} tracking-wider text-white uppercase`}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-gray-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Foreando. Todos los derechos
            reservados.
          </p>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            Hecho con <span className="text-red-500">♥</span> por Leknod
          </span>
        </div>
      </div>
    </footer>
  );
}
