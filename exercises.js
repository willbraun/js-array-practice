// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------
let copyITimes = (string,i) => {
    let result = [];
    for (let j = 0; j < i; j++) {
        result.push(string);
    }
    return result;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------
const reverseArray = array => {
    let result = [];
    for (let entry of array) {
        result.unshift(entry);
    }
    return result;
}
 
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------
const removeFalsy = array => {
    for (let i = array.length - 1; i >= 0; i--) {
        if (!array[i]) {
            array.splice(i,1);
        }
    }
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------
const arrayToObject = array => {
    let obj = {};
    for (let entry of array) {
        obj[entry[0]] = entry[1];
    }
    return obj;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------
const removeDuplicates = array => {
    return [...new Set(array)];
}

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------
const includesSameValues = (arr1,arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every(element => arr2.includes(element));
} 

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------
const flatten = array => {
    let result = [];
    for (let entry of array) {
        if (Array.isArray(entry)) {
            result.push(...flatten(entry));
        }
        else {
            result.push(entry)
        }
    }
    return result;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------
const splitBy = (array,i) => {
    let result = [];
    for (let j = 0; j < array.length; j += i) {
        result.push(array.slice(j, j + i));
    }
    return result;
}

// -----------------------------------------------
