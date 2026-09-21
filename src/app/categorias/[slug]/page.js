import { sql } from "@/lib/db";
import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import ForumCard from "@/components/layout/ForumCard";
import { categoryIcons } from "@/lib/categoryIcons";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const data = await sql`SELECT slug FROM categories`;
    return data.map((cat) => ({ slug: cat.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = await sql`
    SELECT name, description
    FROM categories
    WHERE slug = ${slug}
    LIMIT 1
  `;

  const category = data?.[0];
  if (!category) return { title: "Categoría no encontrada" };

  return {
    title: `Recopilación de foros de ${category.name.toLowerCase()}`,
    description: category.description,
    alternates: {
      canonical: `https://foreando.com/categorias/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const data = await sql`
    SELECT * FROM categories WHERE slug = ${slug} LIMIT 1
  `;

  const category = data?.[0];

  if (!category) {
    notFound();
  }

  const forums = await sql`
    SELECT id, name, short_description, url, slug, ahrefs_dr
    FROM forums
    WHERE category_id = ${category.id}
    ORDER BY sort_order DESC NULLS LAST
  `;

  const forumsWithCategory = forums.map((forum) => ({
    ...forum,
    categories: { name: category.name, slug: category.slug },
  }));

  const Icon = categoryIcons[category.slug];

  return (
    <>
      <Hero title={category.name} subtitle={category.description} Icon={Icon} />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {forumsWithCategory.map((forum, index) => (
          <ForumCard key={forum.id} forum={forum} index={index} />
        ))}
      </div>
    </>
  );
}
