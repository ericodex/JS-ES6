// @Ericodigos - Eric Oliveira Lima
// 15/05/2019 
//Editado: 22/05/2019 

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



// Interação com itens de um array:


// .every()

// .forEach()

// .map()


// usando um For para percorrer um array:

function greaterThanTen(arr) { //retorna apenas os itens > que 0
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
  // returns [12, 14, 80]

  // 

  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (i = 0; i < arr.length; i++){
      newArr = [arr.reduce( (a) => a == elem)]; // R E D U C E
    }
    // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); 



const lista = [1,2,3,4,5,6,7,8,9];

const reduzidor = (a,b) => a + b;

console.log(lista.reduce(reduzidor));


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


function filtrarArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].indexOf(elem)==-1){ //Verifica se o elemento existe dentro do array
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filtrarArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Criando Array multidimensionais complexos

let nestedArray = [ // base, 1º profundidade 
  ['deep'], // Um array dentro de um array, 2º profundidade
  [
    ['deeper'], ['deeper'] // 2 arrays com 3º profundidade
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays com 4º profundidade
    ],
    [
      [
        ['deepest-est?'] // um array nested 5º nível de profundidade
      ]
    ]
  ]
];

// (Crtl + Shift + i) Abre o painel javascript de navegador

console.log(nestedArray[2][1][0][0][0]); 
// logs: deepest-est?

let myNestedArray = [
  // change code below this line
  ['unshift',
    [
      true, 'deep',
      ['deeper',
        [
          'deepest', 0
        ]
      ]
    ],
  false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];



// Valores chave em objetos JavaScript
// key-value pairs

let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};

// The above code defines an object called FCC_User that has four properties, 
// each of which map to a specific value. If we wanted to know the number of
// followers FCC_User has, we can access that property by writing:

let userData = FCC_User.followers; // dot notation
// userData equals 572   

let userData = FCC_User['followers']; // bracket notation
// userData equals 572
// Colchetes permitem q variáveis sejam usadas em seu interior dinamicamente


// Adicionando propriedades a um objeto:

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;


console.log(foods);

// Objetos podem ter profundidades como os arrays

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};


// objeto com frutas:
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Retorna o valor do item escaneado no objeto foods usando notação de colchetes. 
function checkInventory(scannedItem) {
  let item = foods[scannedItem];
  return item
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

//## Usar o operador delete para remover uma propriedade de um objeto

// objeto com frutas:
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.apples;

//## Verificar se o objeto tem determinada propriedade com .hasOwnProperty()

users.hasOwnProperty('Alan');
'Alan' in users;

// Verificar se todos determinados itens estão no objeto

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  return users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')
  
}

console.log(isEveryoneHere(users));


// Interagindo com todos os elementos de um objeto
// utilizando o FOR  IN

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let i = 0;
  for (let itens in obj){
    if (obj[itens].online == true){
      i++;
    }
  }
  return i;
}

console.log(countOnline(users));

// Criando uma lista com todos as chaves de um
// objeto.

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) { 
  let a = Object.keys(obj);   // Object keys retorna todos as keys de um array
  return a;

}

// Alterar um array que esta armazenado dentro de um objeto.

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));




