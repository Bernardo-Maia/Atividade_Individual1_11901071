const calcular = document.getElementById('calcular');


function calculo () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const tempoEntrada = document.getElementById('tempo').value;
    const distancia = document.getElementById('distancia').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' &&  tempo !== '' && peso !== '' && distancia !== '') {
        var arr = tempo.split(':');
        var dec = parseInt((arr[1]/6)*10, 10);
        const tempo = tempoEntrada.split(':')
        .map(function(val) { return parseInt(val, 10); } )
        .reduce( function(previousValue, currentValue, index, array){previousValue + currentValue / Math.pow(60, index);});
        const velociade_media = (distancia/tempo).toFixed(1);
        const pace = ((distancia/tempo)*3.6).toFixed(1);
        const cal = (velociade_media*peso*0.0175*(tempo/60)).toFixed(1);
        resultado.textContent = `Olá ${nome}! Você percorreu ${distancia}km em ${tempo}. Isso quer dizer que a sua velocidade média foi de ${velociade_media}km/h, o que o corresponde a um pace de ${pace}. Com ${peso}g, você gastou cerca de ${cal} cal`;

    }else {
        resultado.textContent = 'Para calcular o sua velocidade media, pace e calorias gastas, preencha todos os campos.';
    }


}

calcular.addEventListener('click', calculo); 