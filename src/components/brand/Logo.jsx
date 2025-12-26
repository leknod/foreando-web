import { poppins } from "@/lib/fonts";

export default function Logo({
  on = "light",
  className = "",
  imgWidth = "w-12",
  textSize = "text-3xl",
  gap = "gap-3",
}) {
  const textClass = on === "light" ? "text-black" : "text-white";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      <img src="logo.svg" alt="Foreando" className={`${imgWidth}`} />
      <span
        className={`${textSize} font-medium tracking-tight ${textClass} ${poppins.className}`}
      >
        foreando
      </span>
    </div>
  );
}
