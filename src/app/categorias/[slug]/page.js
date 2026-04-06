import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Hero from "@/components/layout/Hero";
import ForumCard from "@/components/layout/ForumCard";
import { categoryIcons } from "@/lib/categoryIcons";

export const revalidate = 3600;

export async function generateStaticParams() {
  const { data, error } = await supabase.from("categories").select("slug");

  if (error || !data) return [];

  return data.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data } = await supabase
    .from("categories")
    .select("name, description")
    .eq("slug", slug)
    .limit(1);

  const category = data?.[0];
  if (!category) return { title: "Categoría no encontrada" };

  return {
    title: `Foros de ${category.name.toLowerCase()}`,
    description: category.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .limit(1);

  if (error) {
    throw new Error(error.message);
  }

  const category = data?.[0];

  if (!category) {
    notFound();
  }

  const { data: forums, error: forumsError } = await supabase
    .from("forums")
    .select("id, name, short_description, url, icon")
    .eq("category_id", category.id);

  if (forumsError) {
    console.error("Error fetching forums:", forumsError);
  }

  const Icon = categoryIcons[category.slug];

  return (
    <>
      <Hero title={category.name} subtitle={category.description} Icon={Icon} />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {forums.map((forum, index) => (
          <ForumCard key={forum.id} forum={forum} index={index} />
        ))}
      </div>
    </>
  );
}
