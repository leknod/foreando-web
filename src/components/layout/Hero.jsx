import { poppins } from "@/lib/fonts";

export default function Hero({ title, subtitle }) {
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
        <h1
          className={`${poppins.className} text-3xl font-bold tracking-tight text-balance text-gray-900 antialiased sm:text-4xl lg:text-5xl`}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty text-gray-600 sm:text-lg">
            {subtitle}
          </p>
        )}

        <div className="mx-auto mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-linear-to-r from-transparent to-gray-300" />
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-linear-to-r from-blue-400 to-blue-500" />
            <div className="h-2 w-2 rounded-full bg-linear-to-r from-blue-500 to-blue-600 shadow-sm shadow-blue-500/30" />
            <div className="h-1 w-1 rounded-full bg-linear-to-r from-blue-400 to-blue-500" />
          </div>
          <span className="h-px w-20 bg-linear-to-l from-transparent to-gray-300" />
        </div>
      </div>
    </section>
  );
}
