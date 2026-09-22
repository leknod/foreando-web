import Link from "next/link";

export default function Button({ href, children, className = "" }) {
  const isExternal = href?.startsWith("http");
  const linkClass = `inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-primary to-primary-hover px-5 py-2.5 text-sm font-medium text-primary-foreground antialiased shadow-sm transition-all duration-400 hover:from-primary-hover hover:to-primary-active hover:shadow-md`;

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
