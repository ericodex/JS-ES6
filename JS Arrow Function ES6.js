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

console.log(ubuntu === tupi); // true
console.log(typeof baz); // undefined
console.log(more === baz); // false (errado porque baz == undefined)



