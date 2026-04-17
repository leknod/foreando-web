import FormContacto from "@/components/layout/FormContacto";

export const metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con nosotros para cualquier duda o sugerencia sobre Foreando. ¡Estamos aquí para ayudarte!",
  alternates: {
    canonical: "https://foreando.com/contacto",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <FormContacto />;
}
