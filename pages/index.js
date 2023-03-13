async function main() {
    const footerSection = document.querySelector(".footer");
    const contactSection = document.querySelector(".contact");
    const headerSection = document.querySelector(".header");
    const servicesSection = document.querySelector(".services__list");

    const welcomeText = `Hola <br> soy Seba`;
    const contentType = "desafom4";

    navbarComponent(headerSection, welcomeText, true);
    serviceComponent(servicesSection, contentType);
    contactComponent(contactSection);
    footerComponent(footerSection);
}

main();