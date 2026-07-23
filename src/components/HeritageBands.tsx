// HeritageBands — the brand's two color trios rendered as thin, flat bands.
//
// Haitian trio:      blue · red  (on the white/ivory page ground)
// Pan-African trio:  red · green · black
//
// Used as section dividers and chrome accents. Kept deliberately slim and
// architectural — heritage as a design language, not flag decoration.

/** Haitian band: blue and red on the page's white ground. */
export function HaitiBand({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-1.5 w-full ${className}`} aria-hidden>
      <div className="flex-1 bg-brand-700" />
      <div className="flex-1 bg-accent-500" />
    </div>
  );
}

/** Pan-African band: red, ink, and green. */
export function PanAfricanBand({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-1.5 w-full ${className}`} aria-hidden>
      <div className="flex-1 bg-accent-500" />
      <div className="flex-1 bg-ink" />
      <div className="flex-1 bg-green-600" />
    </div>
  );
}

/** Small inline chip row of both trios, for the heritage section. */
export function HeritageChips() {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className="flex overflow-hidden rounded-full border border-edge">
        <span className="h-3.5 w-5 bg-brand-700" />
        <span className="h-3.5 w-5 bg-white" />
        <span className="h-3.5 w-5 bg-accent-500" />
      </span>
      <span className="flex overflow-hidden rounded-full border border-edge">
        <span className="h-3.5 w-5 bg-accent-500" />
        <span className="h-3.5 w-5 bg-ink" />
        <span className="h-3.5 w-5 bg-green-600" />
      </span>
    </div>
  );
}
