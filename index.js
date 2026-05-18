//------listas------\\

//exercicio 1

const frutas = ["Banana","Maçã","Laranja","Manga","Uva"]

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[4]);

//exercicio 2

const numeros = [1, 2, 3, 4, 5, 6];
let soma = 0;

for(let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log(soma);

//exercicio 3

const listanum = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const maior = Math.max(...listanum);

console.log(maior);

//------tuplas------\\

const aluno = ["Enzo", 16, "2° Tec"]
const [nome, idade, turma] = aluno;

console.log(nome);
console.log(idade + " anos");
console.log(turma);
