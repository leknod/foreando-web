import FeaturedSection from "@/components/layout/FeaturedSection";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-blue-50 to-slate-200">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Floating shapes */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/20 blur-2xl" />

          {/* Animated dots */}
          <div className="absolute top-20 left-[15%] h-2 w-2 animate-pulse rounded-full bg-blue-400/60" />
          <div className="absolute top-32 right-[20%] h-3 w-3 animate-pulse rounded-full bg-indigo-400/50 delay-300" />
          <div className="absolute bottom-24 left-[25%] h-2.5 w-2.5 animate-pulse rounded-full bg-sky-400/50 delay-500" />
          <div className="absolute right-[30%] bottom-32 h-2 w-2 animate-pulse rounded-full bg-blue-500/40 delay-700" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32 lg:py-40">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            El directorio de foros más completo
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-6xl">
            Descubre las mejores{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                comunidades
              </span>
              <span className="absolute bottom-2 left-0 -z-0 h-3 w-full -rotate-1 bg-blue-200/50" />
            </span>{" "}
            en español
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-gray-600 sm:text-xl">
            Explora cientos de foros activos sobre tecnología, gaming, deportes,
            hobbies y mucho más. Encuentra tu comunidad y conecta con personas
            que comparten tus intereses.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-gray-900/20 transition-all hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/30"
            >
              Explorar foros
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
            >
              Ver categorías
            </a>
          </div>

          {/* Stats */}
        </div>
      </section>
      <FeaturedSection />
    </>
  );
}
