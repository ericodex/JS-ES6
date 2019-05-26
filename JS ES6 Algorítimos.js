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
// Se é membro retorna 2 se não retorna 10
function pagaTaxa(éMembro) {
    return (éMembro ? "$2.00" : "$10.00");
}

// 003 - Fatorize um número
/*
  Retorne o fatorial de um inteiro

  - Se o um inteiro for N, seu fatorial será o produto de 
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
return maiores;
}

// 006 - Confirme o final

// Verifique se uma determinada string termina com determinada string.
function confirmEnding(str, target) {
    return str.substr((str.length - target.length)) == target;
  }

confirmEnding("Bastian", "n");

// 007 - Repetir um frase um determinado número de vezes.

function repeatStringNumTimes(str, num) {
  let res = '';
  if (num > 0) {
    for (let i = 0; i < num; i++){
      res = res + str;
      }
    } else {
      res = '';
    }
  return res;
}

// 008 - Frase truncada


function fraseTruncada(str, num) {
  /* Retorna uma parte da frase informada pelo parâmetro ou string inteira 
  concatenada com um ... */
  if (str.length > num){
    str = str.slice(0,num);    
    return str + "...";
  } else {
    return str;
  }
}

const fraseTruncada_2 = (str, num) => {
  /* Retorna uma parte da frase informada pelo parâmetro ou string inteira 
  concatenada com um ... */
  if (str.length > num){
    str = str.slice(0,num);
    str + "...";
  } else {
    return str;
  }
}

// 009 -  Finders Keepers (Encontrar e verificar)

/* 
 Uma função que procura em um determinado array (1º argumento) e retorna o
 primeiro elemento do array que passar pelo teste (2º argumento). Se nenhum elemento
 passar no teste, retorne indefinido.
*/

function findElement(arr, func) {
  for (let e in arr){
    num = arr[e];
    if (func(num)){
      return num;
      break;
    }
  }
  return undefined;
}

// 010 - Algoritmo de "Boo Who"

function booWho(bool) {
  /* Retorna Verdadeiro de um argumento for booleano*/
  if (bool === true | bool === false ){
    return true;
  } else {
    return false;
  }
  
}


// 011 - Colocar a primeira letra de cada palavra de uma frase como maiúscula.

function titleCase(str) {
  /* Retorna a frase com a primeira letra de cada palavra maiúscula. */
  let ar = str.split(' ');
  str = [];
  for (let e in ar){
    str.push(ar[e].charAt(0).toUpperCase() + ar[e].slice(1).toLowerCase());
  }
  return str.join(' ');
}

titleCase("I'm a little tea pOt");

// 012 - Slice and Splice



function frankenSplice2(arr1, arr2, n) {
  let arr3 = [];
  /* Insira o 1º array no 2º a partir do índice 'n'. */
  for (let i = 0; i < arr2.length; i++){
    if (i == n){
      for (let j = 0; j < arr1.length; j++){
        arr3[n+j] = arr1[j];
      }
    }
    arr3.push(arr2[i]);
  }
  console.log(arr3);

  return arr3;
}

function frankenSplice(arr1, arr2, n) {
  let arre = arr1;
  let r = arr2.slice();
  r.splice(n,0,...arre);
  return r;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 013 - Remova os valores falsificados de uma lista.

/** Valores falsificados são (false, null,"", 0, undefined and NaN) */

function bouncer(arr) {
  let arr2 = arr.filter(Boolean);
  return arr2;
}



bouncer([false, null, 0, NaN, undefined, ""]);

// 014 - Onde eu pertenço?

/** Retorna a posição índice que um valor 'num' deve ficar em um determinado
 * array
 */
function getIndexToIns(arr, num) {
  arr.sort(function (a,b){return a - b});
  let i=0;
  while(num > arr[i]){ // Utilizando WHILE
    i++;
  }
  return i;
}  


/* Concatena o 'num' no array 'arr', classifica a lista concatenada 
e retorna o índice do 'num' nessa lista*/
function getIndexToIns2(arr, num) {
  return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

// 015 - Mutações 

/** Retorne verdadeiro se todas as letras do primeiro elemento contém todas
 * as letras do segundo elemento.
 */
function mutation(arr) {
  var a = arr[1].toLowerCase();
  var b = arr[0].toLowerCase();
  for (var i=0;i<a.length;i++) {
    if (b.indexOf(a[i]) < 0)
      return false;
  }
  return true;
 }
mutation(["banca", "xanana"]);

function mutation2(arr) { // Declarativa
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

// Js .every
// https://www.freecodecamp.org/forum/t/javascript-array-prototype-every/14287
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

// Define the callback function.
function CheckIfEven(value, index, ar) {
  document.write(value + " ");

  if (value % 2 == 0)
      return true;
  else
      return false;
}

// Create an array.
var numbers = [2, 4, 5, 6, 8];

// Check whether the callback function returns true for all of the
// array values.
if (numbers.every(CheckIfEven))
  document.write("All are even.");
else
  document.write("Some are not even.");

// Output:
// 2 4 5 Some are not even.

// 016 - Chunky Monkey

function chunkArrayInGroups(arr, size){
  var temp = [];
  var result = [];
  for(var a=0;a<arr.length;a++) {
    if(a%size!==size-1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0)
    result.push(temp);
  return result;
}

function chunkArrayInGroups2(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
  arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}
