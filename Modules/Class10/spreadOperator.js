/**
 * Spread Operator (...)
 * 
 *      is to clone or merge arrays or objects
 */

 let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Pluto'];
 let fruits = ['mango', 'apple', 'banana', 'cherry'];
 let states = ['ny', 'nj', 'ca', 'pa', 'tx'];
 
 // Creating new array with the values of fruits-array and states-array
 let combinedArray1 = [...states, ...fruits];    // ['ny', 'nj', 'ca', 'pa', 'tx', 'mango', 'apple', 'banana', 'cherry']
 
 console.log(`\ncombinedArray1 -> ${combinedArray1}\n`);
 console.log(`Total values in combinedArray1 -> ${combinedArray1.length}\n`);
 
 // let combinedArray2 = all values of states array, 'Happy', 'live', all values of fruits array
 
 let combinedArray2 = [...states, 'Happy', 'Live', ...fruits];
 console.log(`\ncombinedArray2 -> ${combinedArray2}\n`);
 console.log(`Total values in combinedArray2 -> ${combinedArray2.length}\n`);
 
 let abc = [...states];      // all values in states-array will be in abc-array
 console.log(`\nabc -> ${abc}\n`);
 console.log(`Total values in abc -> ${abc.length}\n`);
 
 /**
  * Spread Operator with Object
  */
 
 console.log('\nSpread Operator with Object\n');
 
 let myObj = {
     myName : 'Happy Peace',
     11 : true,
     state : 'New York',
     5 : 'five',
     age : 20,
     true : 22
 };
 
 // 
 let myObj2 = {
     ...myObj
 }
 
 let book = {
     tittle : 'Learn to smile',
     year : 2022,
     author : 'You',
     myName : 'BOOK'
 }
 
 console.log('\nprinting myObj\n');
 console.log(myObj);
 
 console.log('\nprinting myObj2\n');
 console.log(myObj2);
 
 let myObj3 = {
     liveIn : 'CA',
     ...myObj2,
     isAbove18 : true,
     ...book,
     anyTicket : false
 }
 
 console.log('\nprinting myObj3\n');
 console.log(myObj3);