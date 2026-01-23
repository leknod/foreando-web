import ForumCard from "@/components/layout/ForumCard";
import FeaturedForumCard from "@/components/layout/FeaturedForumCard";
import Hero from "@/components/layout/Hero";
import { supabase } from "@/lib/supabase";
import FeaturedSection from "@/components/layout/FeaturedSection";
import SectionDivider from "@/components/layout/SectionDivider";
import { FilterBar } from "@/components/layout/FilterBar";

export default async function Page() {
  const { data: forums, error } = await supabase
    .from("forums")
    .select("id, name, short_description, url, icon")
    .eq("featured", false);

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
      <FilterBar />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {forums.map((forum, index) => (
          <ForumCard key={forum.id} forum={forum} index={index} />
        ))}
      </div>
    </>
  );
}
