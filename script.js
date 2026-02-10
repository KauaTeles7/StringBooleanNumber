// tipos de dados
// No java Script, tudo o que armazenamos em variaveis tem um tipo. Esses tipo definem o que podemos fazer com os valores

// Principais tipos de dados
// String (texto)
// Number (Números)
// Boolean (verdadeiro ou falso)
// Object (objetos, que agrupam informações)
// Array (lista de valores)
// Null (valor vazio)
// Undefined (quando algo nao foi definido)

// String 
// Sempre é escrita entre aspas ("" ou ''

//um boolean pode ter apenas dois valores, sendo eles true or false
// let maiordeIdade = true
// let menordeIdade = false
// console.log(maiordeIdade)
// console.log(menordeIdade)

// camel case -- mais famosa
// primeira palavra minuscula
// palavras seguintes começam com maiúscula
// let IdadeUsuario = undefined

// pascalcase
// todas as plavras começam com letra maiuscula 
// usada para classes, construtores e componentes
// class UsuarioSistema {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }
// }

// Snake case
// palvras separadas por underscore_
// tudo minusculo
// muitoooo comum no python, banco de dados e APIs
// let nome_completo_casado

// kebab case
// palavras separadas por hifen
// nao funciona como nome de variavel no JavaScript
// <divclass="menu-principal"></div>

//Strings
let nome = "Kaua"
console.log("meu nome é " + nome)

let sobrenome = "Teles"
console.log("meu sobrenome é " + sobrenome)

console.log(`meu nome é ${nome} ${sobrenome}`)

let escola = "SESI"
console.log("Minha escola é o " + escola)

let a = "O Santos é "
let b = "o maior time brasileiro"
console.log(a + b)

console.log("Bem vindo " + nome)

let texto = "Programar"
console.log(texto.length) 

console.log("oi".toUpperCase())

console.log("OI".toUpperCase())

let cidade = "Guarulhos"
console.log( "eu moro em " + cidade)

//number
let n1 = 20
let n2 = 5
console.log(n1 + n2)

console.log(n1-n2)

console.log(n1 * n2)

console.log(n1/n2)


//boolean
let ativo = true
console.log(ativo)

let numero = 9
console.log(numero > 10)

let idade = 20 
console.log(idade >= 18)