import ForumCard from "@/components/ForumCard";
import Hero from "@/components/layout/Hero";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const { data: forums, error } = await supabase
    .from("forums")
    .select("id, name, short_description, url, icon");

  if (error) {
    return <p>Error cargando foros</p>;
  }

  return (
    <>
      <Hero
        title="Todos los foros"
        subtitle="Listado completo de foros y comunidades"
      />
      <div className="grid gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {forums.map((forum) => (
          <ForumCard key={forum.id} forum={forum} />
        ))}
      </div>
    </>
  );
}
