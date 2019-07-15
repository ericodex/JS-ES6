/** 2019/07/14 - eric oliveira lima - 
// dev.to @ericodex 
// twitter @ericodigos  
*/
/*jshint esversion: 6 */
/** 
 *  “You must understand, young Hobbit, it takes a long time to say anything in Old Entish.
 *  And we never say anything unless it is worth taking a long time to say.”
 *  - Treebeard - J.R.R TOLKIEN, The Two Towers  */


/** Arvore binária de dados é uma estrutura de dados, que utiliza construtores de objetos, para 
 * organizar uma estrutura que possibilita a classificação ordenada de dados utilizando métodos 
 * dentro dos objetos.
 * 
 * A Arvore binária de dados utiliza uma construção de objeto que organiza dados de maneira estruturada.
 * A estrutura da Arvore é composta por apenas um construtor de objeto que obedece apenas uma regra
 * determinada pelo seu método. Aqui esse objeto será chamado de No, e a regra será: 'se meu value for
 * menor vou para esquerda, se for maior vou para direita.' A Arvore como repositório dos objetos No
 * será o outro objeto. Totalizando dois objetos para essa estrutura. Nesse exemplo utilizarei 
 * uma lista de números. Para ordenação. 
 * 
 *    [No]  O No binário é composto por um value e dois caminho/galhos/direções/vetores
 *      X
 *     / \
 * 
 *             [Arvore] A Arvore é composta por uma estrutura de Nos preenchidas por uma lista de números

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

 // Arvores binárias possuem dois objetos, No e Arvore

//         -------------->->  OBJETO No  <-<----------------

// Construtor do Objeto No
function No(val){
    this.value = val;
    this.esquerda = null;
    this.direita = null;
}

// [MÉTODO] Procura um número na Arvore
No.prototype.buscarvalue = function(n){
    if (this.value == n){
        return this;
    } else if (n < this.value && this.esquerda != null) {
        return this.esquerda.buscarvalue(n);
    } else if (n > this.value && this.direita != null) {
        return this.direita.buscarvalue(n);
    }
    return null;
};

// Visitar um No
No.prototype.visit = function(){
    // Recursivamente vai para esquerda
    if (this.esquerda != null){
        this.esquerda.visit();
    }
    
    // Mostra o value
    console.log(this.value);
    
    // Recursivamente vai para direita
    if (this.direita != null){
        this.direita.visit();
    }
};

// Adicionar No
No.prototype.adicionarNo = function(n) {
    if (n.value < this.value) {
        if (this.esquerda == null){
            this.esquerda = n;
        } else {
            this.esquerda.adicionarNo(n);
        } 
    } else if ( n.value > this.value) {
        if (this.direita == null){
            this.direita = n;
        } else {
            this.direita.adicionarNo(n);
        }
    }
};

//         -------------->->  OBJETO Arvore  <-<----------------
// [CONSTRUTOR] do Objeto Arvore
function Arvore() {
    this.root = null;
}

// [MÉTODO] Caminho da classificação em ordem crescente.
Arvore.prototype.caminho = function(){
    this.root.visit(); // Método do No
};

// [MÉTODO] Buscar na base da Arvore
Arvore.prototype.buscarvalue = function(val){
    var encontrado = this.root.buscarvalue(val);
    return encontrado;
};

// [MÉTODO] Adicionar No na arvore
Arvore.prototype.adicionarvalue = function(val){
    var n = new No(val);
    if (this.root == null){
        this.root = n;
    } else {
        this.root.adicionarNo(n);
    }
};

// ______________________________________________________________________

/** barbarvore será um objeto que herdará as propriedades e os métodos do objeto Arvore.
 * */
var barbarvore;
  
// New tree
barbarvore = new Arvore();

for(let i = 0; i < 30; i++){
    barbarvore.adicionarvalue(Math.floor(Math.random() * 100));
}

console.log(barbarvore);

barbarvore.caminho();

