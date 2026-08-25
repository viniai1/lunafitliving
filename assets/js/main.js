const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  const closeNav = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 820) closeNav();
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
