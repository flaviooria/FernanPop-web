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
        token.innerHTML = 'Copiar';
    } finally {
        // Restore the previous selection
        selection.removeAllRanges();
        currentRange && selection.addRange(currentRange);
    }

     
    
    setTimeout(() => token.innerHTML = textoDeToken, 500)
})


