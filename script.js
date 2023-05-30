//while
let numero = Number(prompt("Digite um número"))
let soma = 0
while(numero !== 0){
    soma = soma + numero
    console.log(numero)
    console.log(soma)
    numero = Number(prompt("Digite um novo número"))
}
console.log("Soma:", soma)

//for
for(let i = 0; i <= numero; i++){
    console.log(i)
}

// for com arrays
const array = [5, 10, 15, 20, 25, 30, 35]
for (let i = 0; i <array.length; i++){
    console.log(`O elemento de índice ${array[i]}`);
}

//Pra guardar na cabeça
// Exercício 1
let usuario = prompt("Qual usuário: ")

while(usuario.toLowerCase() !== "a"){
    console.log("Acesso negado")
    usuario = prompt("Qual usuário: ")
}
console.log("Boas vindas, admin!", usuario)

//Exercício 2
let taboada = 2
for (let i = 1; i <= 10; i++){
        console.log(`${taboada} x ${i} = ${taboada*i}`)
}


//Exercício 3
const array1 = ["Hoje", "é", "segunda", "feira!"]

for(let i = 0; i < array1.length; i++){
    console.log(array1[i].toUpperCase())
}