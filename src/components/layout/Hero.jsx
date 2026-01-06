import { poppins } from "@/lib/fonts";

export default function Hero({ title, subtitle }) {
  return (
    <header className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <h1
        className={`text-foreground ${poppins.className} mb-4 text-center text-3xl font-extrabold tracking-tight antialiased md:text-4xl`}
      >
        {title}
      </h1>
      <p
        className={`text-muted ${poppins.className} text-center text-xl antialiased`}
      >
        {subtitle}
      </p>
    </header>
  );
}
