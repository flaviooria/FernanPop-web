//Esto es para dar los estilos a los inputs
let inputs = document.querySelectorAll("input");

inputs.forEach(item => {
    if (item.value != "") {
        item.parentNode.classList.add("focused");
        item.classList.add("filled")
    }
});

$('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
    } else {
        $(this).addClass('filled');
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