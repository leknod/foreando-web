import { sql } from "@/lib/db";
import FeaturedForumCard from "./FeaturedForumCard";

export default async function FeaturedSection() {
  let featuredForums;
  try {
    featuredForums = await sql`
      SELECT f.id, f.name, f.short_description, f.url, f.slug, f.ahrefs_dr,
             c.name AS category_name, c.slug AS category_slug
      FROM forums f
      LEFT JOIN categories c ON c.id = f.category_id
      WHERE f.featured = true AND f.status = 'approved'
      ORDER BY f.sort_order DESC NULLS LAST
      LIMIT 4
    `;
  } catch (error) {
    console.error("Error cargando foros destacados:", error);
    return <p>Error cargando foros</p>;
  }

  const featuredForumsWithCategories = featuredForums.map((forum) => ({
    ...forum,
    categories: { name: forum.category_name, slug: forum.category_slug },
  }));

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {featuredForumsWithCategories.map((featuredForum, index) => (
        <FeaturedForumCard
          key={featuredForum.id}
          forum={featuredForum}
          index={index}
        />
      ))}
    </div>
  );
}
