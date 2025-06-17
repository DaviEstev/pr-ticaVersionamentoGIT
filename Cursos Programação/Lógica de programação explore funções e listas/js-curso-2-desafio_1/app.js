//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio"

function clicaBotaoConsole() {
    console.log("O botão foi clicado");
}

function alertaJS() {
    console.log("Eu amo JS");
}

function cidadeBrasil() {
    let cidade = prompt("Digite o nome de uma cidade do brasil");
    alert("Estive em " + cidade + " e lembrei de você");
}

function somaDois() {
    let num1 = parseInt(prompt("Digite o primeiro número"));
    let num2 = parseInt(prompt("Digite o segundo número"));
    let resultado = num1 + num2;
    alert("A soma do número " + num1 + " com " + num2 + " é: " + resultado);
}