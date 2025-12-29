import Logo from "../brand/Logo";
import { poppins } from "@/lib/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-muted-dark">
      <div className="space-y-10 px-4 py-12 sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-2 sm:gap-10 sm:space-y-0 sm:px-6 sm:py-16 lg:max-w-5xl lg:grid-cols-3 lg:gap-12 lg:px-8 lg:py-20">
        <section className="sm:col-span-2 lg:col-span-1 lg:mx-auto">
          <Link href="/" aria-label="Ir a la página principal">
            <Logo
              on="dark"
              className="mb-4"
              imgWidth="w-12"
              textSize="text-3xl"
              gap="gap-3"
            />
          </Link>
          <p>Directorio de foros y comunidades online en español.</p>
        </section>
        <section className="lg:mx-auto">
          <h2
            className={`text-foreground-dark mb-4 inline-block border-b pb-0.5 font-bold ${poppins.className} antialiased`}
          >
            Destacado
          </h2>
          <nav aria-label="Enlaces destacados">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="lg:mx-auto">
          <h2
            className={`text-foreground-dark mb-4 inline-block border-b pb-0.5 font-bold ${poppins.className} antialiased`}
          >
            Legal
          </h2>
          <nav aria-label="Enlaces destacados">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Aviso Legal</a>
              </li>
              <li>
                <a href="#">Política de privacidad</a>
              </li>
              <li>
                <a href="#">Política de cookies</a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
      <div className="mx-auto h-px w-2/3 max-w-5xl bg-neutral-500/40"></div>
      <div className="py-6">
        <p className="text-center text-sm">
          &copy;2025 Foreando. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
