/** @ericodigos - 24/05/2019 - */

/**** 001 - Crie um objeto básico. *///_________________________________________________
/** let deixa o objeto existir apenas dentro dessa instância  */
let cachorro = 
    {
        name:'eric',
        numLegs:2
    };

/**** 002 - Use a notação de ponto para acessar uma  //_________________________________
    * propriedade de um objeto. */ 

console.log(cachorro.name);
console.log(cachorro.numLegs);

/*** 003 - Crie um método em um objeto */ //____________________________________________
/**  Métodos são propriedades dentro de objetos q funcionam como funções.
 */
let duck = 
    {
        name: "Tietê",
        numLegs: 2,
        // sayName é o método do objeto duck.
        sayName: function() 
            {
                return "O nome do rio é " + duck.name + ".";
            }
    };

duck.sayName(); // Returns "O nome do rio é Tietê ."

/**** 004 - THIS -  */ //_______________________________________________________________

let dog = { // 'this' utiliza o contexto atual da chamada da função.
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
dog.sayLegs();

/** 005 - Definir um construtor */ //___________________________________________________
 /** Construtores são funções que criam novos objetos. Definindo propriedades e 
  * comportamentos. 
  */
// Exemplo de construtor:

function Pássaro() {
    this.nome = "Pardal";
    this.cor = "Negro";
    this.nPernas = 2;
}

// 006 - Usar um construtor para criar um objeto //_____________________________________

//Exemplo: 
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
    // "this" dentro do construtor sempre se referirá ao objeto q é construído.
  }
  
let blueBird = new Bird(); // Note operador 'new'

blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2

blueBird.name = 'Elvira';
blueBird.name; // => Elvira

// 007 -  Estendendo o construtor com argumentos recebidos // __________________________
/* Exemplo de um construtor que recebe argumentos para construção de um objeto */
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let cardinal = new Bird("Bruce", "red");

cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2

function Dog(name, color);
    {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }
    
let terrier = new Dog('Marcos', 'Marron');

/** 008 - Verificar um objeto construtor com '.instanceof' *///_________________________
/** Ｌｏｏｋ　ａｔ　ｔｈｅ　ｓｔａｒｓ． */
/** instanceof compara um objeto com um construtor e retorna verdadeiro ou falso */

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
let crow = new Bird("Alexis", "black");
  
crow instanceof Bird; // => true   // Verificador 

/** 009 - Entendendo a propriedade 'Own'  */ //_________________________________________
/** */

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  // 'name' e 'numLegs' são Own properties 

  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");

  /* As instâncias 'duck' and 'canary' do construtor Bird também possuem 
  /* suas próprias cópias da Own property */

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {   // hasOwnProperty
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

/**** 010 - Utilizar as propriedades de protótipo para reduzir código duplicado */ // __
/** Um propriedade protótipo é uma propriedade q é compartilhada entre 
 **  todas as instâncias */

Bird.prototype.numLegs = 2; /** Dessa forma todas as instâncias de Bird 
    compartilharão essa propriedade.*/

/**** 011 - Iteração através de todas propriedades */ //________________________________
function Bird(name) {
    this.name = name; //own property
  }
  
Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

/** O código abaixo lista todas as Own propriedades de um objeto
 *  e as propriedades protótipo.*/
let ownProps = [];
let prototypeProps = [];
for (let property in duck) {
  if(duck.hasOwnProperty(property)) 
  {
    ownProps.push(property);
  } else 
  {
    prototypeProps.push(property);
  }
}
console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]


/**** 012 - Entendendo melhor o conceito da propriedade: '.construtor'   */ //__________
/** */
/** O .constructor permite verificar se uma instância de objeto é do 
 * mesmo tipo de um construtor. 
 * _- Visto que a propriedade do construtor pode ser sobrescrita, é preferível
 * utilizar o .instanceof
 */

/**________________________________________________________________________ */
function Canino(nome) //Definindo objeto
{
  this.nome = nome;
  this.númPatas = 4;
}

function Pássaro(nome) //Definindo objeto
{
  this.nome = nome;
  this.númPés = 2;
}

let arara = new Pássaro(); // Instanciando novo objeto.
let beagle = new Canino();

function éMembroDaUniPássaros(candidato) 
{
  if (candidato.constructor === Pássaro) { //Verifica se é do mesmo tipo
    return true;
  } else {
    return false;
  }
}

console.log(éMembroDaUniPássaros(arara));

console.log(éMembroDaUniPássaros(beagle));

/** 013 - Alterando o protótipo para um novo objeto //__________________________________
  * 
  * _- As propriedades protótipo podem ser adicionadas todas de uma vez.
  */
Pássaro.prototype = {
  numPatas: 2, 
  comer: function() {
    console.log("nom nom nom");
  },
  descrição: function() {
    console.log("Sou chamado de " + this.nome);
  }
};


/** 014 - Definir a propriedade 'constructor:'*/ //_____________________________________
Pássaro.prototype = 
{
    constructor: Pássaro, // Define a propriedade do constructor
    numPatas: 2,
    eat: function() 
        {
            console.log("nom nom nom");
        },
    describe: function() 
        {
            console.log("Sou chamado de " + this.nome); 
        }   
};

/**** 015 - Entendendo de onde o '.prototype' é herdado //_________________________________
 * 
 */
function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald");
Bird.prototype.isPrototypeOf(duck); //isPrototypeOf
// returns true

/**** 016 - Entendendo a cadeia de Prototype //_________________________________________
 * Todos objetos em JS tem prototypes salvo poucas exceções. 
 */
function Bird(name) {
    this.name = name;
  }
  typeof Bird.prototype; // => object

/** Um prototype of Bird.prototype é o Object.prototype */

Object.prototype.isPrototypeOf(Bird.prototype);
// returns true

// '.hasOwnProperty'
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // => true

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

Object.prototype.isPrototypeOf(Dog.prototype);

/**** 017 - Utilizando heranças para não se repetir. //_________________________________
 * 
 * (D R Y) - Don't repeat yourself
 * 
 */
    // Exemplo ruim:
    Bird.prototype = { // Código repetido__________________@
      constructor: Bird,
      describe: function() {
        console.log("My name is " + this.name);
      }
    };
    
    Dog.prototype = {
      constructor: Dog,
      describe: function() {
        console.log("My name is " + this.name);
      }
    }; // __________________________________________________@

    //___Exemplo bom
  function Animal() { };

  Animal.prototype = {
    constructor: Animal, 
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  
  Bird.prototype = {
    constructor: Bird
  };
  
  Dog.prototype = {
    constructor: Dog
  };//_______________________________________________________@




/**** 018 - Comportamento de herança Supertype */ // inheritance _______________________

/** No nº17 foi exemplificado um Supertype chamado Animal, que compartilha
 * propriedades com outros animais.  - inheritance -
*/

function Animal() { }

Animal.prototype = 
  {
    constructor: Animal, 
    eat: function() 
    {
      console.log("nom nom nom");

    }
  };


let duck = new Animal;  // Utilize o 'new'
let beagle = new Animal; 

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 

/**** 019 - Herança como filho */ // inheritance _______________________________________


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);  // Child - herança


let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

/**** 020 - Redefinir a herança do objeto do construtor da propriedade. ________________
 *  In previous lessons, you learned that an object can inherit its behavior 
 * (methods) from another object by cloning its prototype object:
 * Quando um objeto herda seu prototype de outro objeto, ele também herda o 
 * supertype que é uma propriedade de construtor.
*/
//Exemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype); // Define prototype
let duck = new Bird();
duck.constructor // function Animal(){...}

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;  // Redefine o prototype constructor 
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

/**** 021 - Adicionando métodos depois da herança */
// Exemplo: Bird herda prototypes de Animals

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype) // Adiciona o protótipo de Animal a Dob

Dog.prototype.bark = function () { // Adiciona o prototype bark em Dog
    console.log('Woof');
}
Dog.prototype.constructor = Dog;

// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

/**** 022 - Reescrevendo métodos de herança */
// Exemplo: Bird herda prototypes de Animals


ChildObject.prototype = Object.create(ParentObject.prototype);

ChildObject.prototype.methodName = function() {...};

// Here's an example of Bird overriding the eat() method inherited from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird."
}
// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

/**** 023 - Utilizando Mixin para adicionar comportamentos comuns a 
 * objetos não relacionados.
 */
// Exemplo:
let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
  flyMixin(bird);
  flyMixin(plane);

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"


/**** 024 - Propriedades privadas  */

function Bird() {
    let hatchedEgg = 10; // private property
  
    this.getHatchedEggCount = function() { // publicly available method 
      return hatchedEgg;                   // that a bird object can use
    };
  }
  let ducky = new Bird();
  ducky.getHatchedEggCount(); // returns 10

  /**** IIFE - INVOKED FUNCTION EXPRESSION 
   * Anonymous expression 
  */

  (function () {
    console.log("Chirp, chirp!");
  })(); // this is an anonymous function expression that executes right away
        // Outputs "Chirp, chirp!" immediately

/**** 025 - Usando o IIFE para criar um módulo */

/* O código abaixo estará dentro da função anônima abaixo:
function glideMixin(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
  }
  function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
  }
*/

// Um IIFE q retorna um objeto: 
let motionModule = (function () {
    return {
      glideMixin: function (obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  }) (); // The two parentheses cause the function to be immediately invoked

motionModule.glideMixin(duck);
duck.glide();

let funModule = (function () {
      return {
            isCuteMixin: function (obj){
                    obj.isCute = function(){
                            return true;
                        };
                },
        
            singMixin: function(obj) {
                    obj.sing = function() {
                        console.log("Singing to an awesome tune");
                    };
                }
        }
    }
  ) ();

