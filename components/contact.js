function contactComponent(target) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <div class="contact__div-container">
            
        <h2 class="contact__title">Contacto</h2>

        <form action="" class="contact-form">
            
            <label for="" class="contact-form__label-input">
                <p>Nombre</p>
                <input type="text" id="input-nombre" name="nombre" class="contact-form__input">
            </label>
            
            <label for="email" class="contact-form__label-input">
                <p>Email</p>
                <input type="text" id="input-mail" name="email" class="contact-form__input">
            </label>
            
            <label for="mensaje" class="contact-form__label-input">
                <p>Mensaje</p>
                <textarea name="mensaje" id="input-msj" class="contact-form__input-textarea"></textarea>
            </label>

            <button class="contact__send-button">Enviar</button>

            <div class="contact__success-div">
                <div class="success-div__text-container">
                    <p class="success__text"><i class="fa-solid fa-rocket"></i> Enviado correctamente <br> En unos minutos te llegará un correo</p>
                </div>
            </div>
        </form>

        

    </div>
    `;
    target.appendChild(componentEl);

    const form = document.querySelector('.contact-form');

    
    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const nombreEl = document.querySelector('#input-nombre').value;
        const mailEl = document.querySelector('#input-mail').value;
        const mensajeEl = document.querySelector('#input-msj').value;

        submitMsg(mailEl, mensajeEl)

        console.log(nombreEl , mailEl, mensajeEl)
    })
}

async function submitMsg(mail, msg){
    await fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                'to': mail,
                'message': msg
           })
        }).then((res) => {
           return res.json();
        }).then((res)=>{
            if(res.ok){
                console.log("Submit correcto");
                
                const msgSuccess = document.querySelector('.contact__success-div');
                msgSuccess.setAttribute('style', 'display: inherit');
                
                setTimeout(() => {
                    msgSuccess.setAttribute('style', 'display: none');
                  }, "15000")
            }
        })
}