/*** @ericodigos - 26/maio/2019 */

/** Programação funcional é um estilo de programação onde as soluções são simples e
 * isoladas funções, sim nenhum efeito fora do escopo.
 
    INPUT -> PROCESS -> OUTPUT
 
    1 - Isolar funções - (Não depender de variáveis globais sujeitas a alterações)
    2 - Funções limpas - (para cada msm input sempre o msm output)
    3 - Funções Herméticas - (a funções só poderão ser alteradas internamente.)

 */

 /** 001 - Chá para a galera */

const preparaChá = () => 'cháVerde';

const pegaChá = (númXícaras) => {
  const xícaras = [];
  
  for(let xícara = 1; xícara <= númXícaras; xícara += 1) {
    const xícaraChá = preparaChá();
    xícaras.push(xícaraChá);
  }

  return xícaras;
};

// Add your code below this line


const tea4TeamFCC = new pegaChá(40); // :(


// Add your code above this line

console.log(tea4TeamFCC);


/**** 002 - FIRST CLASS FUNCTIONS and LAMBDA FUNCTIONS */

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = new getTea(prepareGreenTea,27); // :(
const tea4BlackTeamFCC = new getTea(prepareBlackTea,13);

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//**** 003 - Entendendo os problemas de utilizar um código imperativo */
//
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // we keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function (index) {
    var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
    var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
    return this;
   };
  
  // Let's create three browser windows
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  var finalTabs = socialWindow
                      .tabOpen() // Open a new tab for cat memes
                      .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                      .join(workWindow.tabClose(1).tabOpen());
  
  alert(finalTabs.tabs);


  //###### 27/05/2019 - Hey hey hey -  "Guilhotina nos monarcas!"
  /**** 004 - Boas Práticas - Passar argumentos para evitar dependências externas em
   * uma função.
   */

   /* Um dos princípios da boa programação é sempre declarar explicitamente suas 
   variáveis e objetos necessários a uma função. Significa, se a função precisa da 
   variável ou objeto passe-as como argumentos.  */

    // the global variable
var fixedValue = 4;

function incrementer (n) {
  n = n + 1;
  return n
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4


/**** 005 - Refatoração de variáveis globais fora da função */

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (arr, bookName) {
  let nArr = [...arr];
  nArr.push(bookName);
  return nArr
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (arr, bookName) {
  let nArr = [...arr];

  if (nArr.indexOf(bookName) >= 0) {
    
    nArr.splice(nArr.indexOf(bookName), 1);

    console.log(nArr);
    return nArr
  // Add your code above this line
  }
  
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

//console.log(bookList);
//console.log(newBookList);
//console.log(newerBookList);
//console.log(newestBookList);

/**** 005 - Use método Map para Extrair dados de uma lista */

/** Funções são objetos de primeira classe em JS */
/** Funções podem ser utilizadas como qualquer outro objeto, como em argumentos por
 * exemplo.
 */   // Soco nos nazista 

/** Map é um meio de iterar com todos os objetos de uma lista, Map cria uma nova 
 * lista.
 */

var celcius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
} ); 
 
// ES6
// fahrenheit.map( elem => Math.round( ( elem - 32 ) * 5 / 9 ) );
 
celcius //  [ -18, 0, 7, 10, 24, 27, 37, 49 ]

for(var i=0; i < watchList.length; i++){
    rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
  }


  // the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];


console.log(rating);

rating = watchList.map( (item) => (
    {
        "title":item["Title"],
        "rating":item["imdbRating"]
    }
) );

let rating = watchList.map( (item) => (
            {"title":item["Title"], "rating":item["imdbRating"]}
        ) );


/**** 006 - Implementação de map em um protótipo com callback */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
    for (let ele in s){
      if(!isNaN(s[ele]))
      {
        newArray.push(callback(s[ele]))
      }
    }
    
  // Add your code above this line
  console.log(newArray)
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});


/**** 007 - Método filter para extrair informações de uma lista
 * array.prototype.filter()
 */

 // the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];

// Add your code below this line

var filteredList;

// Add your code above this line

console.log(filteredList); 

// the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];

// Add your code below this line

let filteredList = watchList.map( (ele) => (
    {
        "title":ele['Title'],
        "rating":ele.imdbRating
    
    }) ).filter( (ele) => (
        ele.rating >= 8)
    );

console.log('a');
// Add your code above this line

console.log(filteredList[0]); 

/**** 008 - Implementando o método filtro em um protótipo */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  })
  // Add your code above this line
  return newArray;

};
var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

/**** 009 - Retornar parte de um array com Slice */

// Exemplo de slice: 
// 1º - Retorna um novo array.
// 2º - Recorta o array de um índice específico até um determinado elemento subsequente. 
// 3º - O elemento subsequente não é obrigatório. Caso excluído o slice retornará até o 
// final do array.
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]

function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
  
      return anim.slice(beginSlice, endSlice);
    
    // Add your code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);

  /**** 010 - Remove elementos de uma lista usando slice ao invés de splice*/

  function nonMutatingSplice(cities) {
    // Add your code below this line
    let arr = cities.slice(0,3);
    console.log(arr)
    return arr;
    
    // Add your code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);

  /**** 010 - Método concat */
  // Concatenação significa juntar 'fim a fim' ou 'tipo com tipo'.

  // Exemplo de concat:
  [1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]

function nonMutatingConcat(original, attach) {
    // Add your code below this line
    
    return original.concat(attach);
    
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second);

  /*** 011 - Adicionando elementos no fim de uma lista usando concat ao invés de push
   * 
   */

  function nonMutatingPush(original, newItem) {
    // Add your code below this line
  
    
    return original.concat(newItem);
    
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);

/*** 012 - Utilizando o método reduce para verificar dados */

/**  REDUCE - é o método mais generalista para tratar listas de dados.
 * Reduce pode solucionar quase qualquer problema em listas de dados.
 */

var averageRating = watchList.filter(
        x => x.Director === "Christopher Nolan"
        ).map(
            x => Number(x.imdbRating
                )).reduce(
                    (x1, x2) => x1 + x2) / watchList.filter(
                        x => x.Director === "Christopher Nolan").length;


/**** 013 - Classificando uma lista em ordem alfabética */

function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  ascendingOrder([1, 5, 2, 3, 4]);
  // Returns [1, 2, 3, 4, 5]
  
  function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a < b;
    });
  }
  reverseAlpha(['l', 'h', 'z', 'b', 's']);
  // Returns ['z', 's', 'l', 'h', 'b']

  //=====================================================D

  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  })
  console.log(arre);
  // Add your code above this line
}
nonMutatingSort(globalArray);

/**** 014 - Separar um string em um array com o método Split */

var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

/**** 015 - Utilizar o método split com RegExp*/

function splitify(str) {
    // Add your code below this line
    let re = /\W/
    return str.split(re)
    
    // Add your code above this line
  }
  splitify("Hello World,I-am code");

/**** 016 - Use o método Join para combinar um array em uma string */

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"

function sentensify(str) {
    // Add your code below this line
    return str.split(/\W/).join(' ');
    
    // Add your code above this line
  }
  sentensify("May-the-force-be-with-you");

  /**** 016 - Aplicando programação funcional - convertendo string para url */

  // the global variable
var globalTitle = " Winter Is  Coming";

// Add your code below this line
function urlSlug(title) {
  return title.split(/\s+/).filter(
    (a) =>{
      return a !== '';
    }
  ).join('-').toLowerCase();
} 
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

/*** 017 - Usar o método 'every' para verificar se todo elemento da lista 
 * encaixa em um determinado critério. O método '.every()' tem retorno booleano.
  */

//Exemplo:

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false


function checkPositive(arr) {
    // Add your code below this line
    
    return arr.every( (v) => {
        return v > 0;
    } )
    
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);

  /**** 018 - Use o método .some() para verificar se cada elemento da lista 
   * confere um determinado critério. O método '.some()' tem retorno booleano.
   */

   //Exemplo: 

    var numbers = [10, 50, 8, 220, 110, 11];
    numbers.some(function(currentValue) {
        return currentValue < 10;
    });
    // Returns true

    function checkPositive(arr) {
        // Add your code below this line
        return arr.some( (v)=>{
          return v > 0;
        })
        
        // Add your code above this line
      }
      checkPositive([1, 2, 3, -4, 5]);

/**** 019 - 'Curring' e 'Partial Application' */

/*** Na matemática a aridade de uma função ou operação é o número de argumentos 
 * ou operandos tomados. A aridade de uma relação é o número n de elementos que
 *  compõem as n-uplas ordenadas pertencentes à relação. */

 /*** A aridade de uma função é a quantidade de argumentos que ela pode tomar. */

 /**** Curring significa converter N aridade de uma função para N funções de aridade 1.*/

 // Exemplo:

 //Un-curried function
    function unCurried(x, y) {
    return x + y;
  }
  
  //Curried function
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  curried(1)(2) // Returns 3

  // Call a curried function in parts:
    var funcForY = curried(1);
    console.log(funcForY(2)); // Prints 3

  //Impartial function
    function impartial(x, y, z) {
        return x + y + z;
    }
    var partialFn = impartial.bind(this, 1, 2);
    partialFn(10); // Returns 13

  function add(x) {
    // Add your code below this line
    return (y) => {
      return (z) => {
        return z + y + x;
    }}
    
    // Add your code above this line
  }
  add(10)(20)(30);

 