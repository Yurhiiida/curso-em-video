var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function numero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOF(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(numero(num.value) && !inLista(num.value, valores)) {
        
    }else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}
