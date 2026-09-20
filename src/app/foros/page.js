import Hero from "@/components/layout/Hero";
import { sql } from "@/lib/db";
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
  let forums;
  try {
    forums = await sql`
      SELECT f.id, f.name, f.short_description, f.url, f.icon, f.slug,
             c.name AS category_name
      FROM forums f
      LEFT JOIN categories c ON c.id = f.category_id
      WHERE f.featured = false AND f.status = 'approved'
      ORDER BY f.sort_order DESC NULLS LAST
    `;
  } catch (error) {
    console.error("Error cargando foros:", error);
    return <p>Error cargando foros</p>;
  }

  // Reshape to match the previous { categories: { name } } structure
  const forumsWithCategories = forums.map((forum) => ({
    ...forum,
    categories: { name: forum.category_name },
  }));

  return (
    <>
      <Hero
        title="Todos los foros"
        subtitle="Listado completo de foros y comunidades"
      />
      <FeaturedSection />
      <ForumsList initialForums={forumsWithCategories} />
    </>
  );
}
