var showPassos = document.querySelector("#passos")
var entradaDeTexto = document.querySelector('#entradaDeTexto')
var saidadaDeTexto = document.querySelector('#saidadaDeTexto')


var alfabeto = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
var passos = +document.getElementById("passos").innerHTML

selecionar = document.addEventListener('click',  function(){

var selecao = document.querySelector('#tipoCodigo').value
if(selecao === "asci"){
    showPassos.style.display = "flex"
    showPassos.style.flexDirection = 'row'

}else{
    showPassos.style.display = 'none'
}
})

var valPassos = +document.getElementById("valPassos").innerHTML
function voltar() {
    if(valPassos > 1) {
        valPassos--;
        document.getElementById("valPassos").innerHTML = valPassos;
       
    }
}

function avancar() {
    if(valPassos < 25) {
        valPassos++;
        document.getElementById("valPassos").innerHTML = valPassos;
        
    }
}







