// 07/06/2019  - @ericódigos

function smallestCommons(arr){
    arr.sort( (a,b)=>{return a>b})
    let arre = [];
    for(let i=arr[0];i<=arr[1];i++){
      arre.push(i);
    }
    let pior = arre.reduce( (a,b)=>{return a*b});
    let v_lcm = false;
    let multiplicadores = [];
  
    for(let j=arre[arre.length-1];j<=pior;j+=arre[arre.length-1]){
      //console.log(j);
      let v_lcm = true;
      for(let e in arre){
       if(j%arre[e]!==0){
         v_lcm = false
       }
      }
      if(v_lcm==true){
        console.log(j)
        return j;
      }
    }
  }
  
  smallestCommons([23,18])