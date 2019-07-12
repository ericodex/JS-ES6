// 11/06/2019  - @Ericódigos
/*jshint esversion: 6 */ 

/**
  O exercício do FreeCodeCamp 'Intermediate Algorithm Scripting: Smallest Common 
  Multiple' solicitou-me uma função que retorne o Mínimo Múltiplo Comum de um 
  intervalo de inteiros. 
*/

/**
  Força bruta, a função delimita o maior multiplicador possível como o 
  produto de todos os elementos do array, de forma crescente e incrementando
  o número de vezes igual ao maior elemento do array. Cada possibilidade
  é testada em cada elemento do array retornando o menor múltiplica dor comum. 
*/
 const {performance} = require('perf_hooks'); //Para contar o tempo
 var iter; // Contador de iterações. 
 
 function f_MMC(x,y){  // Função Mínimo Multiplicador Comum
   // Classifica x e y e encontra o menor e o maior
   [x,y].sort( (a,b)=>{return a>b});
   // Cria 'arre' uma lista com todos os números inteiros entre X e Y inclusive.
   let arre = [];
   for(let i=arr[0];i<=arr[1];i++){
     arre.push(i); 
   }
   // Define 'pior' como o produto de todos elementos do array
   let pior = arre.reduce( (a,b)=>{return a*b});
   
/** 
  Inicia um loop a partir do maior elemento do conjunto (arre) até o limite
  definido por (pior), a cada iteração (j) é incrementado por sí mesmo e é 
  testado se o mesmo possui divisão de resto zero com todo os elementos de
  (arre), caso positivo retorne (j) que será o minímo múltiplo comum.
*/ 
   let v_lcm = false;
   iter = 0;
   for(let j=arre[arre.length-1];j<=pior;j+=arre[arre.length-1]){
     let v_lcm = true;
     iter++;
     for(let e in arre){
       iter++;
       if(j%arre[e]!==0){
         v_lcm = false
       }
     }
     if(v_lcm==true){
       return j;
     }
   }
 }
 var t0 = performance.now();
 console.log(f_MMC(23,15)) 
 var t1 = performance.now();
 console.log("A execução de 'f_MMC' durou " + (t1 - t0) + " milissegundos.");
 console.log("A execução de 'f_MMC' teve " + iter + " iterações.");


//     $$$$$$$$$$$$$$$$$$$$$$$    Exemplo okay?!  $$$$$$$$$$$$$$$$$$$$$$$$$$
var inter; // Contador de iterações.
function mmcIntervaloOkay(arr) { 
    // Classificando a lista do maior para o menor.
    inter=0;
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
    // Repita enquanto n for diferente do comprimento da lista.
    //let arre = [];
    do {
        inter++;
        quot = newArr[0] * loop * newArr[1]; //Produto dos dois maiores elementos da lista.
      //arre.push(quot)
      for (n = 2; n < newArr.length; n++) {
        inter++;
        if (quot % newArr[n] !== 0) {
          break;
        }
      }
  
      loop++;
    } while (n !== newArr.length);
    //console.log(arre)
    return quot;
  }
  
  // Chamada de teste
  var t0 = performance.now();
  console.log(mmcIntervaloOkay([23,18])); 
  var t1 = performance.now();
  console.log('A execução de mmcIntervaloOkay durou '+ (t1-t0) + ' milissegundos.');
  console.log("A execução de 'mmcIntervaloOkay' teve " + iter+ " iterações.");
/**
 *  11/06/2019
   Resultado: 6 056 820 
   A execução de mmcIntervaloOkay durou 4 milissegundos.
   A execução de 'mmcIntervaloOkay' teve 24570 iterações.
 */

//---------



// @#$@#$@#$@#$@#$ Matemática Euclidiana Suprema @#$@#$@#$@#$@#$@#$@#$
var iter=0; // Contador de iterações.

function mdc(a,b){
  iter++;
  if (b == 0){
      return a;
  }else{
      return mdc(b , a % b);
  }
}

function mmc(a,b){
  iter++;
  return ((a * b) / mdc(a,b));
}

function f_euclides_mmc(a,b){

  let arr = [a,b].sort( (a,b)=> a > b);
  let arre = [];
  for(let i=arr[0];i<=arr[1];i++){
    arre.push(i); 
  }
  console.log('O MMC do conjunto: [' + arre + '] é:');
  function f_mmc(cnj){
    iter++;
    if (cnj.length == 2){
        return mmc(cnj[0],cnj[1]);
    }else{
        ar = [mmc(cnj[0],cnj[1]),...cnj.slice(2)];
        return f_mmc(ar);
    }
  }
  return f_mmc(arre);
}

var t0 = performance.now();
console.log(f_euclides_mmc(23, 18));
var t1 = performance.now();
console.log('A execução de f_euclides_mmc durou '+ (t1-t0) + ' milissegundos.');
console.log("A execução de 'f_euclides_mmc' teve " + iter+ " iterações.");

//       ~~$#$%**~~~~$#$%**~~ Fim do exemplo supremo ~~$#$%**~~~~$#$%**~~ 