/**
 * 
 * multi-character
 * 
 * single-character 
 * 
 * 
 * numbers
 *      whole (age, numberOfHouse, siblings, month, date, year)
 *      decimal (accountBalance, weight, distance, height)
 * 
 * true/false
 *      
 * 
 * Datatypes in programming:
 * 1. String
 * 2. char
 *      -> Js considers character as String datatype
 * 3. byte, short, long, int
 * 4. float, double
 *      -> Js considers digits as Number datatype
 * 5. boolean
 * 
 */

/**
 * Variables
 * 
 * In Java, if I want to store int-value, so I need int-variable
 * 
 * In Js, if I want to store int-value, so I need a variable
 */

 let myAge = 32;
 // print my age in the console using myAge-variable
 console.log(myAge); // it is going to print the value stored in myAge-variable
 
 // print the type of myAge variable
 console.log(typeof myAge);
 /**
  * typeof operator helps us to check the type of any variable
  */
 
 /**
  * variable can be created using keywords:
  *      let
  *      var
  * 
  * var -> allows us to redeclare variable using same-name of existing variable
  * let -> does NOT allow to redeclare variable using same-name of existing variable
  * --> let is better
  * 
  * 
  * let myAge = 10;
  *      OR
  * var myAge = 10;
  * 
  */
 
 let myAge1 = 100;
 /**
  * let doesn't allow to create multiple-variables with same name in a scope
  */
 
 var myName = 'Patrick';
 console.log(myName);
 
 var myName = 'ABCD';
 console.log(myName);
 
 
 /**
  * Good practices to provide names:
  * 1. variables:
  *      -> name should relate to the stored value
  *      -> cannot use js-keywords (let, var, typeof, console etc)
  *      -> cannot use spaces
  *      -> starts with lowercase
  *      -> never start with digit or special character
  *      -> if name is more than one word, use camelCaseFormat
  *      eg:
  *          my age -> myAge
  *          my dog age -> myDogAge
  * 
  * 2. Package/Files:
  *      -> name should relate to the stored files/packages
  *      -> cannot use js-keywords (let, var, typeof, console etc)
  *      -> cannot use spaces
  *      -> starts with Uppercase
  *      -> never start with special character
  *      -> if name is more than one word, use CamelCaseFormat
  *      eg:
  *      class 1 files -> Class1Files
  *      class 1 files -> Class1_Files
  * 
  * 
  */
 
 // print age like -> My name is Patrick Chau and I am 32 years old
 let userName = 'Patrick Chau';     // to store String-value in variable, enclose the value in single-quotes.
 let userAge = 32;
 

console.log('My name is ' +userName+ ' and I am ' +userAge+ ' years old ');
console.log(`My name is ${userName} and I am ${userAge} years old`);

let footballTeam = 'Minnesota Vikings'
let basketballTeam = 'Washington Wizards'

console.log('My favorite football team is the ' +footballTeam+ ' and my favorite basketball team is the ' +basketballTeam+ ' because I love Virginia and Randy Moss');
console.log(`My favorite football team is the ${footballTeam} and my favorite basketball is the ${basketballTeam}`);



