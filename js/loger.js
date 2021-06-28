const checkbox = document.querySelector(".checkbox")
const form = document.querySelector("#form-login")
const email = document.querySelector("#correo")
const pass = document.querySelector("#password")
const btnSend = document.querySelector(".send")
const btnSearch = document.querySelector(".btn-search")
const inputSearch = document.querySelector("#nameProduct")


loadEventens()
loadApp()

function loadApp() {
    btnSend.setAttribute("disabled", "")
}

function loadEventens() {
    //validamos cada campo    
    email.addEventListener("blur", validarForm)
    pass.addEventListener("blur", validarForm)

    //enviamos el form
    form.addEventListener("submit", enviarForm)
}


function validarForm(e) {
    let text = e.target
    let contrasenia


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
    if (validarCorreo(email.value) && contrasenia > 5) {
        console.log("pasaste validacion")
        btnSend.removeAttribute("disabled")
    }


}

function enviarForm(e) {
    e.preventDefault()

    //mostrar spinner
    let spinner = document.querySelector(".spinner")
    spinner.style.display = "flex"
    // despues de 3 seg oculatamos el spinner
    setTimeout(() => {
        spinner.style.display = "none"
        //mostramos mensaje
        const mensaje = document.createElement("p")
        mensaje.textContent = "Iniciando Sesión"
        mensaje.classList.add("mensaje-succes")
        //inserta el parrafo antes del spinner
        form.insertBefore(mensaje, spinner)
        form.action  = "./inicio.html"
        //despus de 2.5seg se elimina el mensaje y se resetea el form
        setTimeout(() => {
            mensaje.remove()
            form.submit()
            btnSend.setAttribute("disabled", "")
            form.reset()
        }, 500)
    }, 3000)
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

let products = ["MacBook Pro", "MacBook Air", "Iphone 8"]
console.log(products)

autocompletar()

// function autocompletar() {

//     let indexFocus // sera para seleccionar cada elemento que escribamos

//     inputSearch.addEventListener("input", (e) => {
//         const tipoProducto = e.target.value // this hace referencia al inputSearch 
//         if (tipoProducto.length > 2) {
//             cerrarListaItems()

//             if (!tipoProducto) return false
//             indexFocus = -1
//             // crear la lista de sugerencias 
//             const divLista = document.createElement("div")
//             divLista.setAttribute("id", e.target.id + "-list-autocomplete") // se llamara como el id del inputSearch
//             divLista.setAttribute("class", "list-autocomplete-items") // le agrego la clase
//             e.target.parentNode.appendChild(divLista)

//             //conexion a base de datos
//             httpRequest("../controller/controller.php?nombreProducto="+tipoProducto, function() {
//                 const array = JSON.stringify(this.responseText);
//                 console.log(array)
//                 //valida el array vs el input
//                 if (array.length == 0) return false
//                 //itero en los nombres del array
//                 array.forEach(item => {
//                     //if (name.substr(0, tipoProducto.length).toLowerCase() == tipoProducto.toLowerCase()) 
//                      if (item.substr(0, tipoMascota.length).toLowerCase() == tipoMascota.toLowerCase()) { // comparo si el termino que esta ingresando conincide con uno de los elementos del array
//                         console.log("si es valido")
//                         const elementoLista = document.createElement("div")
//                         elementoLista.innerHTML = `<strong>${item.substr(0, tipoProducto.length)}</strong>`
//                         elementoLista.innerHTML += `${item.substr(tipoProducto.length)}`
//                         elementoLista.addEventListener("click", (e) => {
//                             // al dar click automaticamente el valor del buscador sera el de la palabra que seleccione
//                             inputSearch.value = e.target.innerText
//                             // despues cierro la lista de items 
//                             cerrarListaItems()
//                             return false
//                         })
//                         divLista.appendChild(elementoLista)
//                     }

//                 })
//             })
//         }

//         inputSearch.addEventListener("keydown", (e) => {
//             console.log("dentro del move")
//             const divLista = document.querySelector("#" + e.target.id + "-list-autocomplete")
//             let items
//             if (divLista) { //obtendre todos los valors que coincidan con el termino ingresado
//                 items = divLista.querySelectorAll("div") //obtengo cad div creado
    
//                 switch (e.keyCode) { // hara un evento a función de la tecla que presione
//                     case 40: //tecla de abajo
//                         indexFocus++;
//                         if (indexFocus > (items.length - 1)) indexFocus = (items.length - 1)
//                         break;
//                     case 38: //tecla arriba
//                         indexFocus--
//                         if (indexFocus < 0) indexFocus = 0
//                         break;
//                     case 13: //enter
//                         e.preventDefault(); //  para no hacer submit
//                         items[indexFocus].click();
//                         indexFocus = -1
//                         break;
//                 }
//                 console.log(items)
//                 console.log(indexFocus)
//                 seleccionar(items, indexFocus)
//                 return false
//             }
//         })
    
//         document.addEventListener("click", cerrarListaItems)
//     })   
// }

function seleccionar(items, index) {
    console.log("los items: ", items)
    console.log("el index: ", index)
    if (!items || index == -1) return false
    items.forEach(del => del.classList.remove("autocomplete-active"))
    items[index].classList.add("autocomplete-active")
}

function cerrarListaItems() {
    const items = document.querySelectorAll(".list-autocomplete-items")
    items.forEach(item => {
        //itera y elimina los items
        item.parentNode.removeChild(item)
        indexFocus = -1
    })
}

