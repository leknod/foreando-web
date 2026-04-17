import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import { categoryIcons } from "@/lib/categoryIcons";
import ForumCard from "@/components/layout/ForumCard";
import { HelpCircle } from "lucide-react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const { data, error } = await supabase.from("forums").select("slug");

  if (error || !data) return [];

  return data.map((forum) => ({
    slug: forum.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data } = await supabase
    .from("forums")
    .select("name, short_description")
    .eq("slug", slug)
    .limit(1);

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

  const { data, error } = await supabase
    .from("forums")
    .select("*, categories(name, slug)")
    .eq("slug", slug)
    .limit(1);

  if (error) {
    throw new Error(error.message);
  }

  const forum = data?.[0];

  if (!forum) {
    notFound();
  }

  const { data: relatedData } = await supabase
    .from("forums")
    .select("*, categories(name, slug)")
    .eq("category_id", forum.category_id)
    .neq("slug", slug)
    .limit(3);

  const relatedForums = relatedData || [];

  const Icon = categoryIcons[forum.categories?.slug] || HelpCircle;

  return (
    <>
      <Hero
        title={forum.name}
        subtitle={forum.short_description}
        Icon={Icon}
        category={forum.categories?.name}
        url={forum.url}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <main className="col-span-1 flex flex-col gap-8 rounded-2xl shadow-md lg:col-span-8">
            <div className="long-description rounded-2xl border border-slate-100 bg-white p-6 text-slate-700 shadow-sm sm:p-10">
              {forum.long_description ? (
                <div
                  className="long-description"
                  dangerouslySetInnerHTML={{ __html: forum.long_description }}
                />
              ) : (
                <p className="text-slate-500">No hay descripción disponible.</p>
              )}
            </div>
          </main>

          <aside className="col-span-1 lg:col-span-4">
            <h3 className="mb-5 ml-1 text-xs font-bold tracking-[0.15em] text-slate-400 uppercase">
              FOROS RELACIONADOS
            </h3>

            <div className="flex flex-col gap-4">
              {relatedForums.map((related, index) => (
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
