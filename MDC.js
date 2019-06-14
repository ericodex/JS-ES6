//@ericódicos - 06/06/2019

// %%%%%%%%%%%%%%%%%% Exemplo Bom %%%%%%%%%%%%%%%%%
//https://pt.wikipedia.org/wiki/Algoritmo_de_Euclides
function mdc(a,b){ // 
  //Retorna o Máximo Divisor Comum entre dois inteiros.
  //Se b > 0 é um divisor de a , então mdc(a,b)=b
  while(b>0){
    let t=a;
    a=b;
    b=t%b;
  }
  return a;
}

//mdc(303,707)

function mdcIntervalo(arr){

  arr.sort((a,b)=>{return a-b})
  let t;
  for(let i=0;i<=arr.length;i++){
    t = mdc(arr[0],arr[1])
    //console.log(t)
    arr = arr.slice(1)
    //console.log(arr)
    arr.push(t)
    //console.log(arr)
  }
  return t
}

var t0 = performance.now();
mdcIntervalo([330,75,450,225])
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

// %%%%%%%%%%%%%%%%%%% Exemplo Ruim %%%%%%%%%%%%%%%%%%
function mdc_lento(arr){
  //Recebe uma lista de inteiros e retorna o Máximo divisor comum.
  var arre =[];
  var n = 0;

  // Retorna uma lista de divisores com resto 0 para cada inteiro de arr.
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
var t0 = performance.now();
mdc_lento([330,75,450,225])
var t1 = performance.now();
console.log("A execução de 'mdc_lento' durou " + (t1 - t0) + " milissegundos.")
// 15
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


