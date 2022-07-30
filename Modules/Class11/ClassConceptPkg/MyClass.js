const MyStringFunctions = require('./MyStringFunctions');
const MyGreetingFunctions = require('./MyGreetingFunctions');
const MyArrayFunctions = require('./MyArrayFunctions');

// import functionsConcept-2.js
// const functionsConcept2 = require('../functionsConcept-2');

/**
 * If we want to access any function or variable from different class
 * we need the object of class (Create object if not created already) 
 * in which variable and function is present
 * 
 * Syntax of creating class object:
 * 
 * let objName = new ClassName();
 * 
 */

// create abbreviation for 'live life KING size';
const msf = new MyStringFunctions();

let output = msf.toAbbreviation('live life KING size');
console.log(output);


// Greeting to your user 'Love'
const mgf = new MyGreetingFunctions();
mgf.helloUser('Love');


// create abbreviation for 'good Morning';
msf.toAbbreviation('good Morning');

// Greeting to your user 'gIGi'
const modifiedUserName = msf.toTitleCase('gIGi');
mgf.helloUser('giGi');

mgf.helloUser('jOhN wiCK');

const maf = new MyArrayFunctions();

let numbers = [3, 2, 1, 5, 2];
console.log(maf.findMaxInArray(numbers));
console.log(maf.findMaxInArray1(numbers));
console.log(maf.findMaxInArray2(numbers));