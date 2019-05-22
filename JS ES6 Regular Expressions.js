// @ericodigos - 13/05/2019
// EXPRESSÕES REGULARES (Regular Expressions) - Javascript ES6
// Regex - REGEX 

// São padrões utilizados para verificar um 
// conjunto de caracteres em uma string.

// Conjunto de caracteres = String = linha = CDC

// Para procurar a palavra "bonita" em no CDC
// "A matemática é bonita", vc determina o regex
// usando a barra (/) para envelopar a palavra, ex:

let meuRegex = /bonita/

// /bonita/ foi armazenado em um objeto regex
// Perceba que não se utiliza aspas (quote)"


// Um dos meios de testar o regex é usando
// o método de regex .test(string) que tem um retorno 
// booleano, verdadeiro se encontrar correspondente na
// string e falso caso contrario.
 

let strTeste = "A matemática é bonita"; 
let meuRegex = /bonita/; // Deixa o regex
let resultado = meuRegex.test(strTeste); // Retorna Verdadeiro

// O regex tmb suporta operadores lógicos do javaScript como 'ou(or)' | 
// e 'e(and)' &&.

let minhaCDC = "Temos racismo e fascismo";
let alvosRegex = /fascismo|tortura|encarceramento|racismo/; 
let resultado = alvosRegex.test(minhaCDC); // Retorna verdadeiro

// O método .match() é utilizado para extrair o conteúdo compatível
// com o regex de uma determinado conj. de caractere.

// .match() é um método da string, não do regex como o .test()


// No regex do javascript há vários sinalizadores que podem ser 
// usados no lado direito da / que envelopa o regex. Cada sinalizador
// indica um comportamento no regex.

// O /i é um sinalizador utilizado para considerar tanto 
// maiúsculas quanto minúsculas

let extractCDC = "Extraia a palavra Código dessa linha. Outro código";
let códigoRegex = /código/i; 
let result = extractCDC.match(códigoRegex); 
// retorna: ["Código"] e outras informações em lista.

// O /g é um sinalizador que informa que o regex deverá ser buscado
// repetidamente, caso o /g não seja explicitado a busca se interromperá
// após o primeiro retorno.

let extractCDC = "Arvore que derruba folhas, Folhas e FOLHAS no chão.";
let folhasRegex = /folhas/gi; // Recorrência e maiúsculas e minusculas
let result = extractCDC.match(folhasRegex); 
// retorna:  ["folhas", "Folhas", "FOLHAS"]

// O caractere mutante ou coringa (wildcard) dentro de regex é o
// '.' ponto.

// O código abaixo retorna positivo para "run", "sun",
// "fun", "pun", "nun", and "bun"
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// Utilize o [] para procurar por um conjunto especifico de 
// tetras junto com uma expressão literal

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 

// O operador hífen '-' representa o alfabeto ou um trecho dele
// na buscar /[a-d]late/ ele procurará por 'alate', 'blate', 
// 'clate' e 'dlate'

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex);

// [-] tmb poderá ser utilizador em conjunto com números cardinais

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-t2-6]/ig;
let result = quoteSample.match(myRegex);

// Para lidar com regex existem tmb os caracteres de negação
// ou o ^ por exemplo o regex /[^aeiou]/ retornara verdadeiro 
// caso não encontre essas vogais em uma string, esse é o
//  uso dentro de []

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/ig; 
let result = quoteSample.match(myRegex);

// O operador '+' apos um conjunto de caractere irá retornar 
// positivo caso 
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
// retorna ["ss","ss"]

// O operador '*' busca o caractere se ele repete uma ou mais 
// vezes
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

// 'lazy' e 'greedy' são expressões de regex que significam
// a menor compatibilidade de regex para lazy e a maior 
// possibilidade de compatibilidade para greedy.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; // Change this line
let result = text.match(myRegex);

// Regex para corresponder com um padrão de início o (carret),
// circunflexo é utilizado para negação dentro de chaves /[^a]/
// fora das chaves ele será utilizado para buscar no e somente no
// inicio de uma string.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

// Para o regex corresponder a uma expressão que esteja no final
// utilize o operador $ 

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

//  [a-z] todas as letras do alfabeto.

// '\w' barra ao contrário e 'w' corresponde a [A-Za-z0-9_]
// que corresponderá a todas a letras e números do alfabeto.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// '\W' barra ao contrário e 'W' maiúsculo corresponderá a tudo
// que não for alfanumérico.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// '\d' corresponderá a todos os números

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/gi; // Change this line
let result = numString.match(numRegex).length;

// '\D' corresponderá a todos os não números.

// '\s' para espaços 

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s+/g; // Change this line
let result = sample.match(countWhiteSpace);

// '\S' para não espaços 

// As chaves {} são para especificar quantas repetições seu 
// regex procura

//  /Oh{3,6}\sno/i; corresponderá a 'Oh' com o h que repete de 
// 3 a 5 vezes

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);

// As chaves podem ser deixadas em branco para indicar o não 
// maximo ou mínimo

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}/; // Change this line
let result = haRegex.test(haStr);

// {} para especificar um número exato de letras

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

// '?' sendo utilizado antes de um caractere indica que 
// ele é opcional na busca

// lookaheads são padrões de busca, positivos e negativos.
//  (?=...) positivo  ... é o que se busca
//  (?!...) negativo


let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

// A more practical use of lookaheads is to check two or more
//  patterns in one string. Here is a (naively) simple password
//   checker that looks for between 3 and 6 characters and
//    at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

// Para padrões de busca que se repetem muitas vezes,
let repeatStr = "regex regex"; // por exemplo

// '( )'

// para encontrar esse padão vc irá utilizar o 'capture groups' 
// com parenteses (  ), eles são utilzados para encontrar 
// uma subcadeia de caracteres dentro de uma cadeia de caracteres.
// O padrão regex ficará dentro dos parenteses e um barra invertida
// indicará quantas vezes o padrão se repetirá

// '\'

// O regex abaixo ativará tudo que forma conjunto alfanumérico
// separado por um espaço repetido uma vez ex: 
// ("oba oba", "piu piu", "tico tico")

let repeatRegex = /(\w+)\s\1/;

// O regex abaixo retorna números repetidos 3x

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

// Além dos métodos de string .match() há também o método 
// .replace(meuRegex,textoSubstituto)

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

// Você também pode acessar e fazer referência ao que 
// foi correspondido pelo regex com o $ e um índice 

// O código abaixo troca duas palavras de lugar.
"Doido Demais".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Demais Doido"

// para remover espaços no início e no final da linha
// equivalente ao método .trim() use o regex /^\s+|\s+$/g

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ''); 


// Explicação: Como um reator RBMK explode. 
