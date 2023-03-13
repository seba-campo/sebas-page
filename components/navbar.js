function navbarComponent(target, headerText, flagBckg) {
  const containerEl = document.createElement("div");

  containerEl.innerHTML = `
    <div class="header__container">
        <div class="navbar">
            <a href="./index.html"><img class="navbar__logo" src="./src/sc-logo.png"></a>
            <div class="navbar__hamburger">
                <div class="hamburguer__black-box"></div>
                <div class="hamburguer__black-box"></div>
                <div class="hamburguer__black-box"></div>
            </div>

            <div class="navbar__menu-desk">
                <div class="navbar__menu-el">
                    <a href="./index.html">Home</a>
                </div>
                <div class="navbar__menu-el">
                <a href="./services.html">Servicios</a>
                </div>
                <div class="navbar__menu-el">
                <a href="./portfolio.html">Portfolio</a>
                </div>
                <div class="navbar__menu-el">
                    <a href="./contact.html">Contacto</a>
                </div>
            </div>
        </div>

        <div class="navbar__menu-modal">

                <h2 class="menu__close-btn">X</h2>
                
                <div class="navbar__menu-modal-el">
                    <a href="./index.html">HOME</a>
                </div>
                <div class="navbar__menu-modal-el">
                <a href="./services.html">SERVICIOS</a>
                </div>
                <div class="navbar__menu-modal-el">
                <a href="./portfolio.html">PORTFOLIO</a>
                </div>
                <div class="navbar__menu-modal-el">
                    <a href="./contact.html">CONTACTO</a>
                </div>
        </div>

        <hr class="header__hr">

        <div class="header__home">
            <h1 class="header__bienvenida">${headerText}</h1>
        </div>
    </div>
    `;
  target.appendChild(containerEl);

  const hamburguer = document.querySelector(".navbar__hamburger");
  const modalMenu = document.querySelector(".navbar__menu-modal");
  const headerHomeEl = document.querySelector(".header__home");

  hamburguer.addEventListener("click", () => {
    headerHomeEl.setAttribute("style", "display:none");
    modalMenu.setAttribute("style", "display: flex");
    console.log("clicked hamb");
  });

  const closeButton = document.querySelector(".menu__close-btn");
  closeButton.addEventListener("click", () => {
    headerHomeEl.setAttribute("style", "display: flex");
    modalMenu.setAttribute("style", "display: none");
  });

  /* a3926ef

       Se agregó el flag para que cuando se desee, se quite la foto, y el navbar
       sea de un alto de 15vh.

       Por defecto queda el background-image del home.
    */

  if (!flagBckg) {
    const backgroundContainer = document.querySelector(".header__container");
    backgroundContainer.setAttribute(
      "style",
      `height: 15vh; background-image: none; background-color: #2C2C2C`
    );

    const headerBienvenida = document.querySelector(".header__home");
    headerBienvenida.setAttribute("style", "display: none");
  }
}

// function listenerHamburguer(){

// }
