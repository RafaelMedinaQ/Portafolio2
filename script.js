// Pequeño efecto para bloques "censurados"
document.addEventListener("DOMContentLoaded", () => {
  const censoredBlocks = document.querySelectorAll("[data-censored]");

  censoredBlocks.forEach((block) => {
    block.addEventListener("click", () => {
      const mensajeReal = block.getAttribute("data-censored");

      if (block.classList.contains("is-open")) {
        // Volver al texto de advertencia
        block.classList.remove("is-open");
        block.textContent = "█ TOP SECRET · HAZ CLIC BAJO TU PROPIO RIESGO █";
      } else {
        // Mostrar mensaje "real" (pero sigue siendo seguro)
        block.classList.add("is-open");
        block.textContent = mensajeReal;
      }
    });
  });
});
