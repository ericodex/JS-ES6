// @ericodigos
// Map the Debris - FreeCodeCamp

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 * 
 * Return a new array that transforms the elements average altitude into their
 * orbital periods (in seconds).
 * 
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * 
 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
 * 
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
 * 398600,4418 km³s-².
 * 
 *  
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function orbitalPeriod(arr) {
    var GM = 398600.4418; // Standard gravitational
    var earthRadius = 6367.4447;
    var arre = []
    let T = 0;
    for (let e in arr){
        T = Math.round(Math.PI*2*Math.sqrt(Math.pow(arr[e]['avgAlt']+earthRadius,3)/GM));
  
      arr[e]['orbitalPeriod'] = T;
      delete arr[e].avgAlt;
  
    }
      return arr;
    }
    
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);