export default function SectionDivider() {
  return (
    <div className="relative overflow-hidden">
      {/* Línea central con lineare */}
      <div className="flex items-center justify-center gap-4">
        {/* Línea izquierda */}
        <div className="h-px max-w-xs flex-1 bg-linear-to-r from-transparent via-divider to-divider" />

        {/* Elemento decorativo central */}
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-primary/70 to-primary" />
          <div className="h-2.5 w-2.5 rounded-full bg-linear-to-r from-primary to-primary-hover shadow-sm shadow-blue-500/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-primary/70 to-primary" />
        </div>

        {/* Línea derecha */}
        <div className="h-px max-w-xs flex-1 bg-linear-to-l from-transparent via-divider to-divider" />
      </div>
    </div>
  );
}
