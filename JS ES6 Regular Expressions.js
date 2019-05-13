//@ericodigos - 13/05/2019
// EXPRESSÕES REGULARES (Regular Expressions) - Javascript ES6
// regexes - REGEXES 

// São utilizadas para verificar um conjunto de 
// caracteres em uma string.

// Para procurar a palavra "bonita" na frase 
// "A matemática é bonita", vc utilizará
// a barra (slash) envelopando a palavra
// /não/ que será armazenado em um objeto regex
// note que não utilizará aspas (quote)"



 // Um dos meios de testar o regex em uma frase é usando
 // o método .test() que tem um retorno booleano.


let strTeste = "A matemática é bonita"
let meuRegex = /bonita/
let resultado = meuRegex.test(strTeste)

// O regex tmb suporta operadores como 'ou(or)' | e 'e(and)' &&

let alvoString = "Temos democracia e balburdia";
let alvosRegex = /fascismo|tortura|encarceramento|racismo/; // Change this line
let resultado_2 = alvosRegex.test(alvoString);



