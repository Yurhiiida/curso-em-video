function gerartabuada() {
    var valor = document.getElementById ('valor')
    
    var res = document.getElementById('tabela')
    if (valor.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var c = 1
        res.innerHTML = ''
        while (c <= 10 ) {
            var resultado = valor.value * c
            var option = document.createElement('option') 
            option.text = `${valor.value} x ${c} = ${resultado} `
            option.value = `res${c}` //Para saber qual foi o item selecionado, masi ultilizado em outras linguagens, como PHP
            
            res.appendChild(option)
            c++
        }
    }
}