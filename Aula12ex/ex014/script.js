function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('ft')
    var dta = new Date()
    var hora = dta.getHours()
    // msg.innerHTML= `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // dia
        img.src = 'dia.png'
    } else if (hora >= 12 && hora < 18){
        // tarde
        img.src = 'tarde.png'
    } else{
        // noite
        img.src = 'noite.png'
    }
}
