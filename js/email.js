var obtengoToken = () => {
    let tokenAleatorio = '';
    for(let i  =0 ; i < 6; i ++) {
        tokenAleatorio += generarToken();
    }

    return tokenAleatorio;
}

var generarToken = () => {
    let aleaotrio = (Math.random * 12)
    try {
        switch (aleaotrio) {
            case 0: {
                return "A";
            }

            case 1 : {
                return "E";
            }

            case 2: {
                return "I";
            }

            case 3 : {
                return "O";
            }

            case 4 : {
                return "U";
            }

            case 5 : {
                return "$";
            }

            case 6 : {
                return "%";
            }

            case 7 : {
                return "&";
            }

            case 8 : {
                return "#";
            }

            case 9 : {
                return "1";
            }

            case 10 : {
                return "2"
            }

            case 11 : {
                return "3"
            }
        }
    } catch (Exception ) {
        return "error";
    }
}
var tokentexto = obtengoToken();
generarToken();
console.log(tokentexto)
const botonCopiar = document.querySelector('i.fa-copy')
const token = document.getElementById('token')
var textoDeToken = document.getElementById('token').innerText



botonCopiar.addEventListener('click' , () => {
    token.focus()

    const selection = window.getSelection();

    // Save the current selection
    const currentRange = selection.rangeCount === 0
        ? null : selection.getRangeAt(0);

    // Select the text content of code element
    const range = document.createRange();
    range.selectNodeContents(token);
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy to the clipboard
    try {
        document.execCommand('copy');
        token.innerHTML = 'Copiado';
        console.log('Copiado')
    } catch (err) {
        // Unable to copy
        token.innerHTML = textoDeToken;
        console.error(err)
    } finally {
        // Restore the previous selection
        selection.removeAllRanges();
        currentRange && selection.addRange(currentRange);
    }

     
    
    setTimeout(() => token.innerHTML = textoDeToken, 500)
})


