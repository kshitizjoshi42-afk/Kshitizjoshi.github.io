document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll('[data-placeholder]').forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Replace this # link with your real profile URL in index.html.");
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
