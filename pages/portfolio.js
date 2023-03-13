function main() {
    const footerSection = document.querySelector(".footer");
    // const contactSection = document.querySelector(".contact");
    const headerSection = document.querySelector(".header");
    const servicesSection = document.querySelector(".services__list");
    
    const contentType = "portfolio";

    footerComponent(footerSection);
    // contactComponent(contactSection);
    navbarComponent(headerSection, "Portfolio", false);
    serviceComponent(servicesSection, contentType);

    const titleEl = document.querySelector('.services__h2');

    titleEl.textContent = "Mi portfolio";
}

main();