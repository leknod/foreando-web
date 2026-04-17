import Hero from "@/components/layout/Hero";

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
          Foreando nació de una necesidad sencilla: encontrar en un solo lugar
          los foros y comunidades online en español que siguen activos. Buscar
          esa información dispersa por la web era tedioso, así que decidí
          recopilarla yo mismo.
        </p>
        <p>
          Detrás de este proyecto hay una sola persona, Marc, con afición por
          los datos y por organizar información. No soy una empresa ni un equipo
          de marketing: soy alguien a quien le gustan los foros, la cultura de
          las comunidades online y el hecho de que todavía hay mucha gente que
          prefiere debatir en un hilo antes que en un feed.
        </p>
        <p>
          El objetivo de Foreando es simple: ser el mejor directorio de foros en
          español. Que si buscas una comunidad sobre fotografía, motos,
          programación, jardinería o lo que sea, puedas encontrarla aquí sin
          tener que buscar demasiado.
        </p>
        <p>
          El directorio crece poco a poco, con criterio y sin prisa. Cada foro
          listado ha sido revisado manualmente para comprobar que está activo y
          es accesible. No hay algoritmos ni listas generadas automáticamente,
          solo curaduría.
        </p>
        <p>
          Si conoces un foro que debería estar aquí, o tienes cualquier
          sugerencia, escríbeme a{" "}
          <a href="mailto:contacto@tudominio.com">contacto@tudominio.com</a>.
          Siempre leo los mensajes.
        </p>
      </section>
    </>
  );
}
