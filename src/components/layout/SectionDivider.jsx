export default function SectionDivider() {
  return (
    <div className="relative overflow-hidden">
      {/* Línea central con lineare */}
      <div className="flex items-center justify-center gap-4">
        {/* Línea izquierda */}
        <div className="h-px max-w-xs flex-1 bg-linear-to-r from-transparent via-slate-300 to-slate-300" />

        {/* Elemento decorativo central */}
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-blue-400 to-blue-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-linear-to-r from-blue-500 to-blue-600 shadow-sm shadow-blue-500/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-blue-400 to-blue-500" />
        </div>

        {/* Línea derecha */}
        <div className="h-px max-w-xs flex-1 bg-linear-to-l from-transparent via-slate-300 to-slate-300" />
      </div>
    </div>
  );
}
