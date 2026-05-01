import Hero from "@/components/layout/Hero";
import Link from "next/link";

export const metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de Foreando: información sobre qué cookies utilizamos, para qué sirven y cómo puedes gestionarlas o desactivarlas.",
  alternates: {
    canonical: "https://foreando.com/politica-de-cookies",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PoliticaCookies() {
  return (
    <>
      <Hero title="Política de cookies" />
      <section className="legal mx-auto max-w-4xl space-y-4 px-4 py-10 text-sm leading-relaxed text-gray-700">
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en el
          dispositivo del usuario cuando visita un sitio web. Su función es
          recordar información sobre la visita para facilitar la navegación y,
          en algunos casos, analizar el comportamiento del usuario con fines
          estadísticos o de mejora del servicio.
        </p>

        <h2>2. Cookies utilizadas en este sitio web</h2>
        <p>
          A continuación se detallan las cookies que pueden instalarse durante
          la navegación por Foreando:
        </p>

        <h3>2.1 Cookies técnicas (necesarias)</h3>
        <p>
          Son imprescindibles para el correcto funcionamiento del Sitio Web.
          Permiten, por ejemplo, mantener la sesión o recordar las preferencias
          de cookies del usuario. No requieren consentimiento.
        </p>
        <ul>
          <li>
            <strong>cookie_consent:</strong> almacena la preferencia del usuario
            respecto al uso de cookies. Duración: 12 meses.
          </li>
        </ul>

        <h3>2.2 Cookies de analítica</h3>
        <p>
          Permiten analizar el uso del Sitio Web de forma anónima o agregada,
          con el objetivo de mejorar su funcionamiento y contenidos. Requieren
          el consentimiento del usuario.
        </p>
        <ul>
          <li>
            <strong>Google Analytics (_ga, _ga_*):</strong> registra datos
            estadísticos sobre el tráfico y comportamiento de los usuarios.
            Titular: Google LLC. Duración: hasta 2 años. Más información en la{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              política de privacidad de Google
            </a>
            .
          </li>
        </ul>

        <h2>3. Cómo gestionar las cookies</h2>
        <p>
          El usuario puede aceptar, rechazar o revocar su consentimiento en
          cualquier momento a través del panel de preferencias de cookies
          disponible en el Sitio Web.
        </p>
        <p>
          Además, la mayoría de navegadores permiten gestionar las cookies
          directamente desde su configuración:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Ten en cuenta que deshabilitar determinadas cookies puede afectar al
          correcto funcionamiento del Sitio Web.
        </p>

        <h2>4. Transferencias internacionales</h2>
        <p>
          Algunas de las cookies de terceros listadas (como las de Google
          Analytics) pueden implicar transferencias de datos a servidores
          ubicados fuera del Espacio Económico Europeo. Estas transferencias se
          realizan bajo las garantías adecuadas exigidas por el RGPD, como las
          cláusulas contractuales tipo aprobadas por la Comisión Europea.
        </p>

        <h2>5. Actualizaciones</h2>
        <p>
          Esta política puede actualizarse cuando se incorporen nuevas cookies
          al Sitio Web o cambien las condiciones de las existentes. Se
          recomienda revisarla periódicamente. En caso de cambios relevantes, se
          solicitará nuevamente el consentimiento al usuario cuando sea
          necesario.
        </p>

        <h2>6. Más información</h2>
        <p>
          Para cualquier consulta sobre el uso de cookies, puede contactar en
          nuestra <Link href={"/contacto"}>página de contacto</Link>. o
          consultar la{" "}
          <Link href={"/politica-de-privacidad"}>Política de privacidad</Link>.
        </p>
      </section>
    </>
  );
}
