
// Daniel Shiffman
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning









































// Node in the tree
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// Search the tree for a value
Node.prototype.search = function(val) {
  if (this.value == val) {
      return this;
  } else if (val < this.value && this.left != null) {
      return this.left.search(val);
  } else if (val > this.value && this.right != null) {
      return this.right.search(val);
  }
  return null;
};

// Visit a node
Node.prototype.visit = function() {
  // Recursively go left
  if (this.left != null) {
    this.left.visit();
  }

  // Print out value
  console.log(this.value);

  // Recursively go right
  if (this.right != null) {
    this.right.visit();
  }
};

// Add a node
Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
        this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
};

// Tree object
    // Just store the root
  function Tree() {
    this.root = null;
  }
  
  // Start by visiting the root
  Tree.prototype.traverse = function() {
    this.root.visit();
  };
  
  // Start by searching the root
  Tree.prototype.search = function(val) {
    var found = this.root.search(val);
    return found;
  };
  
  // Add a new value to the tree
  Tree.prototype.addValue = function(val) {
    var n = new Node(val);
    if (this.root == null) {
      this.root = n;
    } else {
      this.root.addNode(n);
    }
  };


  
  // ----->>> Execução <<<-------

  var tree;

  // New tree
  tree = new Tree();

  // Add ten random values
  for (var i = 0; i < 10; i++) {
    tree.addValue(Math.floor(Math.random() * 100));
  }

  // Traverse the tree 
  

  console.log(tree);

  tree.traverse();

/**  
  // Search the tree for 10
  var result = tree.search(10);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }
*/


