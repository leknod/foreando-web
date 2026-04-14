import Link from "next/link";
import { poppins } from "@/lib/fonts";
import Button from "./Button";

export default function ForumCard({ forum, index }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 pt-8 shadow-md transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="absolute top-0 left-0">
        <div className="text-foreground rounded-br-xl bg-linear-to-r from-slate-100 to-slate-200 px-3 py-1.5 text-xs font-bold shadow-sm">
          #{index + 1}
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <Link href={`/foros/${forum.slug}`}>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100">
              {forum.icon ? (
                <img
                  src={`/icons/${forum.icon}`}
                  alt=""
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
