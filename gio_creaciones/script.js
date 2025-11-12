// 🌈 CAMBIO ENTRE SECCIONES
const botones = document.querySelectorAll("nav a"); // ahora usamos los enlaces del menú principal
const secciones = document.querySelectorAll(".page");

botones.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const target = btn.getAttribute("data-target");

    // Resalta el botón activo
    botones.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Muestra solo la sección seleccionada
    secciones.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) sec.classList.add("active");
    });

    // Desplaza al inicio suave
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// 🖼️ MODAL DE IMAGEN
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const cerrar = document.getElementById("cerrar-modal");

// Abrir modal al hacer clic en una imagen
document.addEventListener("click", e => {
  if (e.target.closest(".item img")) {
    const img = e.target;
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalDesc.textContent = img.nextElementSibling
      ? img.nextElementSibling.textContent
      : "";
  }
});

// Cerrar modal con el botón
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
