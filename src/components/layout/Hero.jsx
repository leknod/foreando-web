import { poppins } from "@/lib/fonts";

export default function Hero({ title, subtitle, url, category, Icon }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-blue-50 to-slate-200">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
        {Icon && (
          <div className="flex justify-center">
            <Icon
              className="h-22.5 w-22.5 rounded-xl bg-white p-5 text-blue-600 shadow shadow-blue-500/15"
              title={category}
            />
          </div>
        )}
        {category && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm text-neutral-500 shadow shadow-blue-500/15">
            {/* <span className="flex h-2 w-2 animate-pulse rounded-full bg-blue-500" /> */}
            {`Categoría: ${category}`}
          </div>
        )}
        <h1
          className={`${poppins.className} mt-4 text-3xl font-bold tracking-tight text-balance text-gray-900 antialiased sm:text-4xl lg:text-5xl`}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty text-gray-600 sm:text-lg">
            {subtitle}
          </p>
        )}

        <div className="mx-auto mt-6 flex items-center justify-center gap-4">
          {url ? (
            <a
              href={url}
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
            </a>
          ) : (
            <>
              <span className="h-px w-20 bg-linear-to-r from-transparent to-gray-300" />
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-linear-to-r from-blue-400 to-blue-500" />
                <div className="h-2 w-2 rounded-full bg-linear-to-r from-blue-500 to-blue-600 shadow-sm shadow-blue-500/30" />
                <div className="h-1 w-1 rounded-full bg-linear-to-r from-blue-400 to-blue-500" />
              </div>
              <span className="h-px w-20 bg-linear-to-l from-transparent to-gray-300" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
