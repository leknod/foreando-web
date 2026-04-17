import Hero from "@/components/layout/Hero";
import { supabase } from "@/lib/supabase";
import FeaturedSection from "@/components/layout/FeaturedSection";
import ForumsList from "@/components/layout/ForumsList";

export const metadata = {
  title: "Todos los foros en español",
  description:
    "Descubre todos los foros en español disponibles en Foreando. Explora comunidades activas, participa en debates y encuentra foros según tus intereses.",
  alternates: {
    canonical: "https://foreando.com/foros",
  },
};

export default async function Page() {
  const { data: forums, error } = await supabase
    .from("forums")
    .select("id, name, short_description, url, icon, slug, categories(name)")
    .eq("featured", false)
    .order("sort_order");

  if (error) {
    return <p>Error cargando foros</p>;
  }

  return (
    <>
      <Hero
        title="Todos los foros"
        subtitle="Listado completo de foros y comunidades"
      />
      <FeaturedSection />
      <ForumsList initialForums={forums} />
    </>
  );
}
