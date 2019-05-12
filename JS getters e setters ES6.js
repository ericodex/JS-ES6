//Ericodex - @Ericodigos

function makeClass() {
  "use strict";
  class Termostato {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    // getter
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature; 