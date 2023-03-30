console.log("calcular orcamento")

// Manipulção do DOM
let inputELOAtual = document.querySelector("#ELOAtual")
let inputELOFinal = document.querySelector("#ELOFinal")
let inputDuoboost = document.querySelector("#Duoboost-sim")
let inputDuoboostNao = document.querySelector("#Duoboost-nao")
let inputPrazo = document.querySelector("#prazo")

inputELOAtual.addEventListener("change", atualizarOrcamento)
inputELOFinal.addEventListener("change", atualizarOrcamento)
inputDuoboost.addEventListener("change", atualizarOrcamento)
inputDuoboostNao.addEventListener("change", atualizarOrcamento)
inputPrazo.addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let preco = inputELOAtual.value * 100
    let Duoboost = inputDuoboost.checked
    let prazo = inputPrazo.value

    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo (${prazo} dias)`

    if(Duoboost) preco += inputELOAtual.value * 30
    let taxaDeUrgencia = 1 - prazo*.05
    preco *= 1 + taxaDeUrgencia


    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)

}


function mostrarTexto(id) {
    var texto = document.getElementById(id);
    texto.style.display = "block";
}


function esconderTexto(id) {
    var texto = document.getElementById(id);
    texto.style.display = "none";
  }