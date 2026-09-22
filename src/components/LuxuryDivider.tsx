import type { CSSProperties } from "react";

type LuxuryDividerProps = {
  width?: string;
  className?: string;
  animated?: boolean;
};

export default function LuxuryDivider({
  width,
  className = "",
  animated = true,
}: LuxuryDividerProps) {
  const style: CSSProperties | undefined = width
    ? ({ width } as CSSProperties)
    : undefined;

  const classes = [
    "luxury-divider",
    animated ? "is-animated" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style} aria-hidden="true">
      <span className="luxury-divider__line luxury-divider__line--left" />
      <span className="luxury-divider__ornament luxury-divider__ornament--left" />
      <span className="luxury-divider__center">
        <span className="luxury-divider__diamond">
          <span className="luxury-divider__diamond-core" />
        </span>
      </span>
      <span className="luxury-divider__ornament luxury-divider__ornament--right" />
      <span className="luxury-divider__line luxury-divider__line--right" />
    </div>
  );
}
