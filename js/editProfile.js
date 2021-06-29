const btnSend = document.querySelector(".btn-save");

loadApp()
//Cargar la pagina el boton esta desactivado
function loadApp() {
    console.log("load");
    btnSend.setAttribute("disabled", "")
    btnSend.style.cursor = "not-allowed";
    btnSend.style.opacity = "0.3";
}

//Avatar de usuario
document.querySelector("#avatar").addEventListener("change", cargarAvartarUser)

function cargarAvartarUser(e) {
    //Obtengo el archivo que cargo
    let img = e.target.files[0];
    //Creo un flujo para leer el fichero
    let lectorImg = new FileReader();
    //Leo el fichero
    lectorImg.addEventListener("load", (e) => {
        //Muestro imagen en 
        let imgSrc = e.target.result;
        //la etiqueta img del avatar para pintarla
        document.querySelector(".img-profile").src = imgSrc;
        document.querySelector(".imgSrc").setAttribute("value", imgSrc)
        // console.log("load img");
    })

    if (img != null) {
        lectorImg.readAsDataURL(img);
    }


}

//Esto es para dar los estilos a los inputs
let inputs = document.querySelectorAll("input");

inputs.forEach(item => {
    if (item.value != "") {
        item.parentNode.classList.add("focused");
        item.classList.add("filled");
    }
});

$('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function () {
    var inputValue = $(this).val();
    const msg = "Campo debe ser rellenado";
    const regexMobile = new RegExp("[0-9]{9}");
    const regexAge = new RegExp("[0-9]{2}");
    let seCumple;

    if ($(this).prop("id") == "name" || $(this).prop("id") == "lastname") {
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
            $(this).addClass("filled-danger");
            $(this).prop("placeholder", msg);
            if ($(this).attr("placeholder")) {
                $(this).parents('.form-group').addClass('focused');
            } 
            seCumple = false;
        } else {
            $(this).removeClass('filled-danger');
            $(this).removeAttr('placeholder');
            $(this).addClass('filled');
            seCumple = true;
        }
    }

    if ($(this).prop("id") == "email") {
        if (!validarCorreo(inputValue)) {
            $(this).prop("placeholder", "Email no valido");
            $(this).addClass("filled-danger");
            seCumple = false;
        } else {
            $(this).removeClass('filled-danger');
            $(this).removeAttr('placeholder');
            $(this).addClass('filled');
            seCumple = true;
        }
    }

    if ($(this).prop("id") == "phone") {
        console.log(regexMobile.test(inputValue));
        if (!regexMobile.test(inputValue)) {
            $(this).prop("placeholder", "Telefono no valido");
            $(this).addClass("filled-danger");
            seCumple = false;
        } else {
            $(this).removeClass('filled-danger');
            $(this).removeAttr('placeholder');
            $(this).addClass('filled');
            seCumple = true;
        }
    }

    if ($(this).prop("id") == "age") {
        if (!regexAge.test(inputValue)) {
            $(this).prop("placeholder", "Edad no valida");
            $(this).addClass("filled-danger");
            seCumple = false;
        } else {
            $(this).removeClass('filled-danger');
            $(this).removeAttr('placeholder');
            $(this).addClass('filled');
            seCumple = true;
        }
    }


    if ($(this).prop("id") == "pass") {
        if (inputValue.length < 5) {
            $(this).prop("placeholder", "Contraseña debe ser mayor a 6 digitos");
            $(this).addClass("filled-danger");
            seCumple = false;
        } else {
            $(this).removeClass('filled-danger');
            $(this).removeAttr('placeholder');
            $(this).addClass('filled');
            seCumple = true;
        }
    }

    if (seCumple) {
        btnSend.removeAttribute("disabled","");
        btnSend.style.cursor = "pointer";
        btnSend.style.opacity = "1";

    } else {
        btnSend.setAttribute("disabled", "")
        btnSend.style.cursor = "not-allowed";
        btnSend.style.opacity = "0.3";
    }

})

//Menu hamburguesa
let hamburger = document.querySelector(".hamburger--spin");

let menu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("open");
})

//Esta es la media que tiene el usuario
const rating = 1.8
// total number of stars
const starTotal = 5;


const starPercentage = (rating / starTotal) * 100;

const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

document.querySelector(".profile_ranking .ranking").innerHTML = `${rating} de valoración`;

document.querySelector(`.profile_ranking .stars-inner`).style.width = starPercentageRounded;

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