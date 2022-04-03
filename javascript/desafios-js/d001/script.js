function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#E7DEC6'
    } else if (hora >= 12 && hora <18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#e8aa71'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#21262E'
    }
}