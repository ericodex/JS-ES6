// @ericodigos - 22/05/2019

// THIS em python é diferente de THIS em JAVA ou Python

/*
 ARROWS FUNCTION - https://www.geeksforgeeks.org/arrow-functions-in-javascript/

    

 */




// - User console.log() para verificar variáveis


let People = function(person, age) { 
    this.person = person; 
    this.age = age; 
    this.info = function() { 

     // logs People 
     document.write(this); 

     setTimeout(function() { 
        // here this!=People 
       document.write(this.person + " is " + this.age +  
        " years old"); 
      }, 3000); 
    } 
}  
let person1 = new People('John', 21); 

// logs : undefined is undefined years old after 3