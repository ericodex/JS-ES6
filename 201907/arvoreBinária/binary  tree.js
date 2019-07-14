/** 2019/07/14 - eric oliveira lima - 
// dev.to @ericodex 
// twitter @ericodigos  
*/
/*jshint esversion: 6 */
/** 
 *  “You must understand, young Hobbit, it takes a long time to say anything in Old Entish.
 *  And we never say anything unless it is worth taking a long time to say.”
 *  - Treebeard - J.R.R TOLKIEN, The Two Towers  */


/** Árvore binária de dados é uma estrutura de dados, que utiliza construtores de objetos, para 
 * organizar uma estrutura que possibilita a classificação ordenada de dados utilizando métodos 
 * dentro dos objetos.
 * 
 * A árvore binária de dados utiliza uma construção de objeto que organiza dados de maneira estruturada.
 * A estrutura da árvore é composta por apenas um construtor de objeto que obedece apenas uma regra
 * determinada pelo seu método. Aqui esse objeto será chamado de Nó, e a regra será: 'se meu valor for
 * menor vou para esquerda, se for maior vou para direita.' A Árvore como repositório dos objetos Nó
 * será o outro objeto. Totalizando dois objetos para essa estrutura. Nesse exemplo utilizarei 
 * uma lista de números. Para ordenação. 
 * 
 *    [Nó]  O nó binário é composto por um valor e dois caminho/galhos/direções/vetores
 *      X
 *     / \
 * 
 *             [Árvore] A árvore é composta por uma estrutura de Nós preenchidas por uma lista de números

 *                 n
 *                / \
 *               /   \
 *              /     \
 *             n       n
 *            / \     / \
 *           n   n   n   n
 *          /   / \     / \
 *         n   n   n   n   n
 *                /
 *               n
 */

 // Arvores binárias possuem dois objetos, Nó e Arvore

//         -------------->->  OBJETO NÓ  <-<----------------

// Construtor do Objeto Nó
function Nó(val){
    this.valor = val;
    this.esquerda = null;
    this.direita = null;
}

// Adicionar Nó
Nó.prototype.adicionarNó = function(n) {

    if (n.valor < this.valor){
        if(this.esquerda == null){
            this.esquerda = n;
        } else {
            this.adicionarNó(n);
        } 
    } else if ( n.valor > this.valor) {
        this.direita = n;
    } else {
        this.direita.adicionarNó(n);
    }
};

// Visitar um Nó
Nó.prototype.visita = function(){
    // Recursivamente vai para esquerda
    if (this.esquerda != null){
        this.esquerda.visita();
    }
    
    // Mostra o valor
    console.log(this.valor);
    
    // Recursivamente vai para direita
    if (this.direita != null){
        this.direita.visita();
    }
};

// [MÉTODO] Procura um número na árvore
Nó.prototype.buscarValor = function(n){
    if (this.valor == n){
        return this;
    } else if (this.valor < n && this.esquerda != null){
        return this.esquerda.buscarValor(n);
    } else if (this.valor > n && this.direita != null) {
        return this.direita.buscarValor(n);
    }
    return null;
};


//         -------------->->  OBJETO ÁRVORE  <-<----------------

// [CONSTRUTOR] do Objeto Árvore
function Árvore(){
    this.base = null;
}

// [MÉTODO] Caminho da classificação em ordem crescente.
Árvore.prototype.caminho = function(){
    this.base.visita(); // Método do Nó
};

// [MÉTODO] Buscar na base da árvore
Árvore.prototype.buscarValor = function(val){
    var encontrado = this.base.buscarValor(val);
    return encontrado;
};

// [MÉTODO] Adicionar nó na arvore
Árvore.prototype.adicionarValor = function(val){
    var n = new Nó(val);
    if (this.base == null){
        this.base = n;
    } else {
        this.base.adicionarNó(n);
    }
};

// ______________________________________________________________________

/** barbárvore será um objeto que herdará as propriedades e os métodos do objeto Árvore.
 * */
var barbárvore;

barbárvore = new Árvore();

for(let i = 0; i == 30; i++){
    console.log(i);
    barbárvore.adicionarValor(floor(random(0,100)));
}

barbárvore.caminho();

console.log(barbárvore);