import Link from "next/link";
import Button from "./Button";
import ForumIcon from "./ForumIcon";
import DrBadge from "./DrBadge";
import { getCategoryColor } from "@/lib/categoryColors";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function FeaturedForumCard({ forum, index }) {
  const categoryName =
    forum.categories?.name || forum.category_name || forum.category;
  const categorySlug =
    forum.categories?.slug || forum.category_slug;
  const colors = getCategoryColor(categorySlug);

  return (
    <RevealOnScroll delay={(index ?? 0) * 20}>
      <article className="group relative h-full overflow-hidden rounded-2xl border border-primary-soft-border bg-card shadow-lg shadow-blue-500/20 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-blue-500/30">
      <div className="relative flex items-center justify-center gap-1.5 border-b border-primary-soft-border bg-linear-to-r from-primary-soft via-card to-primary-soft py-2">
        <svg className="h-4 w-4" viewBox="0 0 20 20">
          <defs>
            <linearGradient
              id="starGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <path
            fill="url(#starGradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
        <span className="bg-linear-to-r from-primary to-primary-hover bg-clip-text text-sm font-semibold text-transparent antialiased">
          Destacado
        </span>

        {(forum.ahrefs_dr !== null && forum.ahrefs_dr !== undefined) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
            <DrBadge dr={forum.ahrefs_dr} variant="pill" />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center p-6 text-center">
        <Link href={`/foros/${forum.slug}`}>
          <div className="mb-4 flex items-center gap-3">
            <ForumIcon url={forum.url} name={forum.name} />
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <h3 className="text-base font-semibold text-foreground antialiased">
                  {forum.name}
                </h3>
                <div className="absolute right-0 -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-primary/70 via-primary to-primary-hover" />
              </div>
            </div>
          </div>
        </Link>

        <p className="mb-4 line-clamp-4 text-xs leading-relaxed text-foreground-muted">
          {`« ${forum.short_description} »`}
        </p>

        {categoryName && (
          <div className="mb-5">
            {categorySlug ? (
              <Link
                href={`/categorias/${categorySlug}`}
                className={`inline-flex max-w-full items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium shadow-2xs backdrop-blur-xs transition-colors ${colors.pill}`}
              >
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
                <span className="truncate">{categoryName}</span>
              </Link>
            ) : (
              <span className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium shadow-2xs ${colors.pillStatic}`}>
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}/80`} />
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
    </RevealOnScroll>
  );
}
