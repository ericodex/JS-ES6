// @ericodigos   28/0/2019

// 001 - Somar todos os números em um intervalo.

// Função que copia o '.range()' do python.
function range(início, fim, incr) { // Python range
    /**Retorna um array com os elementos de um intervalo entre um início e um 
     * fim, com o incremento podendo ser opcionalmente ajustado por um número inteiro
     * positivo maior que zero.  */
    if (typeof fim == 'undefined') {
        fim = início;
        início = 0;
    }
    if (typeof incr == 'undefined') {
        incr = 1;
    }
    if ((incr > 0 && início >= fim) || (incr < 0 && início <= fim)) {
        return [];
    }
    var result = [];
    for (var i = início; incr > 0 ? i < fim : i > fim; i += incr) {
        result.push(i);
    }
    return result;
};
//--------------------------------------------------------------------------
function somarEntre(arr) {  // Code swag 
    // Somar os elementos criados a partir de dois números não ordenados de um array.
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

// Exemplo de chamada: somarEntre([1, 4]);

function somarEntre2(arr) {
  
    arr.sort( (a,b) =>{
      return a - b;
    })
  
    let n = 0;
    for(let i = arr[0]; i <= arr[1];i++){
      n = n + i;
    }
  
    return n;
  
  }

//Segunda tentativa
  function sumAll(arr) {
    arr.sort( (a,b)=>{return a-b});
    let r=0;
    for(let i=arr[0];i<=arr[1];i++){
      r+=i
    }
    return r;
  }
  
  sumAll([4, 1]);


  /**** 002 - Retornar os diferentes entre dois arrays. ##############$$$$$$$$$$$########## */

  function diffArray(arr1, arr2) { // Minha resolução.
    var newArr = [];
      for(let i=0;i<arr1.length;i++){
  
        if(arr2.indexOf(arr1[i])<0){
          newArr.push(arr1[i]);
        }
      }
      for(let i=0;i<arr2.length;i++){
  
        if(arr1.indexOf(arr2[i])<0){
          newArr.push(arr2[i]);;
        }
      }
    // Same, same; but different.
    console.log(newArr);
    return newArr;
  }

  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(
          item => !arr1.includes(item) || !arr2.includes(item)
      )
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  // método 'includes()'

  // Declarativa
  function diffArray(arr1, arr2) {
    return [
      ...diff(arr1, arr2),
      ...diff(arr2, arr1)
    ]
    
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }

  /**** 003 - Algorítimo Seek and Destroy  *///####################################

  function destroyer(...arr) {// Usei o spread
    // Remove all the values
    let arre = arr[0];
    for(let i=1;i<arr.length;i++){
      arre = arre.filter( (a)=>{return a!==arr[i]});
    }
    return arre; 
  }
  
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);

  function destroyer(arr) { // Usei o arguments
    // Remove all the values
    for(let i=1;i<arguments.length;i++){
      console.log(arguments[i]+"-"+arr.indexOf(arguments[i]))
  
      if(arr.indexOf(arguments[i])>=0){
        arr = arr.filter((x)=>{return x!==arguments[i]})
      }
    }
    return arr;
  }

/**** 004 -  */

// .for + array.filter() + hasOwnProperty() + Object.keys

//---Filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
//----

//--- Reduce
const array1 = [{'a':1},{'b':2}, {'c':3}];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
//-------



function whatIsInAName(collection, source) {
  
    var srcKeys = Object.keys(source); //Object.keys(objeto)
    
    let arr = collection.filter( (o)=>{
        return srcKeys
        .map((k)=>{
            return o.hasOwnProperty(k) && o[k] === source[k];
        })
        .reduce(function(a, b) {
            return a && b;
        });
    });
  
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, 
  { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }],
   { "apple": 1, "bat": 2 });

/**** 005 - Spinal Tap Case 
 * -transformes vários tipos de string em um string lower case separadas por hífen.
*/

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let ar = str.split('');
  
    console.log(ar);
  
    let arre = ar.map( (x)=>{
      if (x == x.toUpperCase()){
        return " " + x 
      }else{
        return x
      }
    })
  
    arre = arre.join('').split('')
  
    arre = arre.map( (x)=>{
      if(x==' '||x==null||x=='_'){
        return '-';
      }else{
        return x.toLowerCase()
      }
    })
  
    let sttr = arre.join('').replace(/-+/g,'-')
  
  
    if(sttr[0]=='-'){
      sttr = sttr.slice(1);
    }
  
    return sttr;
    
  }
  
  spinalCase('The_Andy_SpinalTap');

/**** 006 - Pig Latin 
 * Pig Latin pega a primeira consoante ou conjunto de consoantes de uma 
 * palavra e move para o final da string adicionando o sufixo 'ay' no final;
 * Se a string começa com uma vogal adicione o prefixo 'way' no início.
*/
function translatePigLatin(str) {
  
  let regex = /[aeiou]/gi;
  let n = 0;

  if(str[0].match(regex)){
    return str + 'way'
  }else if(str.match(regex)===null){
    return str + 'ay'
  }else{
    while(str[n].match(regex)===null){
      n++;
    }
    return str.slice(n) + str.slice(0,n) + 'ay'
  }
}

console.log(translatePigLatin("llll"));


/**** 007 - Search and replace */


function myReplace(str, before, after) {
  //Verifica se a primeira consoante é maiúscula.
  if(before[0]==before[0].toUpperCase()){
    after = after[0].toUpperCase()+after.slice(1)
  }
  return str.replace(before,after);
}

myReplace("A quick brown fox jumped over the lazy dog", "umped", "leaped");


/**** 008 - Algorithm Scripting DNA - Pairing */

function pairElement(str) {
  //Criar um objeto com os pares. key:value
  let pares = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  //separar a frase em lista.
  var arr = str.split("");
  //Para cada caractére equivalente retorna o par do objeto.
  //map character to array of character and matching pair
  return arr.map(x => [x,pares[x]]);
}
pairElement("GCG");


function pairElement(str) {
  // Lista em branco
  var paired = [];

  // função para chegar o caractere e retornar o par.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");

/**** 009 - Missing Letters */

function fearNotLetter(str) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'

  abc = abc.split('')
  str = str.split('')



  for(let i=0;i<abc.length;i++){
    console.log(abc[i]+'-'+str[0])
    if(abc[i]==str[0]){
      for(let n=0;n<str.length;n++){ 
        console.log(str[n]+'-'+abc[n+i])
        if(str[n]!==abc[n+i]){
          return abc[n+i]
        }
      }
    }
  }
  str = undefined
  return str;
}

fearNotLetter("stvwx");

/**** 010 - Sorted Union - Classificação conjunta */

function uniteUnique(arr) {
  
  var arre = arguments[0];
  for(let i=1;i<arguments.length;i++){
    for(let e in arguments[i]){
      if(arre.indexOf(arguments[i][e])<0){
        arre.push(arguments[i][e])
      }
    }
  }

  return arre;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

var args = Array.prototype.slice.call(arguments);

/**** 011 - Convert HTML Entities */
/*
Stuff in &​quot;quotation marks&​quot;
Stuff in &​quot;quotation marks&​quot;
Stuff in &​quot;quotation marks&​quot;
*/

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}


function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  let pares={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(x => pares[x] || x).join('');
}

convertHTML('Stuff in "quotation marks"');

/**** 012 - Some todos os números impares em um intervalo de fibonacci */


function sumFibs(num) {
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;

  let farr = [1,1];
  let i =1;
  while(farr[i]<num){
    let imp = farr[i]+farr[i-1];
    if(imp<=num){
      farr.push(imp)
    }
    i++;
  }
  farr = farr.filter( x=> x % 2 !==0 ? x : '').reduce( (a,b)=> {return a + b})

  return farr;
}

sumFibs(75025);

/**** 013 - Some todos os números primos de 0 até um determinado número
 *  06/06/2019*/

 function éPrimo(n){
  if(n==1||n==2){
    return true;
  }
  let state = true;
  for(let i=Math.sqrt(n);i>1;i--){
    if(n % i == 0){
      return false;
    }
  }
  return state;
}

function sumPrimes(n){
  let arr = [];

  for(let i=2;i<=Math.sqrt(n);i++){
    if(éPrimo(i)){
      arr.push(i)
    }
  }

  let num = arr.reduce( (a,b)=>{return a + b})

  console.log(arr)
  console.log(num)

  return num

}

sumPrimes(10)

/**** 014 - Least common multiple */

function mdc(arr){//Recebe uma lista de inteiros e retorna o Máximo divisor comum.
  
  var arre =[];
  var n = 0;

  // Retorna uma lista de denominadores de resto 0 para cada inteiro em arr.
  for(let e in arr){
    if(arr[e]==0){return 0}
    let ar =[];
    n = arr[e];
    for(let i=0;i<=n;i++){
      if(n%i==0){
        ar.push(i);
      }
    }
    arre.push(ar);
  }
  console.log(arre)
  let gdc = [...arre[0]];
  let intercessão = [];
  for(let e in arre){
    intercessão = gdc.filter(x => arre[e].includes(x));
  }
  console.log(intercessão)
  return intercessão[intercessão.length-1];
}

mdc([330,75,450,225])


function smallestCommons(arr){
  //Classificando a lista do menor para o maior
  arr.sort( (a,b)=>{return a>b});
  
  // Criando a lista 'arre' com intervalo ente o menor e o maior.
  let arre = [];
  for(let i=arr[0];i<=arr[1];i++){
    arre.push(i);
  }


  let pior = arre.reduce( (a,b)=>{return a*b});
  let v_lcm = false;
  let multiplicadores = [];


  for(let j=arre[arre.length-1];j<=pior;j+=arre[arre.length-1]){
    //console.log(j);
    let v_lcm = true;
    for(let e in arre){
     if(j%arre[e]!==0){
       v_lcm = false
     }
    }
    if(v_lcm==true){
      return j;
    }

  }
  //console.log(multiplicadores)
  //return multiplicadores[multiplicadores.length-1]
}

smallestCommons([23,18]) // Retorno esperado: 6056820

//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨

function smallestCommons(arr) { 
  // Classificando a lista do maior para o menor.
  arr.sort(function(a, b) {
    return b - a;
  });

  // Criando uma lista com o intervalo dos inteiros entre o menor e o maior 
  // número fornecido.
  var newArr = [];
  for (var i = arr[0]; i >= arr[arr.length-1]; i--) {
    newArr.push(i);
  }

  // Variáveis fora do loop.
  var quot = 0; //Quociente 'Latin: Quantas Vezes'
  var loop = 1;
  var n;
  console.log(newArr)
  // Repita enquanto n for diferente do comprimento da lista.
  let arre = [];
  do {
    quot = newArr[0] * loop * newArr[1];
    arre.push(quot)
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);
  console.log(arre)
  return quot;
}

// Chamada de teste
smallestCommons([23,18]); //Retorno esperado: 6056820

function smallestCommons(arr) {
  
  let min = Math.min.apply(null,arr);
  let max = Math.max.apply(null,arr);
  let v_mmc = mmc(min,min+1);
  
  while(min < max){
    min++;
    v_mmc = mmc(v_mmc,min);
  }
  return v_mmc;
}

function mdc(a,b){
  while(b>0){
    let t=a;
    a=b;
    b=t%b;
  }
  return a;
}

function mmc(a,b){
  return (a * b /mdc(a,b))
}

smallestCommons([5,1]);




// 015 - Script deixar cair? Scripting: Drop it

function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])){
    arr.shift();
  }
  console.log(arr)
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;})

// 016 - Rolo compressor

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}


/** 0XX - Bônus  */


*/


