console.log("calcular orcamento")

// Manipulção do DOM
let inputELO = document.querySelector("ELO")
let inputJS = document.querySelector("js")
let inputDuoboost = document.querySelector("#Duoboost-sim")
let inputDuoboostNao = document.querySelector("#Duoboost-nao")
let inputPrazo = document.querySelector("#prazo")

inputELO.addEventListener("change", atualizarOrcamento)
inputJs.addEventListener("change", atualizarOrcamento)
inputDuoboost.addEventListener("change", atualizarOrcamento)
inputDuoboostNao.addEventListener("change", atualizarOrcamento)
inputPrazo.addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let preco = ELO.value * 100
    let js = inputJS.checked
    let Duoboost = inputDuoboost.checked
    let prazo = inputPrazo.value

    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo (${prazo} dias)`

    if(js) preco *= 1.1
    if(Duoboost) preco += ELO.value * 30/100
    let taxaDeUrgencia = 1 - prazo*.05
    preco *= 1 + taxaDeUrgencia


    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}