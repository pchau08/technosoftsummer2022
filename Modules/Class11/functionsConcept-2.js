/**
 * Functions
 * 
 * 
 * Before you create a function, ask below questions:
 * 1. what is the purpose of function?
 *      this helps in function name
 * 
 * 2. Do I need any input from user?
 *      If yes,
 *      a) How many inputs I need from user?
 * 
 * 3. Should I return any value back to user at the end of my function?
 *      If Yes,
 *          make sure to write return statement in the end of function
 *      else,
 *          NO return statement in the function
 * 
 * Good practice -> return the result of function instead printing it.
 * 
 * 
 * Syntax to create function:
 * 
 * #1:
 * function funcName(<inputParameters>) {
 *      code inside 
 *      the function
 *      return statement  --> ONLY IF you plan to return something back to user at the end of function (Q3)
 * }
 * 
 * funcName -> name should refer the purpose of the function
 * 
 * <inputParameters> -> 
 *      if we need input from user, 
 *          we need to create variables in the parenthesis
 *      else
 *          parenthesis will be empty
 * 
 * 
 * #2   (function expression)
 * let funcName = function(<inputParameters>) {
 *      code inside 
 *      the function
 *      return statement  --> ONLY IF you plan to return something back to user at the end of function (Q3)
 * }
 * 
 * 
 */
 let printHello = function () {         // defining the function
    console.log('Hello');
}

const helloUser = function (userName) {      // username is the local-variable to this function (scope of username-variable is helloUser function)
    console.log(`Hello ${userName}`);
}

const myName = 'Deepak Sharma';

console.log(typeof myName);     // String

console.log(typeof printHello);     // function

console.log(typeof helloUser);     // function


console.log('\nCalling printHello() function\n');
printHello();                   // calling the function
console.log('\nAfter calling printHello() function\n');


console.log('\nCalling helloUser() function\n');
helloUser('Gigi');                          // calling the function
console.log('\nAfter calling helloUser() function\n');

console.log('\nCalling printHello() function\n');
printHello();                               // calling the function
console.log('\nAfter calling printHello() function\n');

console.log('\nCalling helloUser() function\n');
helloUser('KAty');                          // calling the function
console.log('\nAfter calling helloUser() function\n');

/**
 * #3 (Arrow function)
 * let funcName = (<inputParameters>) => {
 *      code inside 
 *      the function
 *      return statement  --> ONLY IF you plan to return something back to user at the end of function (Q3)
 * }
 * 
 */

let printHello2 = () => {         // defining the function
    console.log('Hello');
}

const helloUser2 = (userName) => {      // username is the local-variable to this function (scope of username-variable is helloUser function)
    console.log(`Hello ${userName}`);
}

console.log('\n\nArrow Functions\n');

console.log(typeof printHello2);     // function

console.log(typeof helloUser2);     // function


console.log('\nCalling printHello2() function\n');
printHello2();                   // calling the function
console.log('\nAfter calling printHello2() function\n');


console.log('\nCalling helloUser2() function\n');
helloUser2('Gigi');                          // calling the function
console.log('\nAfter calling helloUser2() function\n');

console.log('\nCalling printHello2() function\n');
printHello2();                               // calling the function
console.log('\nAfter calling printHello2() function\n');

console.log('\nCalling helloUser2() function\n');
helloUser2('KAty');                          // calling the function
console.log('\nAfter calling helloUser2() function\n');

// let add2Nums = (num1, num2) => {
//     let res = num1 + num2;
//     return res;
// }


// let add2Nums = (num1, num2) => {
//     return num1 + num2;
// }

/**
 * 
 * If function has only 1-line of code and result of the line is supposed to be returned
 *  in this situation, we can skip the {} and return-keyword in arrow-function
 * 
 * Shortcut of above addNums-function
 */
let add2Nums = (num1, num2) => num1 + num2;


console.log('\nCalling add2Nums() function\n');
console.log(add2Nums(1, 4));                                    // calling the function
console.log('\nAfter calling add2Nums() function\n');



let toAbbreviation = (sentence) => {
    let abbr = '';
    const sentenceWords = sentence.toUpperCase().split(' ');
    for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
        abbr = abbr + sentenceWords[i].substring(0,1);
    }
    return abbr;
}


console.log(toAbbreviation('have a great day'));

const abc = 'yOu neVER WaLK alOne in liFe';
console.log(toAbbreviation(abc));


















