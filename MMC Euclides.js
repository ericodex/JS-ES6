// 11/06/2019  - @Ericódigos

/**
    Fundamentos são importantes. Um ótimo exemplo disso é um algorítimo escrito
    a mais de 2300 anos por Euclides e que ainda hoje é absolutamente útil e 
    elegantemente econômico.

    O exercício do FreeCodeCamp 'Intermediate Algorithm Scripting: Smallest Common 
    Multiple' solicitou-me uma função que retorne o Mínimo Múltiplo Comum de um 
    intervalo de inteiros. 

*/

var iter; // Contador de iterações. 
 /*
  * Quase força bruta, a função delimita o maior multiplicador possível como o produto
  * de todos os elementos do array, de forma crescente e incrementando o número de vezes
  * igual ao maior elemento do array. Cada possibilidade é testada em cada elemento do 
  * array retornando o menor múltiplicador comum. */
function mmcArrayIntervalo_ruim(arr){
  //Classificando o array do menor para o maior
  arr.sort( (a,b)=>{return a>b});
  // Criando array 'arre' com intervalo ente o menor e o maior.
  let arre = [];
  for(let i=arr[0];i<=arr[1];i++){
    arre.push(i); 
  }
  // Multiplicando todos elementos do array para definir o teto do loop qse eterno.
  let pior = arre.reduce( (a,b)=>{return a*b});
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
console.log(mmcArrayIntervalo_ruim([23,15])) // 
var t1 = performance.now();
console.log("A execução de 'mmcArrayIntervalo_ruim' durou " + (t1 - t0) + " milissegundos.");
console.log("A execução de 'mmcArrayIntervalo_ruim' teve " + iter+ " iterações.");




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
var inter=0; // Contador de iterações.

/*** @ Ericódigos 
 * A belíssima função abaixo utiliza algumas propriedades da teoria de conjuntos e 
 * da teoria euclidiana das relações entres os múltiplos e divisores comuns.
 * 
 * Perceba que:
 *  1 - Encontrar Máximo Divisor Comum exige pouquíssimas iterações com o método 
 * Euclidiano e ele está totalmente relacionado com o Mínimo Múltiplo Comum de acordo 
 * com tmb com a teoria Euclidiana:
 * 
 *     MMC(a,b) = (a * b/MDC(a,b))  
 */

function mmcIntervaloEuclidiano(arr) {
    
    let min = Math.min.apply(null,arr);
    let max = Math.max.apply(null,arr);
    let v_mmc = mmc(min,min+1);

    while(min < max){
        inter++;
        min++;
        v_mmc = mmc(v_mmc,min);
    }
    return v_mmc;
}

// Calcula o MDC de dois inteiros.
function mdc(a,b){
    while(b>0){
        inter++;
        let t=a;
        a=b;
        b=t%b;
    }
    return a;
}

// Calcula o MMC de dois inteiros com MMC(a,b) = (a * b/MDC(a,b)) 
function mmc(a,b){
    inter++;
    return (a * b /mdc(a,b))
}

var t0 = performance.now();
console.log(mmcIntervaloEuclidiano([23,18]));
var t1 = performance.now();
console.log('A execução de mmcIntervaloEuclidiano durou '+ (t1-t0) + ' milissegundos.');
console.log("A execução de 'mmcIntervaloEuclidiano' teve " + iter+ " iterações.");
/**
 *  Resultado para [23,18]: 6056820
 *  A execução de mmcIntervaloEuclidiano durou 1 milissegundos.
 *  A execução de 'mmcIntervaloEuclidiano' teve 28 iterações.
 */
//       ~~$#$%**~~~~$#$%**~~ Fim do exemplo supremo ~~$#$%**~~~~$#$%**~~ 