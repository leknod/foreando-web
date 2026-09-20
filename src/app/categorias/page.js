import CategoryCard from "@/components/layout/CategoryCard";
import FeaturedSection from "@/components/layout/FeaturedSection";
import Hero from "@/components/layout/Hero";
import { SearchBar } from "@/components/layout/SearchBar";
import { sql } from "@/lib/db";

export const metadata = {
  title: "Todos los foros en español por categorías",
  description:
    "Explora las categorías de Foreando y encuentra foros en español organizados por temática. Descubre comunidades activas según tus intereses.",
  alternates: {
    canonical: "https://foreando.com/categorias",
  },
};

export default async function Page() {
  const categories = await sql`
    SELECT c.id, c.name, c.slug, COUNT(f.id)::int AS forum_count
    FROM categories c
    LEFT JOIN forums f ON f.category_id = c.id
    GROUP BY c.id
  `;

  const categoriesWithForums = await Promise.all(
    categories.map(async (category) => {
      const forums = await sql`
        SELECT id, name, slug, icon, url
        FROM forums
        WHERE category_id = ${category.id}
        ORDER BY sort_order DESC NULLS LAST
        LIMIT 10
      `;

      return {
        ...category,
        forums,
        forumCount: category.forum_count,
      };
    }),
  );

  categoriesWithForums.sort((a, b) => b.forumCount - a.forumCount);

  return (
    <>
      <Hero
        title="Todas las categorías"
        subtitle="Listado completo de categorías"
      />
      <FeaturedSection />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoriesWithForums.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}
