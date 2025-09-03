let idade = 20; 
let nome = "João"; 

let precoEntrada = 30;
let dinheiroDisponivel = 50;

if (idade >= 18 && dinheiroDisponivel >= precoEntrada) {
    console.log(nome + " pode entrar no clube. Boa diversão!");
} else if (idade < 18 && dinheiroDisponivel >= precoEntrada) {
    console.log(nome + " tem dinheiro, mas não tem idade suficiente para entrar.");
} else if (idade >= 18 && dinheiroDisponivel < precoEntrada) {
    console.log(nome + " tem idade suficiente, mas não tem dinheiro para entrar.");
} else {
    console.log(nome + " não tem idade nem dinheiro para entrar no clube.");
}

let troco = dinheiroDisponivel - precoEntrada;
console.log("Troco após pagar a entrada: R$" + troco);