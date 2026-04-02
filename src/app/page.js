import Link from "next/link";
import FeaturedSection from "@/components/layout/FeaturedSection";
import CategoryCard from "@/components/layout/CategoryCard";
import { supabase } from "@/lib/supabase";
import { Check, TrendingUp, Users, Zap } from "lucide-react";

export default async function Home() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id, name, slug, forums:forums(count)");

  const categoriesWithForums = await Promise.all(
    categories.map(async (category) => {
      const { data: forums } = await supabase
        .from("forums")
        .select("id, name, slug, icon")
        .eq("category_id", category.id)
        .limit(10);

      return {
        ...category,
        forums,
        forumCount: category.forums[0].count,
      };
    }),
  );

  const topCategories = categoriesWithForums
    .sort((a, b) => b.forumCount - a.forumCount)
    .slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-blue-50 to-slate-200">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/20 blur-2xl" />

          <div className="absolute top-20 left-[15%] h-2 w-2 animate-pulse rounded-full bg-blue-400/60" />
          <div className="absolute top-32 right-[20%] h-3 w-3 animate-pulse rounded-full bg-indigo-400/50 delay-300" />
          <div className="absolute bottom-24 left-[25%] h-2.5 w-2.5 animate-pulse rounded-full bg-sky-400/50 delay-500" />
          <div className="absolute right-[30%] bottom-32 h-2 w-2 animate-pulse rounded-full bg-blue-500/40 delay-700" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32 lg:py-40">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            El directorio de foros más completo
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-6xl">
            Descubre las mejores{" "}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                comunidades
              </span>
              <span className="absolute bottom-2 left-0 z-0 h-3 w-full -rotate-1 bg-blue-200/50" />
            </span>{" "}
            en español
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-gray-600 sm:text-xl">
            Explora cientos de foros activos sobre tecnología, gaming, deportes,
            hobbies y mucho más. Encuentra tu comunidad y conecta con personas
            que comparten tus intereses.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/foros"
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
            </Link>
            <Link
              href="/categorias"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
            >
              Ver categorías
            </Link>
          </div>
        </div>
      </section>
      <FeaturedSection />
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px max-w-xs flex-1 bg-linear-to-r from-transparent via-slate-300 to-slate-300" />

          <span className="text-sm font-bold text-pretty text-gray-400 uppercase">
            Principales categorías
          </span>

          <div className="h-px max-w-xs flex-1 bg-linear-to-l from-transparent via-slate-300 to-slate-300" />
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pt-8 pb-10 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {topCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <div className="flex justify-center pb-18">
        <Link
          href="/categorias"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3 shadow-sm ring-1 shadow-blue-100 ring-blue-200 transition-all hover:shadow-blue-500/20"
        >
          <span className="bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-sm font-semibold text-transparent group-hover:from-blue-600 group-hover:to-indigo-600">
            Ver todas las categorías
          </span>
          <svg
            className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-500"
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
        </Link>
      </div>
      <section className="relative w-full bg-linear-to-b from-slate-100 to-slate-200 py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-blue-300 opacity-10 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-blue-400 opacity-10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              ¿Tienes un foro?{" "}
              <span className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Únete a nosotros
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Aumenta la visibilidad de tu comunidad y conecta con miles de
              usuarios hispanohablantes
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                <TrendingUp className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">
                Más visibilidad
              </h3>
              <p className="text-sm text-slate-600">
                Aparece en búsquedas y categorías relevantes
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">
                Nuevos usuarios
              </h3>
              <p className="text-sm text-slate-600">
                Atrae miembros activos interesados en tu temática
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                <Zap className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">
                Rápido y fácil
              </h3>
              <p className="text-sm text-slate-600">
                Proceso de alta simple en menos de 2 minutos
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                <Check className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mb-1 font-semibold text-slate-900">100% Gratis</h3>
              <p className="text-sm text-slate-600">
                Listado básico gratuito, sin costes ocultos
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/listar-foro"
              className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
            >
              <Zap className="h-5 w-5" />
              Listar mi foro ahora
            </Link>
            {/*<p className="mt-4 text-sm text-slate-500">
              ¿Quieres destacar aún más?{" "}
              <Link
                href="/planes"
                className="text-blue-600 underline hover:text-blue-700"
              >
                Conoce nuestros planes premium
              </Link>
            </p>*/}
          </div>
        </div>
      </section>
    </>
  );
}
