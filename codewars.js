// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

let number = function(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(`${i + 1}: ${array[i]}`);
    }
    return result;
  }

const number2 = array => array.map((el, i) => `${i + 1}: ${el}`); // this uses iterator value on map


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => N === undefined ? [] : [...Array(N).keys()]; 


// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
    let lampL = lamps.length;
    let droneL = drone.length;
    
    if (droneL > lampL) {
      return 'o'.repeat(lampL);
    }
    else {
      return 'o'.repeat(droneL) + 'x'.repeat(lampL - droneL);
    }
  }


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
    return Math.floor(marks.reduce((a,b) => a + b)/marks.length);
  }

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043


// Works but > 30 characters
const reverse = a => {
    let result = [];
    a.forEach(x => result.unshift(x));
    return result;
  }