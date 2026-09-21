/**
 * Color scheme per category, chosen to semantically match the category theme.
 *
 * Each entry provides Tailwind classes for:
 *   - icon: color for the category icon in CategoryCard
 *   - line: gradient classes for the decorative line in CategoryCard
 *   - pill: classes for the badge/pill in ForumCard & FeaturedForumCard
 *     (bg light, border & text darker)
 *   - dot: the small dot inside the pill
 *   - hoverBg: hover background for forum rows in CategoryCard
 */

export const categoryColors = {
  adultos: {
    icon: "text-rose-500",
    line: "from-rose-400 via-rose-500 to-rose-600",
    pill: "border-rose-200 bg-rose-50/90 text-rose-700/60 hover:border-rose-300 hover:bg-rose-100 hover:text-rose-800",
    pillStatic: "border-rose-200 bg-rose-50/90 text-rose-700",
    dot: "bg-rose-500",
    hoverBg: "hover:bg-rose-50",
  },
  deportes: {
    icon: "text-emerald-500",
    line: "from-emerald-400 via-emerald-500 to-emerald-600",
    pill: "border-emerald-200 bg-emerald-50/90 text-emerald-700/60 hover:border-emerald-300 hover:bg-emerald-100 hover:text-emerald-800",
    pillStatic: "border-emerald-200 bg-emerald-50/90 text-emerald-700",
    dot: "bg-emerald-500",
    hoverBg: "hover:bg-emerald-50",
  },
  "economia-finanzas": {
    icon: "text-amber-500",
    line: "from-amber-400 via-amber-500 to-amber-600",
    pill: "border-amber-200 bg-amber-50/90 text-amber-700/60 hover:border-amber-300 hover:bg-amber-100 hover:text-amber-800",
    pillStatic: "border-amber-200 bg-amber-50/90 text-amber-700",
    dot: "bg-amber-500",
    hoverBg: "hover:bg-amber-50",
  },
  fotografia: {
    icon: "text-fuchsia-500",
    line: "from-fuchsia-400 via-fuchsia-500 to-fuchsia-600",
    pill: "border-fuchsia-200 bg-fuchsia-50/90 text-fuchsia-700/60 hover:border-fuchsia-300 hover:bg-fuchsia-100 hover:text-fuchsia-800",
    pillStatic: "border-fuchsia-200 bg-fuchsia-50/90 text-fuchsia-700",
    dot: "bg-fuchsia-500",
    hoverBg: "hover:bg-fuchsia-50",
  },
  general: {
    icon: "text-blue-500",
    line: "from-blue-400 via-blue-500 to-blue-600",
    pill: "border-blue-200 bg-blue-50/90 text-blue-700/60 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-800",
    pillStatic: "border-blue-200 bg-blue-50/90 text-blue-700",
    dot: "bg-blue-500",
    hoverBg: "hover:bg-blue-50",
  },
  motor: {
    icon: "text-red-500",
    line: "from-red-400 via-red-500 to-red-600",
    pill: "border-red-200 bg-red-50/90 text-red-700/60 hover:border-red-300 hover:bg-red-100 hover:text-red-800",
    pillStatic: "border-red-200 bg-red-50/90 text-red-700",
    dot: "bg-red-500",
    hoverBg: "hover:bg-red-50",
  },
  "ocio-entretenimiento": {
    icon: "text-violet-500",
    line: "from-violet-400 via-violet-500 to-violet-600",
    pill: "border-violet-200 bg-violet-50/90 text-violet-700/60 hover:border-violet-300 hover:bg-violet-100 hover:text-violet-800",
    pillStatic: "border-violet-200 bg-violet-50/90 text-violet-700",
    dot: "bg-violet-500",
    hoverBg: "hover:bg-violet-50",
  },
  otros: {
    icon: "text-slate-500",
    line: "from-slate-400 via-slate-500 to-slate-600",
    pill: "border-slate-200 bg-slate-50/90 text-slate-700/60 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800",
    pillStatic: "border-slate-200 bg-slate-50/90 text-slate-700",
    dot: "bg-slate-500",
    hoverBg: "hover:bg-slate-50",
  },
  "tecnologia-informatica": {
    icon: "text-cyan-500",
    line: "from-cyan-400 via-cyan-500 to-cyan-600",
    pill: "border-cyan-200 bg-cyan-50/90 text-cyan-700/60 hover:border-cyan-300 hover:bg-cyan-100 hover:text-cyan-800",
    pillStatic: "border-cyan-200 bg-cyan-50/90 text-cyan-700",
    dot: "bg-cyan-500",
    hoverBg: "hover:bg-cyan-50",
  },
};

/** Default (blue) fallback for unknown categories */
export const defaultCategoryColor = categoryColors.general;

/**
 * Get color config for a category slug.
 * Falls back to blue/general if slug is unknown.
 */
export function getCategoryColor(slug) {
  return categoryColors[slug] || defaultCategoryColor;
}
