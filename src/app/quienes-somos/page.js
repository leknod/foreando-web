import Hero from "@/components/layout/Hero";
import Link from "next/link";

export const metadata = {
  title: "Quiénes somos",
  description:
    "Conoce el origen de Foreando, un directorio de foros y comunidades online en español creado por alguien que simplemente disfruta recopilando y organizando información.",
  alternates: {
    canonical: "https://foreando.com/quienes-somos",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuienesSomos() {
  return (
    <>
      <Hero title="Quiénes somos" />
      <section className="legal mx-auto max-w-4xl space-y-4 px-4 py-10 text-sm leading-relaxed text-gray-700">
        <p>
          Foreando nació de una constatación evidente: encontrar foros y
          comunidades online en español activos seguía siendo más difícil de lo
          que debería. La información existía, pero estaba dispersa,
          desactualizada o sepultada bajo resultados de búsqueda irrelevantes.
        </p>
        <p>
          El proyecto responde a esa necesidad con una propuesta directa: un
          directorio centralizado, actualizado y curado manualmente, pensado
          para quien busca comunidades reales donde todavía se debate, se
          aprende y se comparte en profundidad.
        </p>
        <p>
          Cada foro incluido en Foreando ha pasado por una revisión manual. Se
          verifica que esté activo, accesible y que mantenga una comunidad
          funcional. No hay algoritmos de ingesta automática ni listas generadas
          sin criterio. El resultado es un directorio más pequeño que otros,
          pero más fiable.
        </p>
        <p>
          Que si buscas una comunidad sobre fotografía, programación, motos,
          jardinería o cualquier otro tema, puedas encontrarla aquí sin tener
          que buscar demasiado. El directorio crece de forma progresiva,
          incorporando nuevos foros a medida que se revisan y verifican.
        </p>
        <p>
          Si conoces un foro que debería estar listado, puedes usar{" "}
          <Link href={"/listar-foro"}>nuestro formulario</Link>.
        </p>
        <p>
          Si tienes cualquier duda o sugerencia, puedes escribirnos en nuestra{" "}
          <Link href={"/contacto"}>página de contacto</Link>.
        </p>
      </section>
    </>
  );
}
