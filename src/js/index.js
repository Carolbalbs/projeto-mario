/*
OBJETIVOS DO PROJETO

#1 - Quando o usuario clicar no botao "ver trailer", devemos abrir a modal com video 
    Passos:
        #1 Pegar o ELEMENTO que representa o noyso na tela usando js
        #2 Identificar quando o usuario clica no botao
        #3 Pegar o ELEMENTO da modal no js
        #4 Abrir modal na tela


#2 - Quando o usuario clicar no X devemos fehcar a modal
    Passos:
        #1 Pegar o ELEMENTO de fechar modal usando js
        #2 Identificar quando o usuario clicou no X
        #3 Fechar modal
 */ 


const modal = document.querySelector(".modal");
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
//link salvo na variavel
const video = document.getElementById("video");
const linkDoVideo = video.src;

    function alternarModal(){
    
    modal.classList.toggle("aberto");
}

    botaoTrailer.addEventListener("click", () => {
        alternarModal();//mudar modal no html
        video.setAttribute("src",linkDoVideo);
});

    botaoFecharModal.addEventListener("click", () =>{
        alternarModal();
        video.setAttribute("src","");
    });
