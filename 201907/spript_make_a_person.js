/** Script Make a person */
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    
    this.getFirstName = function() {
        return firstAndLast.split(' ')[0];
    };

    this.getLastName = function() {
        return firstAndLast.split(' ')[1];
    };
    
    this.setFullName = function(nomeCompleto) {
        firstAndLast = nomeCompleto;
    };
    
    this.setFirstName = function(PrimeiroNome) {
        firstAndLast = PrimeiroNome + ' ' + firstAndLast.split(' ')[1];
    };

    this.setLastName = function(ultimoNome) {
        firstAndLast = firstAndLast.split(' ')[0] + ' ' + ultimoNome;
    };

    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();

