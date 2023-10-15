function carregar(){
    var msg = document.getElementById('msg')
    var ft = document.getElementById('ft')
    var dta = new Date()
    var hora = dta.getHours()
    msg.innerHTML= `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // dia
        ft.src = 'dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        // tarde
        ft.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        // noite
        ft.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}
