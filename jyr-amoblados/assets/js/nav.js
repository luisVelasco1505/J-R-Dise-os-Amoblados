export function initNav() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");

  if (!header || !toggle || !nav) return;

  const closeNav = () => {
    header.classList.remove("is-nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu de navegacion");
  };

  const openNav = () => {
    header.classList.add("is-nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Cerrar menu de navegacion");
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.contains("is-nav-open");
    isOpen ? closeNav() : openNav();
  });

  nav.querySelectorAll(".site-nav__link").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
}

const HEADER_SCROLL_THRESHOLD = 12;

export function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  const updateHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > HEADER_SCROLL_THRESHOLD);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}
