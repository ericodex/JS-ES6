//@ericódicos - 06/06/2019

function mdc(arr){
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

mdc([330,75,450,225])
// 15