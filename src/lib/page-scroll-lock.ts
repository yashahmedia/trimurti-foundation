type InlineStyles = {
  position: string;
  top: string;
  left: string;
  width: string;
  overflow: string;
};

export type PageScrollPosition = { x: number; y: number };

export function lockPageScroll(
  scrollPosition: PageScrollPosition = {
    x: window.scrollX,
    y: window.scrollY,
  },
) {
  const body = document.body;
  const root = document.documentElement;
  const previousBodyStyles: InlineStyles = {
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    width: body.style.width,
    overflow: body.style.overflow,
  };
  const previousRootOverflow = root.style.overflow;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.overflow = "hidden";
  root.style.scrollBehavior = "auto";
  body.style.position = "fixed";
  body.style.top = `-${scrollPosition.y}px`;
  body.style.left = `-${scrollPosition.x}px`;
  body.style.width = "100%";
  body.style.overflow = "hidden";

  return () => {
    body.style.position = previousBodyStyles.position;
    body.style.top = previousBodyStyles.top;
    body.style.left = previousBodyStyles.left;
    body.style.width = previousBodyStyles.width;
    body.style.overflow = previousBodyStyles.overflow;
    root.style.overflow = previousRootOverflow;

    window.scrollTo({
      left: scrollPosition.x,
      top: scrollPosition.y,
      behavior: "instant",
    });
    window.requestAnimationFrame(() => {
      window.scrollTo({
        left: scrollPosition.x,
        top: scrollPosition.y,
        behavior: "instant",
      });
      root.style.scrollBehavior = previousScrollBehavior;
    });
  };
}
