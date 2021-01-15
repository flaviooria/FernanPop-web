const mostrarContrasenia = () => {
    let textPassword = document.getElementById('password');
    return textPassword.type = ((textPassword.type == "password") ? "text" : "password")
}

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