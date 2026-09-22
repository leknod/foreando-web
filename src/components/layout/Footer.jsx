import Link from "next/link";
import Logo from "../brand/Logo";

const footerLinks = {
  destacado: [
    { label: "Todos los foros", href: "/foros" },
    { label: "Categorías", href: "/categorias" },
  ],
  sobreNosotros: [
    { label: "Listar foro", href: "/listar-foro" },
    //{label: "Publicitarse", href: "#" },
    { label: "Quiénes somos", href: "quienes-somos" },
    { label: "Contacto", href: "contacto" },
  ],
  legal: [
    { label: "Aviso Legal", href: "/aviso-legal" },
    { label: "Política de privacidad", href: "/politica-de-privacidad" },
    { label: "Política de cookies", href: "politica-de-cookies" },
    { label: "Términos de uso", href: "terminos-de-uso" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo imgWidth="w-10" textSize="text-2xl" on="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-footer-muted">
              Directorio de foros y comunidades online en español. Encuentra tu
              comunidad y conecta con personas que comparten tus intereses.
            </p>
          </div>
          <div>
            <h3
              className="mb-4 text-sm font-semibold tracking-wider text-footer-foreground uppercase"
            >
              Destacado
            </h3>
            <ul className="space-y-3">
              {footerLinks.destacado.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-footer-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-sm font-semibold tracking-wider text-footer-foreground uppercase"
            >
              Sobre nosotros
            </h3>
            <ul className="space-y-3">
              {footerLinks.sobreNosotros.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-footer-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-sm font-semibold tracking-wider text-footer-foreground uppercase"
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-footer-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-footer-border pt-8 md:flex-row">
          <p className="text-sm text-footer-muted/70">
            © {new Date().getFullYear()} Foreando. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
