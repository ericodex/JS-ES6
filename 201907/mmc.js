const {performance} = require('perf_hooks'); //Para contar o tempo
var iter; // Contador de iterações. 

function f_mmc(x,y){
  // Classifica x e y e encontra o menor e o maior
  let arr = [x,y];
  arr.sort( (a,b)=>{return a>b});
  // Cria 'arre' uma lista com todos os números inteiros entre X e Y inclusive.
  let arre = [];
  for(let i=arr[0];i<=arr[1];i++){
    arre.push(i); 
  }
  console.log('O MMC do conjunto: [' + arre + '] é:');
  // Define (pior) como o produto de todos elementos do array
  let pior = arre.reduce( (a,b)=>{return a*b});
  
/** 
 Inicia um loop a partir do maior elemento do conjunto (arre) até o limite
 definido por (pior), a cada iteração (j) é incrementado por si mesmo e é 
 testado se o mesmo possui divisão de resto zero com todo os elementos de
 (arre), caso positivo retorne (j) que será o mínimo múltiplo comum.
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
// Marca início da execução
var t0 = performance.now();
console.log(f_mmc(23,18));
// Marca final da execução
var t1 = performance.now();
console.log("A execução de 'f_mmc' durou " + (t1 - t0) + " milissegundos.");
console.log("A execução de 'f_mmc' teve " + iter + " iterações.");

