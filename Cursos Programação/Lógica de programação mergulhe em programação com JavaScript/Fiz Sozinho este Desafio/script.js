alert("Bem vindo ao jogo do Número Secreto!");
let numeroLimite = 100;
alert("Tente descobrir o número que está de 0 a " + numeroLimite);
let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
let tentativa = 0;
let digitar;
console.log(numeroSecreto);

while(digitar != numeroSecreto) {
    digitar = prompt("Digite o número que você acha ser o secreto");
    tentativa++;
    if(digitar == numeroSecreto) {
        break
    } else {
        let maiorMenor = digitar > numeroSecreto? "menor" : "maior";
        alert("O número secreto é " + maiorMenor + " que " + digitar); 
    }
}

let qtdTentativas = tentativa > 1? "tentativas": "tentativa";
alert("Parabéns você acertou o número secreto! com " + tentativa +" "+ qtdTentativas);
