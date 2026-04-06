import { poppins } from "@/lib/fonts";
import Link from "next/link";

export default function FeaturedForumCard({ forum, index }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/30">
      <div className="flex items-center justify-center gap-1.5 border-b border-blue-100 bg-linear-to-r from-blue-50 via-white to-blue-50 py-2">
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
        <span
          className={`${poppins.className} bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-sm font-semibold text-transparent antialiased`}
        >
          Destacado
        </span>
      </div>

      <div className="flex flex-col items-center p-6 text-center">
        <Link href={`/foros/${forum.slug}`}>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100">
              {forum.icon ? (
                <img
                  src={`/icons/${forum.icon}`}
                  alt={forum.name}
                  className="h-6 w-6 object-contain"
                />
              ) : (
                <span className="text-xl font-bold text-blue-500">
                  {forum.name}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <h3
                  className={`${poppins.className} text-base font-semibold text-slate-800 antialiased`}
                >
                  {forum.name}
                </h3>
                <div className="absolute right-0 -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-blue-400 via-blue-500 to-blue-600" />
              </div>
            </div>
          </div>
        </Link>

        <p className="mb-5 line-clamp-4 text-xs leading-relaxed text-slate-500">
          {`« ${forum.short_description} »`}
        </p>

        <div className="flex justify-center">
          <Link
            href={forum.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${poppins.className} inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white antialiased shadow-sm transition-all duration-200 hover:gap-3 hover:from-blue-600 hover:to-blue-700 hover:shadow-md`}
          >
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
          </Link>
        </div>
      </div>
    </article>
  );
}
