// @Ericodigos - Eric Oliveira Lima
// 15/05/2019

// B A S I C  D A T A    - JS
// S T R U C T U R E S

// Arrays - listas

// O array simples é unidimensional
let arraySimples = ['one', 2, 'three', true, false, undefined, null];      

// O método .length retorna o número de elementos no array.

console.log(arraySimples.length);


// Utilizar o array para armazenar uma coleção de dados

let arrayComplexo = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];


// Array com  5 elementos incluindo texto, número e um booleano. 

let yourArray = ['Ich', 'Er', 'Ihr', 'Du', 0, 43, true ];


// Usé o índice entre colchetes para acessar o elemento do array []

let myArray = ["a", "b", "c", "d"]; // Array simples

myArray[1] = "not b anymore"; // Alterando

console.log(myArray[1]); // Acessando

// Arrays não mutáveis 'mutable'

// .push()    //  Adiciona um elemento no final do array.
// .unshift() //  Adiciona um elemento no início do array.

let vinteEtrês = 'XXIII';
let numeraisRomanos = ['XXI', 'XXII'];

numeraisRomanos.unshift('XIX', 'XX'); 
// now equals ['XIX', 'XX', 'XXI', 'XXII']

numeraisRomanos.push(vinteEtrês);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push( 7, 'VIII', 9);
    return arr;
  }
  console.log(mixedNumbers(['IV', 5, 'six']));

// .pop()    Remove um elemento no final do array.
// .shift()  Remove um elemento no início do array.

// .pop() pode retornar o elemento que foi retirado:

let popped = greetings.pop();
// popped returns 'hello'
// greetings now equals []

function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// .splice()  - Remove itens no meio do array e conjuntos de elementos.
// .splice(índice, n_itens_deletar)

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// Remove 2 elementos a partir do 3º elemento
// array retorna: ['today', 'was', 'great']

// .splice() tmb retorna os itens removidos

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// Novo array: ['really', 'happy']

function sumOfTen(arr) {
    arr.splice(1,1);
    arr.splice(4,1); 
    return arr.reduce((a, b) => a + b); // Aplica o construtor a tds
  }                                     // elementos.    
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// .splice(índice, n_itens, item_substituto)
// O 3º e opcional argumento serve para substituir
// o item que foi eliminado.

function mudarCor(arr, index, newColor) {
    arr.splice(index, 1, newColor);
    return arr;
  }
  
  let paletaCores = ['#878787', '#a08794', '#d1becf'];
  
  paletaCores = mudarCor(paletaCores, 2, '#332327');
  // foi removido '#bb7e8c' e adicionado '#332327' no índice 2
  // paletaCores fica ["#878787", "#a08794", "#332327"]



  // Exclui a partir do elemento 0, os próximos dois itens
  // e substitui por 'Saitama' e 'Chichio' respectivamente.
function meusNomes(arr) { 
    arr.splice(0,2,'Saitama','Chichio')
    return arr;
    } 

console.log(meusNomes(['DarkGoldenRod', 'WhiteSmoke', 'Mikasa']));

// .slice() - Copia ou extrai um determinado número de itens no array

let condiçõesDoTempo = ['chuva', 'neve', 'granizo', 'granizzo', 'limpo'];

let tempoHoje = condiçõesDoTempo.slice(1, 3);
// tempoHoje = ['snow', 'sleet'];
// condiçõesDoTempo fica =  ['chuva', 'neve', 'granizo', 'granizzo', 'limpo'];

function forecast(arr) {

    return arr = arr.slice(2,4); // Retorna warm e sunny.
  }
  
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copiar um array usando o operado spread ...

let Arr = [true, true, undefined, false, null];
let Brr = [...Arr];
// Arr = [true, true, undefined, false, null]
// Brr remains unchanged, and is identical to thatArray


function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]); // Insere o arr no newArr N vezes
      num--;
    }
    return newArr;
  }
  console.log(copyMachine([true, false, true], 2));


// Combinar arrays com o operador spread ...

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['bas', 'cil', ...thisArray, 'coriander'];
// thatArray now equals ['bas', 'cil', 'sag', 'ros', 'par', 'thy', 'coriander']


function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; 
    return sentence;
  }
  
console.log(spreadOut());

// Verifica a presença de um elemento com o .indexOf()
// Informe o elemento como parâmetro e a função retornará o índice caso 
// encontrado e -1 caso não encontrado.

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returna -1
fruits.indexOf('oranges') // returna 2
fruits.indexOf('pears') // retorna 1, O índice do primeiro elemento encontrado é retornado.

function quickCheck(arr, elem) {
    if ((arr.indexOf(elem)<0)){
        return false;
    } else {
        return true;
    }; 
  }
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


  
// Interação com todos os itens de um array usando um for

