function footerComponent(target) {
    const containerEl = document.createElement('div');
    
    containerEl.innerHTML = `
    <div class="footer__container">
        <div class="footer__brand-container">
            <h3 class="footer__brand">SEBA-CAMPO</h3>
        </div>

        <div class="media">
            <div class="media__link">
                <a href="https://www.instagram.com/sebas_campo/" target="_blank" class="media__p">Instagram </a>
                <img src="./src/instagram-logo.png" class="media__p-logo">
            </div>

            <div class="media__link">
                <a href="https://www.linkedin.com/in/seba-campo/" class="media__p" target="_blank">LinkedIn </a>
                <img src="./src/linkedin-logo.png" class="media__p-logo">
            </div>

            <div class="media__link">
                <a href="https://github.com/seba-campo" class="media__p" target="_blank">GitHub </a>                    
                <img src="./src/github-logo.png" class="media__p-logo">
            </div>
        </div>
    </div>
    `
    target.appendChild(containerEl);
}