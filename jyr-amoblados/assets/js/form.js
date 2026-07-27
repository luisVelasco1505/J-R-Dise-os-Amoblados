const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ERROR_MESSAGES = {
  nombre: "Ingrese el nombre.",
  telefono: "Ingrese un telefono de contacto.",
  email: "Ingrese un email valido.",
  "tipo-mueble": "Seleccione el tipo de mueble.",
  mensaje: "Describa brevemente la necesidad y las medidas.",
};

function validateField(field) {
  const value = field.value.trim();
  let isValid = value.length > 0;

  if (field.name === "email" && isValid) {
    isValid = EMAIL_PATTERN.test(value);
  }

  const errorEl = document.getElementById(`${field.id}-error`);
  const fieldWrapper = field.closest(".form__field");

  if (!isValid) {
    fieldWrapper?.classList.add("form__field--invalid");
    if (errorEl) errorEl.textContent = ERROR_MESSAGES[field.name] ?? "Campo invalido.";
  } else {
    fieldWrapper?.classList.remove("form__field--invalid");
    if (errorEl) errorEl.textContent = "";
  }

  return isValid;
}

export function initForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  const fields = form.querySelectorAll("[required]");

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formIsValid = true;
    fields.forEach((field) => {
      const fieldIsValid = validateField(field);
      formIsValid = formIsValid && fieldIsValid;
    });

    if (!formIsValid) {
      status.textContent = "Revise los campos marcados antes de enviar.";
      return;
    }

    // COMPLETAR: conectar con un servicio real de envio de formularios
    // (ej. Formspree, Netlify Forms) o con un backend propio, reemplazando
    // esta simulacion por un fetch/POST real hacia ese endpoint.
    status.textContent = "Consulta recibida. El equipo se va a comunicar a la brevedad.";
    form.reset();
  });
}
