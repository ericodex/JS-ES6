// @ericodigos - Eric Oliveira Lima
// 14 de maio de 2019 - fogo nos racistas

// D E B U G G I N G - Javascript
// - entendimentos -

// Console do navegador, no chrome (ctrl + shift + i)

// Visualizar uma variável no console?
let a = 2
a++;
console.log(a);

// Limpar o registro do console?

console.clear(); 

// Para verificar o tipo de uma variável?

console.log(typeof ""); //Retorna "string" - Texto
console.log(typeof 0); //Retorna "number" - Número
console.log(typeof []); //Retorna "object" - Objeto (Em JS array é obj)
console.log(typeof {}); //Retorna "object" - Objeto

// No ES6 foi adicionado o tipo de dados 'Symbol'

// Cuidado com erros de escrita e síntese, js considera maiúsculo e
// minusculo nas variáveis e funções.

// Parte do debugging no JS é a verificação da abertura e fechamento de 
// {chaves},(parenteses),[colchetes],/barras/,'aspas simples',
// "aspas duplas",`crases` além do ponto-e-virgula;

let minhaLista = [1, 2, 3];
let arraySoma = minhaLista.reduce((Acumulador, Corrente) =>  Acumulador + Corrente);
console.log(`A soma dos valores da lista é: ${arraySoma}`);

//  Regras sobre "aspas", 'aspas-simples' e o \ scape character.

// These are correct:
const gro = "I've had a wonderful evening, but this wasn't it.";
const quing = " Marx once said 'Quote me as saying I was mis-quoted.'";
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";


// Observe a diferença entre igualdade == e atribuição =

// Observe a atribuição de funções que não possuem argumentos a outras
// variáveis

// A ordenação dos argumentos de uma função pode apresentar um erro
// quando os tipos das variáveis forem incompatíveis, mas caso sejam 
// iguais a lógica interna da função será comprometida

function potenciaExponencial(b, e) {
    return Math.pow(b, e); // a alteração da ordem de 'b' e 'e' 
  }                        // corromperá a lógica da função
  
  let base = 2;
  let exp = 3;
  let power = potenciaExponencial(base, exp);
  console.log(power);

// Off by one errors (Tmb chamado de OBOE)
// é um tipo específico de erro acusado quando vc tenta 
// endereçar um determinado índice de uma lista

// Os índices no JS e na maioria das linguagens começam em 0.

let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let len = alfabeto.length;
for (let i = 0; i <= len; i++) { // errado
  // Roda mais vezes q o necessário
  console.log(alphabet[i]);
}
for (let j = 0; j < len; j++) { // errado
  // Roda menos vezes q o necessário 
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) { // correto
  // Roda o necessário.
  console.log(alphabet[k]);
}

function conteAtéCinco() {
    let primeirosCinco = "12345";
    let len = primeirosCinco.length;
    for (let i = 0; i < len; i++) { // correto
      console.log(primeirosCinco[i]);
    }
  }

// Precauções quando reinicializar variáveis dentro de laços

// Uma forma de verificar uma variável dentro de um loop é exibindo-a
// a cada laço com 'console.log(variável)'

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);

  function myFunc() {
    for (let i = 0; i <= 4; i += 2) {  // Cuid
      console.log("Still going!");
    }
  }