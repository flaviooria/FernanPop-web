const checkbox = document.querySelector(".checkbox")
const form = document.querySelector("#form-register")
const nameUser = document.querySelector("#nombre")
const email = document.querySelector("#correo")
const pass = document.querySelector("#password")
const btnSend = document.querySelector(".send")


loadEventens()
loadApp()

function loadApp() {
    btnSend.setAttribute("disabled","")
}

function loadEventens() {
    //validamos cada campo
    nameUser.addEventListener("blur", validarForm)
    email.addEventListener("blur", validarForm)
    pass.addEventListener("blur",validarForm)
    
    //enviamos el form
    form.addEventListener("submit",enviarForm)
}


function validarForm(e) {
    let text = e.target
    let contrasenia
    
    if (e.target.id === "nombre") {
        // comprobar que el nombre no este vacio
        if (e.target.value.length <= 0) {
            text.style.border = "3px solid #EE6C4D"
            e.target.setAttribute("placeholder", "Campo debe ser rellenado");
        } else {
            console.log("valido")
            e.target.removeAttribute("placeholder")
            text.style.border = "3px solid #3D5A80"
        }
    }

    
    if (e.target.id === "correo") {
        //validacion del correo
        if (!validarCorreo(text.value)) {
            text.style.border = "3px solid #EE6C4D"
            e.target.setAttribute("placeholder", "Email y/o campo no rellenado");
        } else {
            console.log("valido")
            e.target.removeAttribute("placeholder")
            text.style.border = "3px solid #3D5A80"
        }
    }

    //let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,16}$/

    if (e.target.id === "password") {
        contrasenia = text.value.length
        // comprobar que la contraseña no tenga una longitud menor quw 5.
        if (contrasenia < 5) {
            text.style.border = "3px solid #EE6C4D"
            e.target.setAttribute("placeholder", "Contraseña no valida");
            console.log("invalido")
        } else {
            console.log("valido")
            e.target.removeAttribute("placeholder")
            text.style.border = "3px solid #3D5A80"
        }
    }


    //si los caso son validos, activa el boton de registrarse
    if (validarCorreo(email.value) && nameUser.value != "" && contrasenia > 5) {
        console.log("pasaste validacion")
        btnSend.removeAttribute("disabled")
    }


}

function enviarForm(e) {
    e.preventDefault()
    console.log("submit")
    //mostrar spinner
    let spinner =  document.querySelector(".spinner")
    spinner.style.display = "flex"
    // despues de 3 seg oculatamos el spinner
    setTimeout(() => {
        spinner.style.display = "none"
        //mostramos mensaje
        const mensaje = document.createElement("p")
        mensaje.textContent = "El mensaje se envio correctamente"
        mensaje.classList.add("mensaje-succes")
        //inserta el parrafo antes del spinner
        form.insertBefore(mensaje,spinner)
        form.action  = "./pages/cuentaRegistrada.html"
        //despus de 2.5seg se elimina el mensaje y se resetea el form
        setTimeout(() => {
            mensaje.remove()
            form.submit()
            btnSend.setAttribute("disabled","")
            form.reset()
        },1500)
    },3000)
}

function validarCorreo(term) {
    let arroba = '';
    let com = 'com';

    for (let i = 0; i < term.length; i++) {
        if (term.charAt(i) == '@') {
            arroba = term.substring(i);
        }

        for (let j = 0; j < arroba.length; j++) {
            if (arroba.charAt(j) == '.') {
                if (arroba.substring(j + 1) == com) return true;
            }
        }
    }
    return false;
};


//muestra la contraseña que se va escribiendo
checkbox.addEventListener("click", () => {
    let textPassword = document.getElementById('password');
    return textPassword.type = ((textPassword.type == "password") ? "text" : "password")
})



//Script de smoth scroll
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});

AOS.init({
    duration: 1000
});