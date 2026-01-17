import { supabase } from "@/lib/supabase";
import FeaturedForumCard from "./FeaturedForumCard";

export default async function FeaturedSection() {
  const { data: featuredForums, featuredError } = await supabase
    .from("forums")
    .select("id, name, short_description, url, icon")
    .eq("featured", true)
    .limit(4);

  if (featuredError) {
    return <p>Error cargando foros</p>;
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {featuredForums.map((featuredForum, index) => (
        <FeaturedForumCard
          key={featuredForum.id}
          forum={featuredForum}
          index={index}
        />
      ))}
    </div>
  );
}
