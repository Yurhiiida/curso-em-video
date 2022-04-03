function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('foto')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criancam.jpg')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'imagens/adolecentem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultom.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosom.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criancaf.jpg')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'imagens/adolecentef.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultof.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosaf.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}