import Hero from "@/components/layout/Hero";

export const metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal con información sobre el titular del sitio web, condiciones de uso y responsabilidades legales aplicables a los usuarios.",
  alternates: {
    canonical: "https://foreando.com/aviso-legal",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AvisoLegal() {
  return (
    <>
      <Hero title="Aviso legal" />
      <section className="legal mx-auto max-w-4xl space-y-4 px-4 py-10 text-sm leading-relaxed text-gray-700">
        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del deber de información recogido en el artículo 10 de
          la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico, a continuación se reflejan los
          siguientes datos:
        </p>
        <ul>
          <li>
            <strong>Titular:</strong> Marc Doncel
          </li>
          <li>
            <strong>Correo electrónico:</strong> contacto@tudominio.com
          </li>
          <li>
            <strong>Sitio web:</strong> marcdoncel.com
          </li>
          <li>
            <strong>Actividad:</strong> Directorio informativo de foros y
            comunidades online
          </li>
        </ul>

        <h2>2. Objeto y ámbito de aplicación</h2>
        <p>
          El presente aviso legal regula el uso del sitio web Foreando (en
          adelante, "el Sitio Web"), un directorio de foros y comunidades online
          en español. El acceso y uso del Sitio Web implica la aceptación
          expresa y sin reservas de todas las disposiciones incluidas en este
          aviso legal.
        </p>

        <h2>3. Naturaleza del servicio</h2>
        <p>
          Foreando es un directorio que recopila y organiza enlaces a foros y
          comunidades online de habla hispana. El Sitio Web actúa únicamente
          como intermediario, facilitando el acceso a recursos externos, sin
          alojar ni controlar el contenido de los foros listados.
        </p>
        <p>El titular del Sitio Web no se hace responsable de:</p>
        <ul>
          <li>El contenido publicado en los foros enlazados</li>
          <li>Las políticas de privacidad de los sitios externos</li>
          <li>La disponibilidad o funcionamiento de los foros listados</li>
          <li>
            Las transacciones o interacciones que los usuarios realicen en
            sitios externos
          </li>
        </ul>

        <h2>4. Condiciones de uso</h2>
        <p>
          El usuario se compromete a utilizar el Sitio Web de conformidad con la
          ley, el presente aviso legal, y las buenas costumbres. En particular,
          el usuario se obliga a:
        </p>
        <ul>
          <li>
            No utilizar el Sitio Web para actividades ilícitas o contrarias a la
            buena fe
          </li>
          <li>
            No difundir contenidos de carácter difamatorio, ofensivo o
            discriminatorio
          </li>
          <li>No intentar acceder a áreas restringidas del Sitio Web</li>
          <li>
            Proporcionar información veraz al solicitar el listado de un foro
          </li>
        </ul>

        <h2>5. Listado de foros</h2>
        <p>
          Los usuarios que deseen incluir su foro en el directorio deberán
          cumplir los siguientes requisitos:
        </p>
        <ul>
          <li>Ser el propietario o administrador autorizado del foro</li>
          <li>El foro debe estar activo y accesible públicamente</li>
          <li>El contenido del foro debe cumplir con la legislación vigente</li>
          <li>
            No se aceptarán foros con contenido ilegal, de odio o que promuevan
            actividades delictivas
          </li>
        </ul>
        <p>
          El titular del Sitio Web se reserva el derecho de rechazar o eliminar
          cualquier foro que no cumpla con estos requisitos o que considere
          inapropiado, sin necesidad de previo aviso ni justificación.
        </p>

        <h2>6. Propiedad intelectual</h2>
        <p>
          Todos los contenidos del Sitio Web, incluyendo textos, imágenes,
          diseño gráfico, logotipos, iconos, y código fuente, están protegidos
          por derechos de propiedad intelectual e industrial, siendo titularidad
          del propietario del Sitio Web o de terceros que han autorizado su uso.
        </p>
        <p>
          Queda prohibida la reproducción, distribución, transformación o
          comunicación pública de cualquier contenido sin autorización expresa
          del titular.
        </p>

        <h2>7. Exclusión de garantías y responsabilidad</h2>
        <p>El titular del Sitio Web no garantiza:</p>
        <ul>
          <li>La disponibilidad continua e ininterrumpida del servicio</li>
          <li>La ausencia de errores en los contenidos</li>
          <li>
            La exactitud o actualización de la información sobre los foros
            listados
          </li>
          <li>La ausencia de virus u otros elementos dañinos</li>
        </ul>
        <p>
          El titular no será responsable de los daños y perjuicios de cualquier
          naturaleza que pudieran derivarse del uso del Sitio Web o de la
          imposibilidad de acceder al mismo.
        </p>

        <h2>8. Enlaces a terceros</h2>
        <p>
          El Sitio Web contiene enlaces a sitios web de terceros (foros). Estos
          enlaces se proporcionan únicamente para facilitar al usuario la
          búsqueda de recursos en Internet. El titular no asume responsabilidad
          alguna por el contenido, funcionamiento o políticas de estos sitios
          externos.
        </p>

        <h2>9. Modificaciones</h2>
        <p>
          El titular se reserva el derecho de modificar en cualquier momento las
          condiciones aquí determinadas, siendo debidamente publicadas como aquí
          aparecen. La vigencia de las citadas condiciones irá en función de su
          exposición y estarán vigentes hasta que sean modificadas por otras
          debidamente publicadas.
        </p>

        <h2>10. Legislación aplicable y jurisdicción</h2>
        <p>
          La relación entre el titular y el usuario se regirá por la legislación
          española vigente. Cualquier controversia se someterá a los Juzgados y
          Tribunales de la ciudad del domicilio del titular, salvo que la
          legislación aplicable disponga otra cosa.
        </p>
      </section>
    </>
  );
}
