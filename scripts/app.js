let audioAtual = null;

function abrirMemes(){

    document.getElementById("inicio").style.display = "none";
    document.getElementById("animais").style.display = "none";
    document.getElementById("jogos").style.display = "none";
    document.getElementById("memes").style.display = "block";
}


function abrirAnimais(){

    document.getElementById("inicio").style.display = "none";
    document.getElementById("memes").style.display = "none";
    document.getElementById("jogos").style.display = "none";
    document.getElementById("animais").style.display = "block";
}


function abrirJogos(){

    document.getElementById("inicio").style.display = "none";
    document.getElementById("memes").style.display = "none";
    document.getElementById("animais").style.display = "none";
    document.getElementById("jogos").style.display = "block";
}


function voltar(){

    document.getElementById("memes").style.display = "none";
    document.getElementById("animais").style.display = "none";
    document.getElementById("jogos").style.display = "none";
    document.getElementById("inicio").style.display = "block";

    if(audioAtual != null){

        audioAtual.pause();
        audioAtual.currentTime = 0;
    }
}

function tocarSom(nomeSom, imagem, caminhoImagem){

    if(audioAtual != null){
        
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }


    let audio = document.getElementById("som_" + nomeSom);

    document.getElementById(imagem).src = caminhoImagem;

    audio.play();

    audioAtual = audio;
}