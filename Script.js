function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
    hora = 15
    msg.innerHTML = 'Agora são' +' '+ (hora) + ' horas.'

    if(hora >= 0 && hora < 12)
        {
            foto.src = 'image/manhã.png'
            document.body.style.background = '#B8E3FB'
            
        }
        else if(hora >= 12 && hora <= 18)
            {
                foto.src = 'image/tarde.png'
                document.body.style.background ='#B93C16'
            }
            else{
                foto.src = 'image/noite.png'
                document.body.style.background = '#031C35'
            }
}