import { initNav, initHeaderScroll } from "./nav.js";
import { initBlueprintAnimation } from "./blueprint-animation.js";
import { initForm } from "./form.js";
import { initWhatsappBubble } from "./whatsapp-bubble.js";

document.getElementById("anio-actual").textContent = new Date().getFullYear();

initNav();
initHeaderScroll();
initBlueprintAnimation();
initForm();
initWhatsappBubble();

const showcaseTrack = document.getElementById("showcase-track");

if (showcaseTrack) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slides = Array.from(showcaseTrack.children);

  if (slides.length >= 3 && !prefersReducedMotion) {
    let activeIndex = 0;

    const syncCarouselState = () => {
      slides.forEach((slide, index) => {
        const relativeIndex = (index - activeIndex + slides.length) % slides.length;

        if (relativeIndex === 0) {
          slide.dataset.position = "center";
        } else if (relativeIndex === 1) {
          slide.dataset.position = "right";
        } else {
          slide.dataset.position = "left";
        }
      });
    };

    syncCarouselState();
    window.setInterval(() => {
      activeIndex = (activeIndex + 1) % slides.length;
      syncCarouselState();
    }, 3000);
  }
}

const thumbSlideshows = document.querySelectorAll(".card__thumb--slideshow");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

thumbSlideshows.forEach((slideshow) => {
  const slides = Array.from(slideshow.children);

  if (slides.length > 1 && !prefersReducedMotion) {
    let activeIndex = Math.max(slides.findIndex((slide) => slide.classList.contains("is-active")), 0);

    window.setInterval(() => {
      slides[activeIndex].classList.remove("is-active");
      activeIndex = (activeIndex + 1) % slides.length;
      slides[activeIndex].classList.add("is-active");
    }, 4000);
  }
});

