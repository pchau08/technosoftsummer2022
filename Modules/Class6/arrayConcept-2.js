let planets = ['EArtH', 'MerCUry', 'VeNUS', 'JuIPteR', 'Pluto', 'SatuRN', 'MARS'];
console.log(`\nplanets -> ${planets}`);

/**
 * to find the length of array (or number of values in array)
 * property: length
 */
let totalPlanets = planets.length;
console.log(`\nTotal planets in array -> ${totalPlanets}`);

/**
 * to access from any index in array
 *  OR
 * to assign value at any index in the array
 *  -> we can use []
 */
const valueAtIndex2 = planets[2];
console.log(`\nValue at index-2 -> ${valueAtIndex2}`);

planets[1] = 'MaN MadE planeT';     // assign new value at index-1

console.log(`\nplanets -> ${planets}`);

/**
 * to convert array into comma-separated string-value
 * function: toString()
 */
const planetsString = planets.toString();
console.log(`\nplanetsString -> ${planetsString}`);
console.log(`type of planetsString -> ${typeof planetsString}`);

/**
 * to convert array into String with user-defined separator
 * function: join()
 * 
 * if user inputs the separator, all array-values get joined using the provided separator
 * if user doesn't input the separator, all array-values get joined using the default separator(,)
 */

const planetsJoin1 = planets.join('  ');
console.log(`\nplanetsJoin1 -> ${planetsJoin1}`);

const planetsJoin2 = planets.join();
console.log(`\nplanetsJoin2 -> ${planetsJoin2}`);

/**
 * to remove value from array
 * function: pop()  -> to remove the last value from the array
 *      returns the poped value
 * 
 * function: shift()  -> to remove the first value from the array
 *      returns the shifted value
 * 
 * function: delete()
 *      planets -> MaN MadE planeT, VeNUS, JuIPteR, Pluto
 *      planets.delete(1);
 *      planets -> MaN MadE planeT, undefined, JuIPteR, Pluto
 *      
 * 
 * function changes the original array
 * 
 * to remove value from array
 * pop() vs shift() vs delete() vs splice()
 * 
 */

console.log(`\nplanets -> ${planets}`);
const popedValue = planets.pop();
console.log(`\npopedValue -> ${popedValue}`);

console.log(`\nplanets -> ${planets}`);

const shiftedValue = planets.shift();
console.log(`\nshiftedValue -> ${shiftedValue}`);

console.log(`\nplanets -> ${planets}`);

const popedValueAgain = planets.pop();
console.log(`\npopedValueAgain -> ${popedValueAgain}`);

console.log(`\nplanets -> ${planets}`);

// planets -> MaN MadE planeT, VeNUS, JuIPteR, Pluto
// push
// planets -> MaN MadE planeT, VeNUS, JuIPteR, Pluto, SatuRN
/**
 * to add value in array
 * function: push() -> to add value in the end of array
 *      returns new array length
 * 
 * function: unshift()  -> to add value in the beginning of array
 *      returns new array length
 * 
 * 
 * function changes the original array
 * 
 * 
 * to add value from array
 * push() vs unshift() vs splice() vs concat()
 * 
 */
const lenAfterPushFunction = planets.push('SatuRN');
console.log(`\ntotal planets now -> ${lenAfterPushFunction}`);

console.log(`\nplanets -> ${planets}`);

const lenAfterUnshiftFunction = planets.unshift('EARth');
console.log(`\ntotal planets now -> ${lenAfterUnshiftFunction}`);

console.log(`\nplanets -> ${planets}`);

const lenAfterUnshiftFunction2 = planets.unshift('SAturN');
console.log(`\ntotal planets now -> ${lenAfterUnshiftFunction2}`);

console.log(`\nplanets -> ${planets}`);

/**
 * to add/remove values in the array
 * function: splice()
 *      arg-1: from index where we want to add new values
 *      arg-2: how many values you want to remove
 *      arg-n: new values
 * 
 * function returns an array with deleted/removed values
 */
// planets -> SAturN,EARth,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN

const arrayFromSplice1 = planets.splice(2, 0, 'A', 'B', 'C', 'D');
console.log(`\narrayFromSplice1 -> ${arrayFromSplice1}`);

console.log(`\nplanets -> ${planets}`);     // planets -> SAturN,EARth,A,B,C,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN


const arrayFromSplice2 = planets.splice(3,2);
console.log(`\narrayFromSplice2 -> ${arrayFromSplice2}`);   // B,C
console.log(`\nplanets -> ${planets}`);     // planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN

/**
 * to remove last value from array
 * pop() vs splice()
 */
// console.log(`\nplanets -> ${planets}`);
// planets.pop();
// planets.splice(planets.length-1, 1);

/**
 * to concat multiple array
 * function: concat()
 *      function returns new-array after joining all given arrays
 */
// planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN
let fruits = ['mango', 'apple', 'banana', 'cherry'];
let states = ['ny', 'nj', 'ca', 'pa', 'tx'];

const combinedArray = planets.concat(fruits, states);

console.log(`\nplanets -> ${planets}`);
console.log(`fruits -> ${fruits}`);
console.log(`states -> ${states}`);
console.log(`combinedArray -> ${combinedArray}`);

// using concat() to add values
const newFruits = fruits.concat('strawberry', 'MANGO');   // adds values in the end
console.log(`\nfruits -> ${fruits}`);
console.log(`newFruits -> ${newFruits}`);

/**
 * to find if a given value is exactly present at any index in the array
 * function: includes()
 *  arg-1: value which we want to check for
 *  arg-2: search should start from specified index
 * 
 * if the given value is exactly present in the at any index
 *      function will return true
 * otherwise
 *      function will return false
 * 
 */

// planets -> SAturN, EARth, A, D, MaN MadE planeT, VeNUS, JuIPteR, Pluto, SatuRN
console.log(`\nplanets -> ${planets}`);
const isIncludesPluto = planets.includes('Pluto');
console.log(`does include "Pluto" in planets -> ${isIncludesPluto}`);

const isIncludesMaN = planets.includes('MaN');
console.log(`does include "MaN" in planets -> ${isIncludesMaN}`);

const isIncludesA_D = planets.includes('A, D');
console.log(`does include "A, D" in planets -> ${isIncludesA_D}`);

const isIncludes_pluto = planets.includes('pluto');
console.log(`does include "pluto" in planets -> ${isIncludes_pluto}`);

const isIncludesEARth = planets.includes('EARth');
console.log(`does include "EARth" in planets -> ${isIncludesEARth}`);

const isIncludesEARth2 = planets.includes('EARth', 3);
console.log(`does include "EARth" in planets (starting from index-3) -> ${isIncludesEARth2}`);

/**
 * to find the FIRST OCCURRENCE of a given value at any index in the array
 * function: indexOf()
 * 
 * if the given value is exactly present at any index
 *      function returns the index of first occurrence
 * otherwise
 *      function returns -1
 */
// planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN
console.log(`\nplanets -> ${planets}`);
planets = planets.concat('A', 'D', 'MaN MadE planeT', 'VeNUS', 'MaN MadE planeT', 'VeNUS', 'EARth', 'D', 'D');

console.log(`\nplanets -> ${planets}`);
// planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN,A,D,MaN MadE planeT,VeNUS,MaN MadE planeT,VeNUS,EARth,D,D

const indexOf_Earth = planets.indexOf('Earth');
console.log(`First occurrence of "Earth" is at index -> ${indexOf_Earth}`);                         // -1

const indexOf_MaN_MadE_planeT = planets.indexOf('MaN MadE planeT');
console.log(`First occurrence of "Man MadE planeT" is at index -> ${indexOf_MaN_MadE_planeT}`);     // 4

const indexOf_MaN_MadE = planets.indexOf('MaN MadE');
console.log(`First occurrence of "Man MadE" is at index -> ${indexOf_MaN_MadE}`);                   // -1

const indexOf_Apple = planets.indexOf('Apple');
console.log(`First occurrence of "Apple" is at index -> ${indexOf_Apple}`);                         // -1

/**
 * to find the LAST OCCURRENCE of a given value at any index in the array
 * function: lastIndexOf()
 * 
 * if the given value is exactly present at any index
 *      function returns the index of last occurrence
 * otherwise
 *      function returns -1
 */
console.log(`\nplanets -> ${planets}`);
// planets -> SAturN,EARth,A,D,MaN MadE planeT,VeNUS,JuIPteR,Pluto,SatuRN,A,D,MaN MadE planeT,VeNUS,MaN MadE planeT,VeNUS,EARth,D,D
const lastIndexOf_Earth = planets.lastIndexOf('Earth');
console.log(`Last occurrence of "Earth" is at index -> ${lastIndexOf_Earth}`);                          // -1

const lastIndexOf_MaN_MadE_planeT = planets.lastIndexOf('MaN MadE planeT');
console.log(`Last occurrence of "Man MadE planeT" is at index -> ${lastIndexOf_MaN_MadE_planeT}`);      // 13

const lastIndexOf_MaN_MadE = planets.lastIndexOf('MaN MadE');
console.log(`Last occurrence of "Man MadE" is at index -> ${lastIndexOf_MaN_MadE}`);                    // -1

const lastIndexOf_Apple = planets.lastIndexOf('Apple');
console.log(`Last occurrence of "Apple" is at index -> ${lastIndexOf_Apple}`);                          // -1

const lastIndexOf_VeNUS = planets.lastIndexOf('VeNUS');
console.log(`Last occurrence of "VeNUS" is at index -> ${lastIndexOf_VeNUS}`);                          // 14

/**
 * to find if the given value/variable is array or not
 * function: isArray()
 * 
 * if the variable is array
 *      function returns true
 * otherwise
 *      function returns false
 * 
 */
let isPlanetsArray = Array.isArray(planets);
console.log(`\nis "planets" an array -> ${isPlanetsArray}` );

let isLastIndexOf_VeNUSArray = Array.isArray(lastIndexOf_VeNUS);
console.log(`is "isLastIndexOf_VeNUSArray" an array -> ${isLastIndexOf_VeNUSArray}` );

/**
 * to fill an array with a specific value
 * function: fill()
 *      arg-1: new value to fill/add 
 *      arg-2: starting index (index from which we want to fill/add value)
 *      arg-3: end index (index upto which we should fill/add value -- endIndex is not included)
 * 
 * Note -> works like replace
 *      -> changes the original array
 * 
 * if arg-2 and arg-3 are not mentioned
 *      values at all index in array will be replaced with the new-value
 * 
 * if arg-3 is not mentioned
 *      all values from starting-index will be replaced with new-value
 * 
 * Note -> function changes the original array
 * 
 */
console.log(`\nfruits -> ${fruits}`);       // mango,apple,banana,cherry
fruits.fill('happy', 2, 4);     // 2, 3
console.log(`\nfruits -> ${fruits}`);       // mango,apple,happy,happy

fruits.fill('Queen king');                  
console.log(`\nfruits -> ${fruits}`);       // Queen king, Queen king, Queen king, Queen king

fruits.fill('Apple', 1);
console.log(`\nfruits -> ${fruits}`);       // Queen king, Apple, Apple, Apple

/**
 * to reverse an array
 * function: reverse()
 * 
 * function changes the original array
 * 
 */
// fruits -> Queen king, Apple, Apple, Apple
fruits.reverse();
console.log(`\nfruits -> ${fruits}`);

let letters = ['a' , 'b', 'c', 'd'];
console.log(`\nletters -> ${letters}`);
letters.reverse();
console.log(`\nletters -> ${letters}`);

// let letters = ['a' , 'b', 'c', 'd'];
letters.reverse();







