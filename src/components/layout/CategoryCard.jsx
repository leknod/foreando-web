import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <article>
      <h2>{category.name}</h2>
      <ul>
        {category.forums.map((forum) => (
          <li key={forum.id} className="text-sm">
            {forum.name}
          </li>
        ))}
      </ul>
      <Link href={`/categorias/${category.slug}`}>Ver categoría</Link>
    </article>
  );
}
