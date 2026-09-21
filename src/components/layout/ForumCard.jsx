import Link from "next/link";
import Button from "./Button";
import ForumIcon from "./ForumIcon";
import DrBadge from "./DrBadge";

export default function ForumCard({ forum, index }) {
  const categoryName =
    forum.categories?.name || forum.category_name || forum.category;
  const categorySlug =
    forum.categories?.slug || forum.category_slug;

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 pt-8 shadow-md transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="absolute top-0 left-0">
        <div className="text-foreground rounded-br-xl bg-linear-to-r from-slate-100 to-slate-200 px-3 py-1.5 text-xs font-bold font-mono shadow-sm">
          #{index + 1}
        </div>
      </div>

      {(forum.ahrefs_dr !== null && forum.ahrefs_dr !== undefined) && (
        <div className="absolute top-0 right-0 z-10">
          <DrBadge dr={forum.ahrefs_dr} variant="corner" />
        </div>
      )}

      <div className="flex flex-col items-center text-center">
        <Link href={`/foros/${forum.slug}`}>
          <div className="mb-4 flex items-center gap-3">
            <ForumIcon url={forum.url} name={forum.name} />
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <h3 className="text-base font-semibold text-slate-800 antialiased">
                  {forum.name}
                </h3>
                <div className="absolute right-0 -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-blue-400 via-blue-500 to-blue-600" />
              </div>
            </div>
          </div>
        </Link>

        <p className="mb-4 line-clamp-4 text-xs leading-relaxed text-slate-500">
          {`« ${forum.short_description} »`}
        </p>

        {categoryName && (
          <div className="mb-5">
            {categorySlug ? (
              <Link
                href={`/categorias/${categorySlug}`}
                className="inline-flex max-w-full items-center gap-1 rounded-full border border-blue-200 bg-blue-50/90 px-2.5 py-0.5 text-[11px] font-medium text-blue-700/60 shadow-2xs backdrop-blur-xs transition-colors hover:border-blue-300 hover:bg-blue-100 hover:text-blue-800"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span className="truncate">{categoryName}</span>
              </Link>
            ) : (
              <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-2.5 py-0.5 text-xs font-medium text-blue-700 shadow-2xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/80" />
                <span className="truncate">{categoryName}</span>
              </span>
            )}
          </div>
        )}

        <Button href={forum.url}>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Visitar
        </Button>
      </div>
    </article>
  );
}
