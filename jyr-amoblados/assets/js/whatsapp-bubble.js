const DISMISSED_KEY = "whatsappBubbleDismissed";

export function initWhatsappBubble() {
  const bubble = document.getElementById("whatsapp-bubble");
  const closeBtn = document.getElementById("whatsapp-bubble-close");

  if (!bubble || !closeBtn) return;

  if (sessionStorage.getItem(DISMISSED_KEY) === "true") {
    bubble.classList.add("is-hidden");
    return;
  }

  closeBtn.addEventListener("click", () => {
    bubble.classList.add("is-hidden");
    sessionStorage.setItem(DISMISSED_KEY, "true");
  });
}
