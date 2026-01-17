import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <Link href={`/categoria/${category.slug}`}>
        <div className="relative flex items-center justify-center gap-2 px-3 py-3">
          <span className="text-slate-600">
            {/*categoryIcon || <MessageSquare className="h-5 w-5" />*/}
          </span>
          <h3 className="text-base font-semibold text-slate-800">
            {category.name}
          </h3>
          {/* Gradient underline */}
          <div className="absolute right-4 bottom-0 left-4 h-0.5 rounded-full bg-linear-to-r from-blue-400 via-blue-500 to-blue-600" />
        </div>
      </Link>

      {/* Forum List */}
      <div className="flex-1 py-2 pl-2">
        {category.forums?.slice(0, 10).map((forum, index) => (
          <a
            key={index}
            href={`/foro/${forum.slug}`}
            className={`flex items-center gap-2 px-3 py-1.5 transition-colors hover:bg-blue-50 ${
              index !== 0 ? "border-t border-slate-100" : ""
            }`}
          >
            <span className="w-5 text-xs font-medium text-slate-400">
              {index + 1}.
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-100 text-xs">
              <img src={forum.icon} alt="" />
            </span>
            <span className="truncate text-sm font-medium text-slate-700">
              {forum.name}
            </span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <Link
        href={`/categoria/${category.slug}`}
        className="flex items-center justify-center gap-1 border-t border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600"
      >
        Ver toda la categoría →
      </Link>
    </div>
  );
}
