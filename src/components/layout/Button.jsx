import Link from "next/link";
import { poppins } from "@/lib/fonts";

export default function Button({ href, children, className = "" }) {
  const isExternal = href?.startsWith("http");
  const linkClass = `${poppins.className} inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white antialiased shadow-sm transition-all duration-400 hover:from-blue-600 hover:to-blue-700 hover:shadow-md`;

  return (
    <div className={`flex justify-center ${className}`}>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={linkClass}>
          {children}
        </Link>
      )}
    </div>
  );
}
