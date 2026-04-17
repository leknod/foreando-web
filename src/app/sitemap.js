import { supabase } from "@/lib/supabase";

export default async function sitemap() {
  const staticRoutes = [
    { url: "https://foreando.com" },
    { url: "https://foreando.com/categorias" },
    { url: "https://foreando.com/foros" },
  ];

  const { data: categories } = await supabase.from("categories").select("slug");

  const categoryRoutes =
    categories?.map((category) => ({
      url: `https://foreando.com/categorias/${category.slug}`,
    })) ?? [];

  const { data: forums } = await supabase.from("forums").select("slug");

  const forumRoutes =
    forums?.map((forum) => ({
      url: `https://foreando.com/foros/${forum.slug}`,
    })) ?? [];

  return [...staticRoutes, ...categoryRoutes, ...forumRoutes];
}
