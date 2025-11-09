// Scroll suave al hacer clic en enlaces del menú
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Animación al hacer scroll (aparecer elementos)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

// Observar secciones
document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

// Efecto hover dinámico en proyectos
document.querySelectorAll(".proyecto").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.02)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});