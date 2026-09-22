import { sql } from "@/lib/db";
import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import { categoryIcons } from "@/lib/categoryIcons";
import { getCategoryColor } from "@/lib/categoryColors";
import ForumCard from "@/components/layout/ForumCard";
import { HelpCircle } from "lucide-react";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const data = await sql`SELECT slug FROM forums`;
    return data.map((forum) => ({ slug: forum.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = await sql`
    SELECT name, short_description
    FROM forums
    WHERE slug = ${slug} AND status = 'approved'
    LIMIT 1
  `;

  const forum = data?.[0];
  if (!forum) return { title: "Foro no encontrado" };

  return {
    title: `Todo sobre ${forum.name}`,
    description: forum.short_description,
    alternates: {
      canonical: `https://foreando.com/foros/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const data = await sql`
    SELECT f.*, c.name AS category_name, c.slug AS category_slug
    FROM forums f
    LEFT JOIN categories c ON c.id = f.category_id
    WHERE f.slug = ${slug}
    LIMIT 1
  `;

  const row = data?.[0];

  if (!row) {
    notFound();
  }

  // Reshape to match the previous { categories: { name, slug } } structure
  const forum = {
    ...row,
    categories: { name: row.category_name, slug: row.category_slug },
  };

  const relatedForums = await sql`
    SELECT f.*, c.name AS category_name, c.slug AS category_slug
    FROM forums f
    LEFT JOIN categories c ON c.id = f.category_id
    WHERE f.category_id = ${forum.category_id} AND f.slug != ${slug}
    ORDER BY f.sort_order DESC NULLS LAST
    LIMIT 3
  `;

  const relatedForumsReshaped = relatedForums.map((rf) => ({
    ...rf,
    categories: { name: rf.category_name, slug: rf.category_slug },
  }));

  const Icon = categoryIcons[forum.categories?.slug] || HelpCircle;
  const colors = getCategoryColor(forum.categories?.slug);

  return (
    <>
      <Hero
        title={forum.name}
        subtitle={forum.short_description}
        Icon={Icon}
        iconColorClass={colors.icon}
        category={forum.categories?.name}
        categoryPillClass={colors.pillStatic}
        categoryDotClass={colors.dot}
        url={forum.url}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <main className="col-span-1 flex flex-col gap-8 rounded-2xl shadow-md lg:col-span-8">
            <div className="long-description rounded-2xl border border-border-subtle bg-card p-6 text-foreground-secondary shadow-sm sm:p-10">
              {forum.long_description ? (
                <div
                  className="long-description"
                  dangerouslySetInnerHTML={{ __html: forum.long_description }}
                />
              ) : (
                <p className="text-foreground-muted">No hay descripción disponible.</p>
              )}
            </div>
          </main>

          <aside className="col-span-1 lg:col-span-4">
            <h3 className="mb-5 ml-1 text-xs font-bold tracking-[0.15em] text-foreground-subtle uppercase">
              FOROS RELACIONADOS
            </h3>

            <div className="flex flex-col gap-4">
              {relatedForumsReshaped.map((related, index) => (
                <ForumCard
                  key={related.id || related.slug}
                  forum={related}
                  index={index}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
