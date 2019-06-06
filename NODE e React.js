/** @ericodigos 01/06/2019
 * 
 *  https://willianjusten.com.br/fundamentos-javascript-antes-de-aprender-react/ */


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;


/** Exemplo construtor de classe com métodos e herança. */
class Developer {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }  
    getName() {
      return `${this.firstname} ${this.lastname}`;
    }
  }
const me = new Developer('Eric', 'Códigos');
console.log(me.getName()); // "Eric Códigos"

/** Exemplo de herança de classe com extends */
class Developer { //Construtor de classe.
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    getName() {// Método de retorno
      return `${this.firstname} ${this.lastname}`;
    }
  }
  class ReactDeveloper extends Developer { //Extensão de construtor.
    getJob() {
      return 'React Developer';
    }
  }
var me = new ReactDeveloper('Robin do One Piece', 'Wieruch');

console.log(me.getName());
console.log(me.getJob());

//_____________________________________________________________________
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Olá React.</h1>
      </div>
    );
  }
}

export default App;


//Dialog that represent generic “boxes”. 
//  https://reactjs.org/docs/composition-vs-inheritance.html
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }



  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }


  /// -- Arrow Functions
  // Função em ES5
function getGreeting() {
    return 'Welcome to JavaScript';
  }
  
  // Função em ES6 com {} e por isso o return obrigatório
  const getGreeting = () => {
    return 'Welcome to JavaScript';
  }
  
  // Função em ES6 sem {} e return implícito
  const getGreeting = () =>
    'Welcome to JavaScript';

// -- Funções como componentes no React
    // Função normal
function Greeting(props) {
    return <h1>{props.greeting}</h1>;
  }
  
  // Arrow Function com {} e return
  const Greeting = (props) => {
    return <h1>{props.greeting}</h1>;
  }
  
  // Arrow Function sem {} e return implícito
  const Greeting = (props) =>
    <h1>{props.greeting}</h1>

// -- Sintaxe do React Class Component


// Contador 
class Counter extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        counter: 0,
      };
  
      this.onIncrement = this.onIncrement.bind(this);
      this.onDecrement = this.onDecrement.bind(this);
    }
  
    onIncrement() {
      this.setState(state => ({ counter: state.counter + 1 }));
    }
  
    onDecrement() {
      this.setState(state => ({ counter: state.counter - 1 }));
    }
  
    render() {
      return (
        <div>
          <p>{this.state.counter}</p>
  
          <button onClick={this.onIncrement} type="button">Increment</button>
          <button onClick={this.onDecrement} type="button">Decrement</button>
        </div>
      );
    }
  }

  /**  Eles facilitam bastante para retornar items da forma desejada (map),
   *  filtrar informações baseadas em algum parâmetro desejado (filter) 
   * ou até mesmo realizar operações em cima de um conjunto de valores para
   *  retornar somente um já trabalhado (reduce). */

// Map, Reduce e Filter no React
import React, { Component } from 'react';

class App extends Component {
  render() {
    var users = [
      { name: 'Robin do One Piece' },
      { name: 'Markus' },
    ];

    return (
      <ul>
        {users.map(function (user) {
          return <li>{user.name}</li>;
        })}
      </ul>
    );
  }
}

export default App;

// Com arrow function 

import React, { Component } from 'react';

class App extends Component {
  render() {
    var users = [
      { name: 'Robin do One Piece' },
      { name: 'Markus' },
    ];

    return (
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    );
  }
}

export default App;


import React, { Component } from 'react';

class App extends Component {
  render() {
    var users = [
      { name: 'Robin do One Piece', isDeveloper: true },
      { name: 'Markus', isDeveloper: false },
    ];

    return (
      <ul>
        {users
          .filter(user => user.isDeveloper)
          .map(user => <li>{user.name}</li>)
        }
      </ul>
    );
  }
}

export default App;


// If - else com react jxs

import React, { Component } from 'react';

class App extends Component {
  render() {
    var users = [
      { name: 'Robin do One Piece', isDeveloper: true },
      { name: 'Markus', isDeveloper: false },
    ];

    return (
      <ul>
        {users
          .filter(user => user.isDeveloper)
          .map(user => <li>{user.name}</li>)
        }
      </ul>
    );
  }
}

export default App;

/// else com o operador ternário
import React, { Component } from 'react';

class App extends Component {
  render() {
    var users = [
      { name: 'Robin do One Piece', isDeveloper: true },
      { name: 'Markus', isDeveloper: false },
    ];

    return (
      <ul>
        {users
          .filter(user => user.isDeveloper)
          .map(user => <li>{user.name}</li>)
        }
      </ul>
    );
  }
}

export default App;

/**named exports: que são utilizados para exportar
 *  diversos métodos/valores de dentro de um mesmo arquivo. */
const firstname = 'Robin do One Piece';
const lastname = 'Wieruch';

export { firstname, lastname };
//-- Formas de importar

// Importando diretamente valor a valor, para isso é necessário o uso de chaves
import { firstname, lastname } from './file1.js';
console.log(firstname); // "Robin do One Piece"

// Importando todos os valores e atribuindo a um objeto
import * as person from './file1.js';
console.log(person.firstname); // "Robin do One Piece"

// Importando somente um valor, mas atribuindo um alias para o valor
import { firstname as username } from './file1.js';
console.log(username); // "Robin do One Piece"

//default export ------------=-=-================
const eric = {
    firstname: 'Oliveira',
    lastname: 'Lima',
  };
  
  export default eric;



// High Order Components - (HOC)
// High Order Functions 0 (HOF)

const collection = ['Eric', 'Phany', 'Anne'];

// Usando Função ES5
collection.map(function (person) {
   return `${person} programeiro(a)`; 
   // Output: ["Eric Developer", "Phany Developer", "Anne Developer"]
})

// Usando Arrow Function com {} e return
collection.map(person => {
  return `${person} programeiro(a)`;
  // Output: ["Eric Developer", "Phany Developer", "Anne Developer"]
})

// Usando Arrow Function e return implícito
collection.map(person => `${person} programeiro(a)`);
// Output: ["Eric Developer", "Phany Developer", "Anne Developer"]


//- Eloquente JavaScript

//http://braziljs.github.io/eloquente-javascript/chapters/funcoes-de-ordem-superior/



/** Funções de Ordem Superior
Tzu-li e Tzu-ssu estavam se gabando do tamanho dos seus últimos programas.
‘Duzentas mil linhas sem contar os comentários!’, disse Tzu-li. Tzu-ssu respondeu:
'Pssh, o meu já tem quase um milhão de linhas’. Mestre Yuan-Ma disse: ‘Meu melhor
programa tem quinhentas linhas’. Ouvindo isso, Tzu-li e Tzu-ssu 
ficaram esclarecidos.”

— Master Yuan-Ma, The Book of Programming

Existem duas maneiras de construir o design de um software: uma maneira é deixá-lo
tão simples de tal forma em que obviamente não há deficiências, e a outra é torná-lo
tão complicado que não haverá deficiências óbvias.”

— C.A.R. Hoare, 1980 ACM Turing Award Lecture

Um programa grande é um programa custoso, e não necessariamente devido ao tempo
que leva para construir. Tamanho quase sempre envolve uma complexidade e complexidade
confunde os programadores. Programadores confusos tendem a criar erros (bugs) 
no programa. Um programa grande tem a possibilidade de esconder bugs que são
difíceis de serem encontrados. */

var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);



/** Um exemplo,  um HOC que deixa tudo que é passado em maiúsculo. */
const yell = (PassedComponent) =>
  ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.toUpperCase()}!
    </PassedComponent>
/** children será o conteúdo passado dentro de um componente */
// Children e props são detalhes do react


const Title = (props) => <h1>{props.children}</h1>
const AngryTitle = yell(Title) 
//yell que recebe um componente e utiliza o mesmo para encapsular o conteúdo

<AngryTitle>Whatever</AngryTitle>
// Output: <h1>WHATEVER!</h1>


export const doIncrement = state =>
  ({ counter: state.counter + 1 });

export const doDecrement = state =>
  ({ counter: state.counter - 1 });

class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(doIncrement);
  }

  onDecrement = () => {
    this.setState(doDecrement);
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}


// sem destructuring
const users = this.state.users;
const counter = this.state.counter;

// com destructuring
const { users, counter } = this.state;

// sem destructuring
function Greeting(props) {
    return <h1>{props.greeting}</h1>;
  }
  
  // com destructuring
  function Greeting({ greeting }) {
    return <h1>{greeting}</h1>;
  }


