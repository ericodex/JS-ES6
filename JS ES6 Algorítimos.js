// @ericodigos  - 22 de maio de 2019
// BASIC ALGORITHM SCRIPTING

//    Um algoritmo de computador é uma sequência de instruções que 
// se executadas em ordem atingem um objetivo particular.



// 001 - Converter Celsius em Fahrenheit

function convertToF(celsius) {
    let fahrenheit = (celsius * 9/5) +32;
  
    return fahrenheit;
  }
  
convertToF(30);

// 002 - Reordenar um string

function reverseString1(str) {
    return str.split("").reverse().join("");
  }
  
reverseString1("hello");

// Utilizando o .charAt() 

function RevText(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return RevText(str.substr(1)) + str.charAt(0);
  /* 
  :B  Primeira parte do método de recursividade.
  
  Você precisa se lembrar que não haverá apenas uma chamada, serão várias chamadas
  aninhadas.
  Cada chamada: str === "?" RevText(str.subst(1)) + str.charAt(0)
  1º chamada – RevText("Hello")   retornará   RevText("ello")           + "h"
  2º chamada – RevText("ello")    retornará   RevText("llo")            + "e"
  3º chamada – RevText("llo")     retornará   RevText("lo")             + "l"
  4º chamada – RevText("lo")      retornará   RevText("o")              + "l"
  5º chamada – RevText("o")       retornará   RevText("")               + "o"
  
  :B  Segunda parte do  recursividade
  The method hits the if condition and the most highly nested chamada returns immediately
  5º chamada retornará RevText("") + "o" = "o"
  4º chamada retornará RevText("o") + "l" = "o" + "l"
  3º chamada retornará RevText("lo") + "l" = "o" + "l" + "l"
  2º chamada retornará RevText("llo") + "e" = "o" + "l" + "l" + "e"
  1º chamada retornará RevText("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  }
RevText("hello");

// Sem comentários:

function reverseString3(str) {
    if (str === "")
      return "";
    else
      return reverseString3(str.substr(1)) + str.charAt(0);
  }
reverseString3("hello");

// Operador condicional

function reverseString4(str) {
    return (str === '') ? '' : reverseString4(str.substr(1)) + str.charAt(0);
  }
reverseString4("hello");

/*
 Condition Ternary Operators
*/

function pagaTaxa(éMembro) {
    return (éMembro ? "$2.00" : "$10.00");
  }
  
console.log(pagaTaxa(true));
// Retorna: "R$2.00"

console.log(pagaTaxa(false));
// Retorna: "R$10.00"

console.log(pagaTaxa(1));
// Retorna: "R$2.00"

// 003 - Fatorize um número

/*
  Retorne o fatorial de um inteiro

  - Se o um inteiro for N, seu fatorial será o produto da multiplicação de 
  todos os positivos inteiros menores o iguais a N.

    Produto é o resultado da multiplicação
    Diferença é o resultado da subtração
    Quociente é o resultado da divisão
    Soma é o resultado da adição

  - Fatorial são representados com N!
*/

// Retorna o número fatorial de um inteiro maior q zero.
function fatorizar(n) {
    return (n < 0 | n == 1 | n == 0) ? 1 : n * fatorizar(n - 1); 
}

// 004 - Encontrar a palavra mais longa em uma string.

// Retorna a número de caracteres da palavra mais longa de uma frase.
const findLongestWordLength = (str) => {

    let obj = str.split(' ');
    
    let i = 0;
  
    for (let ele in obj){
      if (obj[ele].length > i){
        i = obj[ele].length;
      }
    }
  
    return i;
}

// 005 - Retornar os maiores números de cada uma das listas.


/* Função que retorna os maiores números de cada uma das listas do array */
function largestOfFour(arr) {

let maiores = [];

for (let a in arr){
    let i = arr[a][0];
    for (let b in arr[a]){
        
        if (arr[a][b] > i){
            i = arr[a][b];
        }
    }
    maiores.push(i); 
    
}
console.log(maiores);

return maiores;
}

// 006 - Confirme o final

// Verifique se uma determinada string termina com determinada string.
function confirmEnding(str, target) {
    return str.substr((str.length - target.length)) == target;
  }

confirmEnding("Bastian", "n");

// 007 - Repetir um frase repetir uma frase


