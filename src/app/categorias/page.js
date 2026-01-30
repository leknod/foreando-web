import CategoryCard from "@/components/layout/CategoryCard";
import FeaturedSection from "@/components/layout/FeaturedSection";
import Hero from "@/components/layout/Hero";
import { SearchBar } from "@/components/layout/SearchBar";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id, name, slug, forums:forums(count)");

  const categoriesWithForums = await Promise.all(
    categories.map(async (category) => {
      const { data: forums } = await supabase
        .from("forums")
        .select("id, name, slug, icon")
        .eq("category_id", category.id)
        .limit(10);

      return {
        ...category,
        forums,
        forumCount: category.forums[0].count,
      };
    }),
  );

  if (error) {
    return <p>Error cargando categorías</p>;
  }

  categoriesWithForums.sort((a, b) => b.forumCount - a.forumCount);

  return (
    <>
      <Hero
        title="Todas las categorías"
        subtitle="Listado completo de categorías"
      />
      <FeaturedSection />
      <SearchBar />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoriesWithForums.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}
