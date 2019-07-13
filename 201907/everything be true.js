
// Retornado função como argumento.
function addTogether(args) {

    let lst = [...arguments];
  
    if (lst.length==1&&Number.isInteger(lst[0])){
      return function(sga){
        if(Number.isInteger(sga)){
          return sga + lst[0];
        }
      };
    }
  
    if(lst.length > 1 && 
        Number.isInteger(lst[0]) && 
        Number.isInteger(lst[1])){
      return lst[0]+lst[1]
    }else {
      return undefined;
    }
    
  }
  
  addTogether(2,3);