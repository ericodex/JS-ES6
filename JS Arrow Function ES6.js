// Estudos JavaScript  
// e ~interpretação livre~   

// -@ericodigos

// ARROW FUNCTIONS

// Arquitetura de uma função

//  var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
//     statements
//  };


// Para referir a função interna corrente, é preciso
// criar uma função nominal (Named Function Expression)
var matemática = {
    'fatore': function factorial(n) { // Função nominal
      console.log(n)
      if (n <= 1) {
        return 1;
      }
      return n * factorial(n - 1);
    }
  };
  
  matemática.fatore(3) //3;2;1;

// ##############################################################

var ubuntu = function() {}
ubuntu.name // "ubuntu" // O nome implícito da expressão da função é o nome do objeto função em si.

var tupi = ubuntu
tupi.name // "ubuntu" // O nome implícito da expressão é herdado por outros objetos.

var more = function baz() {}
more.name // "baz"

const persons = [
  {
    name: null,
    age: 20,
    address: []
  },
  {
    name: "Alex",
    age: 29,
    founders: []
  },
  {
    name: "Mallik",
    age: 10,
    address: []
  },
  {
    name: "Renu",
    age: 50,
    address: []
  },
  {
    age: 25,
    address: []
  }
];

const makeNameUpperCase = name => name.toUpperCase();
const personNames = persons.map(person => person.name);

const personNamesInCaps = personNames
                           .filter(Boolean)
                           .map(makeNameUpperCase);
// [ "ALEX", "MALLIK", "RENU" ]

console.log(personNamesInCaps);

/*****************************************************************************/
/** No JS FUNÇÕES são objetos, e 'THIS' é uma das propriedades de qualquer objeto.  
 *  No terminal vc pode utilizar [console.log(this);] para retornar o objeto da 
 *  janela do navegador.  Dentro de uma função e fora do contexto global ele retornará
 *  o objeto da função no contexto atual.
 * 
 *  'THIS' armazena o contexto atual de execução do programa JS.
 */

function doSomething(a, b) { 
  
  // adds a propone property to the Window object
   this.propone = "test value";  
} 

doSomething(); 
window.propone
// Retorna: "test value"

