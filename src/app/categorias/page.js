import CategoryCard from "@/components/layout/CategoryCard";
import FeaturedSection from "@/components/layout/FeaturedSection";
import Hero from "@/components/layout/Hero";
import SectionDivider from "@/components/layout/SectionDivider";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id, name, slug")
    .order("name");

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
      };
    }),
  );

  return (
    <>
      <Hero
        title="Todas las categorías"
        subtitle="Listado completo de categorías"
      />
      <FeaturedSection />
      <SectionDivider />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoriesWithForums.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}
