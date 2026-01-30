import { poppins } from "@/lib/fonts";

export default function Logo({
  on = "light",
  className = "",
  imgWidth = "w-8",
  textSize = "text-xl",
  gap = "gap-3",
}) {
  const textClass = on === "light" ? "text-black" : "text-white";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className={`${imgWidth} ${textClass}`}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2b7fff" />
            <stop offset="100%" stopColor="#155dfc" />
          </linearGradient>
        </defs>

        <rect width="50" height="50" rx="10" fill="url(#logoGradient)" />
        <rect x="9" y="13" width="32" height="7" fill="white" />
        <rect x="9" y="25" width="26" height="7" fill="white" />
        <path d="M18 29L9 38V29.0469L18 29Z" fill="white" />
      </svg>
      <span
        className={`${textSize} font-bold tracking-tight ${textClass} ${poppins.className}`}
      >
        foreando
      </span>
    </div>
  );
}
