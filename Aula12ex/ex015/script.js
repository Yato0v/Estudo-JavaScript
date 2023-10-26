function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade == 0 && idade < 5){
                img.setAttribute('src', 'bebe-m.png')
            } else if(idade < 10){
                img.setAttribute('src', 'menino.png')
            } else if(idade < 20){
                img.setAttribute('src', 'jovem.png')
            } else if(idade < 60){
                img.setAttribute('src', 'homem.png')
            } else{
                img.setAttribute('src', 'velho.png')
            }
        } else if(fsex[1].checked) {
            genero = 'mulher'
            if (idade == 0 && idade < 5){
                img.setAttribute('src', 'bebe-g.png')
            } else if(idade < 10){
                img.setAttribute('src', 'menina.png')
            } else if(idade < 20){
                img.setAttribute('src', 'adolecente-g.png')
            } else if(idade < 60){
                img.setAttribute('src', 'mulher.png')
            } else{
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}