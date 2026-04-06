import Hero from "@/components/layout/Hero";

export const metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Foreando: información sobre el tratamiento de datos personales, derechos de los usuarios y uso de cookies.",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Hero title="Política de privacidad" />
      <section className="legal mx-auto max-w-4xl space-y-4 px-4 py-10 text-sm leading-relaxed text-gray-700">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y
          del Consejo (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de
          Protección de Datos Personales y garantía de los derechos digitales
          (LOPDGDD), se informa al usuario de los siguientes datos:
        </p>
        <ul>
          <li>
            <strong>Responsable:</strong> Marc Doncel
          </li>
          <li>
            <strong>Correo electrónico:</strong> contacto@tudominio.com
          </li>
          <li>
            <strong>Sitio web:</strong> marcdoncel.com
          </li>
        </ul>

        <h2>2. Datos que se recogen</h2>
        <p>
          Foreando puede recopilar los siguientes datos personales según la
          interacción del usuario con el Sitio Web:
        </p>
        <ul>
          <li>
            <strong>Formulario de contacto o envío de foros:</strong> nombre,
            dirección de correo electrónico y la información que el usuario
            facilite voluntariamente.
          </li>
          <li>
            <strong>Navegación:</strong> datos técnicos como la dirección IP,
            tipo de navegador, páginas visitadas y duración de la sesión,
            recogidos de forma anónima o agregada mediante herramientas de
            analítica.
          </li>
        </ul>
        <p>
          El Sitio Web no recoge datos de menores de 14 años. Si el titular
          detecta que se han facilitado datos de un menor sin consentimiento
          parental, procederá a su eliminación.
        </p>

        <h2>3. Finalidad del tratamiento</h2>
        <p>Los datos facilitados se tratan con las siguientes finalidades:</p>
        <ul>
          <li>
            Gestionar las solicitudes de inclusión de foros en el directorio.
          </li>
          <li>
            Responder a consultas o mensajes enviados a través del correo de
            contacto.
          </li>
          <li>
            Mejorar el funcionamiento y los contenidos del Sitio Web mediante
            analítica de uso.
          </li>
          <li>Cumplir con las obligaciones legales aplicables.</li>
        </ul>

        <h2>4. Base jurídica del tratamiento</h2>
        <p>
          El tratamiento de los datos se fundamenta en las siguientes bases
          jurídicas:
        </p>
        <ul>
          <li>
            <strong>Consentimiento del interesado</strong> (art. 6.1.a RGPD),
            cuando el usuario facilita sus datos voluntariamente a través de
            formularios o correo electrónico.
          </li>
          <li>
            <strong>Interés legítimo del responsable</strong> (art. 6.1.f RGPD),
            para el análisis estadístico del tráfico web con fines de mejora del
            servicio.
          </li>
        </ul>

        <h2>5. Conservación de los datos</h2>
        <p>
          Los datos personales se conservarán únicamente durante el tiempo
          necesario para cumplir la finalidad para la que fueron recogidos y, en
          todo caso, durante los plazos legalmente establecidos. Una vez
          finalizada la relación o atendida la solicitud, los datos serán
          bloqueados y posteriormente suprimidos conforme a la normativa
          aplicable.
        </p>

        <h2>6. Comunicación de datos a terceros</h2>
        <p>
          El titular no cederá los datos personales de los usuarios a terceros,
          salvo obligación legal o en los casos en que sea estrictamente
          necesario para la prestación del servicio, como el uso de proveedores
          de alojamiento web o herramientas de analítica, que actuarán en todo
          caso como encargados del tratamiento bajo las garantías exigidas por
          el RGPD.
        </p>
        <p>
          En ningún caso se venderán ni cederán datos con fines comerciales a
          terceros.
        </p>

        <h2>7. Derechos de los usuarios</h2>
        <p>
          El usuario puede ejercer en cualquier momento los siguientes derechos
          ante el responsable del tratamiento, enviando una comunicación a{" "}
          <strong>contacto@tudominio.com</strong>:
        </p>
        <ul>
          <li>
            <strong>Acceso:</strong> conocer qué datos personales se están
            tratando.
          </li>
          <li>
            <strong>Rectificación:</strong> solicitar la corrección de datos
            inexactos o incompletos.
          </li>
          <li>
            <strong>Supresión:</strong> solicitar la eliminación de los datos
            cuando ya no sean necesarios.
          </li>
          <li>
            <strong>Limitación:</strong> solicitar la restricción del
            tratamiento en determinadas circunstancias.
          </li>
          <li>
            <strong>Oposición:</strong> oponerse al tratamiento de los datos en
            los supuestos previstos por la ley.
          </li>
          <li>
            <strong>Portabilidad:</strong> recibir los datos en un formato
            estructurado y de uso común.
          </li>
        </ul>
        <p>
          Asimismo, el usuario tiene derecho a presentar una reclamación ante la
          Agencia Española de Protección de Datos (<strong>www.aepd.es</strong>)
          si considera que el tratamiento de sus datos no se ajusta a la
          normativa vigente.
        </p>

        <h2>8. Cookies</h2>
        <p>
          El Sitio Web utiliza cookies propias y de terceros. Para más
          información sobre qué cookies se utilizan y cómo gestionarlas,
          consulte nuestra{" "}
          <a href="/politica-de-cookies">Política de cookies</a>.
        </p>

        <h2>9. Seguridad</h2>
        <p>
          El titular adopta las medidas técnicas y organizativas necesarias para
          garantizar la seguridad de los datos personales y evitar su
          alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta
          del estado de la tecnología, la naturaleza de los datos y los riesgos
          a que están expuestos.
        </p>

        <h2>10. Modificaciones</h2>
        <p>
          El titular se reserva el derecho de modificar la presente política de
          privacidad para adaptarla a novedades legislativas, jurisprudenciales
          o de interpretación de la Agencia Española de Protección de Datos.
          Cualquier cambio será publicado en esta misma página, por lo que se
          recomienda al usuario consultarla periódicamente.
        </p>
      </section>
    </>
  );
}
