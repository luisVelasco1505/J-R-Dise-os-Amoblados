export function initBlueprintAnimation() {
  const svg = document.getElementById("blueprint-svg");
  if (!svg) return;

  const shapes = svg.querySelectorAll(".blueprint__shape");
  if (!shapes.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  shapes.forEach((shape) => {
    const length = shape.getTotalLength
      ? shape.getTotalLength()
      : 900;
    shape.style.strokeDasharray = String(length);
    shape.style.strokeDashoffset = prefersReducedMotion ? "0" : String(length);
  });

  if (prefersReducedMotion) {
    shapes.forEach((shape) => shape.classList.add("is-filled"));
    return;
  }

  shapes.forEach((shape) => shape.classList.add("is-filled"));
}
