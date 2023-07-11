let manuais = document.getElementById("manuais")
let frame = document.querySelector('iframe')
let manualAtual = -1
let apres = document.getElementById("apre")
let check = false

function adicionar() {
    if (manualAtual >= (lista.length - 1)) {
        manualAtual = 0
    } else {
        manualAtual++
    }

    carregar()

}



function subtrair() {
    if (manualAtual <= 0) {
        manualAtual = (lista.length - 1)
    } else {
        manualAtual--
    }

    carregar()

}




function modal() {
    check = true
    frame.classList.remove("hide")

    carregar()

    let modal = document.querySelector("dialog");

    modal.showModal();
}



function fechar() {
    check = false
    frame.classList.add("hide")

    let modal = document.querySelector("dialog")

    modal.close();

    carregar();

}



function carregar() {


    if (check == true) {
        if (lista[manualAtual].partes == 1) {
            manuais.innerHTML = `<div id="close_btn"> 
            ${manualAtual+1} / ${lista.length+1}

            <p>${lista[manualAtual].nome}</p>

            <button onclick="fechar()" id="fechar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button></div>

          <div id="splice">
          <button onclick="subtrair()" id="esq"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg></button>
  
          <iframe src="${lista[manualAtual].link}"></iframe>

    
    <button onclick="adicionar()" id="dir"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg></button></div>`



        } else if (lista[manualAtual].partes == 2) {
            manuais.innerHTML = `<div id="close_btn"> 
            ${manualAtual+1} / ${lista.length+1}

            <p>${lista[manualAtual].nome}</p>

            <button onclick="fechar()" id="fechar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button></div>

          <div id="splice">
          <button onclick="subtrair()" id="esq"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg></button>
        
        <div class="double">
          <iframe src="${lista[manualAtual].link_1}"></iframe>
        <iframe src="${lista[manualAtual].link_2}"></iframe>
        </div>
    
    <button onclick="adicionar()" id="dir"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg></button></div>`



        }
    }
    else {
        if (lista[manualAtual].partes == 1) {
            apres.innerHTML = `<img src="${lista[manualAtual].img}" alt="">
            <p>${lista[manualAtual].nome}</p>`
        }

        else if (lista[manualAtual].partes == 2) {
            apres.innerHTML = `<img src="${lista[manualAtual].img}" alt="">
            <p>${lista[manualAtual].nome}</p>`
        }
    }
}

function start() {
    manualAtual = -1

    let botoes = document.querySelector("#botões")

    apres.style.display = "flex"

    botoes.style.display = "flex"
    document.getElementById("expand").style.display = "none"
    document.getElementById("start_BTN").style.display = "none"
    document.getElementById("expand").style.display = "flex"

    manualAtual++

    carregar()

    document.body.scrollTop = 300;
    document.documentElement.scrollTop = 300;


}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       subtrair()
       carregar()
    }
    else if (e.keyCode == '39') {
        adicionar()
        carregar()
    }

}

window.onclick = function(event) {
    let modal = document.querySelector("Dialog");


    if (event.target == modal) {
      fechar()
    }
  }

  