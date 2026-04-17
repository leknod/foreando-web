import FormListarForo from "@/components/layout/FormListarForo";

export const metadata = {
  title: "Listar foro",
  description:
    "Envía tu foro a Foreando para incluirlo en nuestro directorio de foros en español. Completa el formulario y da visibilidad a tu comunidad.",
  alternates: {
    canonical: "https://foreando.com/listar-foro",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <FormListarForo />;
}
