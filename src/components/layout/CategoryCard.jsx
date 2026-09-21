import Link from "next/link";
import { categoryIcons } from "@/lib/categoryIcons";
import { getCategoryColor } from "@/lib/categoryColors";
import { HelpCircle } from "lucide-react";
import ForumIcon from "./ForumIcon";

export default function CategoryCard({ category }) {
  const Icon = categoryIcons[category.slug];
  const colors = getCategoryColor(category.slug);
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Link href={`/categorias/${category.slug}`}>
        <div className="relative flex items-center justify-center gap-2 px-3 py-3">
          <span className={colors.icon}>
            {Icon ? (
              <Icon className="h-4 w-4" />
            ) : (
              <HelpCircle className="h-4 w-4" />
            )}{" "}
          </span>
          <h3 className="text-base font-semibold text-slate-800 antialiased">
            {category.name}
          </h3>
          <div className={`absolute right-4 bottom-0 left-4 h-0.5 rounded-full bg-linear-to-r ${colors.line}`} />
        </div>
      </Link>

      <div className="flex-1 py-2 pl-2">
        {category.forums?.slice(0, 10).map((forum, index) => (
          <div
            key={index}
            href={forum.url}
            className={`flex items-center gap-2 px-3 py-2.5 transition-colors ${colors.hoverBg} md:py-2 ${
              index !== 0 ? "border-t border-slate-100" : ""
            }`}
          >
            <span className="w-5 text-xs font-medium font-mono text-slate-400">
              {index + 1}.
            </span>
            <Link
              href={`/foros/${forum.slug}`}
              className="flex min-w-0 items-center gap-2"
            >
              <ForumIcon url={forum.url} name={forum.name} size="sm" />
              <span className="truncate text-sm font-medium text-slate-700">
                {forum.name}
              </span>
            </Link>
          </div>
        ))}
      </div>

      <Link
        href={`/categorias/${category.slug}`}
        className="flex items-center justify-center gap-1 border-t border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600"
      >
        Ver toda la categoría →
      </Link>
    </div>
  );
}
