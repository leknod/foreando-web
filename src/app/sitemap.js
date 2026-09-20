import { sql } from "@/lib/db";

export default async function sitemap() {
  const staticRoutes = [
    { url: "https://foreando.com" },
    { url: "https://foreando.com/categorias" },
    { url: "https://foreando.com/foros" },
  ];

  const categories = await sql`SELECT slug FROM categories`;

  const categoryRoutes =
    categories?.map((category) => ({
      url: `https://foreando.com/categorias/${category.slug}`,
    })) ?? [];

  const forums = await sql`SELECT slug FROM forums`;

  const forumRoutes =
    forums?.map((forum) => ({
      url: `https://foreando.com/foros/${forum.slug}`,
    })) ?? [];

  return [...staticRoutes, ...categoryRoutes, ...forumRoutes];
}
