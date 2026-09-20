import { sql } from "@/lib/db";
import FeaturedForumCard from "./FeaturedForumCard";

export default async function FeaturedSection() {
  let featuredForums;
  try {
    featuredForums = await sql`
      SELECT id, name, short_description, url, icon, slug
      FROM forums
      WHERE featured = true AND status = 'approved'
      ORDER BY sort_order DESC NULLS LAST
      LIMIT 4
    `;
  } catch (error) {
    console.error("Error cargando foros destacados:", error);
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
