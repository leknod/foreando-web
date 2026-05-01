import Hero from "@/components/layout/Hero";
import Link from "next/link";

export const metadata = {
  title: "Términos de uso",
  description:
    "Términos de uso de Foreando: condiciones que regulan el acceso y uso del directorio de foros y comunidades online en español.",
  alternates: {
    canonical: "https://foreando.com/terminos-de-uso",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TerminosUso() {
  return (
    <>
      <Hero title="Términos de uso" />
      <section className="legal mx-auto max-w-4xl space-y-4 px-4 py-10 text-sm leading-relaxed text-gray-700">
        <h2>1. Aceptación</h2>
        <p>
          El acceso y uso de Foreando (en adelante, "el Sitio Web") implica la
          aceptación plena y sin reservas de los presentes términos de uso. Si
          no estás de acuerdo con alguno de ellos, te rogamos que te abstengas
          de utilizar el Sitio Web.
        </p>

        <h2>2. Descripción del servicio</h2>
        <p>
          Foreando es un directorio informativo de foros y comunidades online en
          español. El Sitio Web recopila y organiza enlaces a recursos externos,
          actuando únicamente como intermediario. No aloja ni modera el
          contenido de los foros listados.
        </p>

        <h2>3. Uso permitido</h2>
        <p>
          El Sitio Web está destinado a un uso personal, informativo y no
          comercial. El usuario se compromete a:
        </p>
        <ul>
          <li>Utilizar el Sitio Web de forma lícita y respetuosa.</li>
          <li>
            No reproducir, copiar ni distribuir los contenidos del Sitio Web sin
            autorización expresa del titular.
          </li>
          <li>
            No realizar acciones que puedan dañar, sobrecargar o deteriorar el
            Sitio Web o sus sistemas.
          </li>
          <li>
            No utilizar técnicas de scraping, bots u otros medios automatizados
            para extraer contenido del Sitio Web sin permiso previo.
          </li>
        </ul>

        <h2>4. Envío de foros</h2>
        <p>
          Los usuarios que soliciten la inclusión de un foro en el directorio
          declaran ser propietarios o administradores autorizados del mismo, y
          garantizan que su contenido cumple con la legislación vigente.
        </p>
        <p>
          El titular se reserva el derecho de aceptar, rechazar o eliminar
          cualquier foro sin necesidad de justificación, especialmente si
          incumple los presentes términos o el{" "}
          <Link href={"/aviso-legal"}>Aviso legal</Link>.
        </p>

        <h2>5. Contenido de terceros</h2>
        <p>
          Los enlaces a foros externos se ofrecen únicamente como referencia. El
          titular no controla ni se responsabiliza del contenido, la
          disponibilidad ni las políticas de los sitios enlazados. El acceso a
          dichos sitios se realiza bajo la exclusiva responsabilidad del
          usuario.
        </p>

        <h2>6. Propiedad intelectual</h2>
        <p>
          Todos los elementos originales del Sitio Web —incluyendo diseño,
          textos, logotipos y código— son propiedad del titular o de terceros
          que han autorizado su uso. Queda prohibida su reproducción o uso sin
          autorización expresa.
        </p>

        <h2>7. Limitación de responsabilidad</h2>
        <p>
          El titular no garantiza la disponibilidad continua del Sitio Web ni la
          exactitud de la información sobre los foros listados, y no será
          responsable de los daños que pudieran derivarse de su uso o de la
          imposibilidad de acceder al mismo.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          El titular puede modificar los presentes términos en cualquier
          momento. Los cambios serán publicados en esta página y entrarán en
          vigor desde su publicación. Se recomienda revisarlos periódicamente.
        </p>

        <h2>9. Legislación aplicable</h2>
        <p>
          Los presentes términos se rigen por la legislación española. Cualquier
          controversia se someterá a los juzgados y tribunales del domicilio del
          titular, salvo que la normativa aplicable disponga otra cosa.
        </p>

        <h2>10. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con estos términos, puedes
          contactar en nuestra{" "}
          <Link href={"/contacto"}>página de contacto</Link>.
        </p>
      </section>
    </>
  );
}
