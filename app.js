'use strict'

function MudarPag (){

    const pag1 = document.getElementById('pag1').value
    const pag2 = document.getElementById('pag2').value
    const pag3 = document.getElementById('pag3').value
    const pag4 = document.getElementById('pag4').value
    const pag5 = document.getElementById('pag5').value
    const pag6 = document.getElementById('pag6').value
    let resultado = document.getElementById('result')

    if (addEventListener('click', pag1)) {
        removeProperty("display")
    }

}
const escrever = document.getElementById('pag1').addEventListener('click', MudarPag)
