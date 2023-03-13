function main() {
  const footerSection = document.querySelector(".footer");
  const headerSection = document.querySelector(".header");
  const servicesSection = document.querySelector(".services__list");

  const contentType = "sebaCampoPage";

  footerComponent(footerSection);
  navbarComponent(headerSection, "Services", false);
  serviceComponent(servicesSection, contentType);

  const titleEl = document.querySelector(".services__h2");

  titleEl.textContent = "Experiencias laborales";
}

main();
