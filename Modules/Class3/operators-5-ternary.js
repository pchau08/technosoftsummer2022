/**
 * Ternary operator (?:)
 *      used in situation where one of two values will be assigned to variable depending upon the result of condition(s)
 * 
 * 4.5 , 5.5
 * 
 * if credit score > 700, rate will 4.5 else 5.5
 *      
 * if credit score > 700 and first time home buyer, rate will 4.5 else 5.5
 * 
 * if credit score > 700 or first time home buyer , rate will 4.5 else 5.5
 * 
 * Syntax:
 * varName = condition(s) ? value-whichWillBeAssignedIfConditionResultIntoTrue : value-whichWillBeAssignedIfConditionResultIntoFalse
 * 
 */

// if credit score > 700, rate will 4.5 else 5.5
let userCreditScore = 700;
let mortgageRate = userCreditScore > 700 ? 4.5 : 5.5;

console.log(`\nCredit score -> ${userCreditScore}`);
console.log(`Mortgage Rate -> ${mortgageRate}`);

// if credit score > 700 and first time home buyer, rate will 4.5 else 5.5
let userCreditScore2 = 710;
let isFirstTimeBuyer = true;

let mortgageRate2 = userCreditScore2 > 700 && isFirstTimeBuyer === true ? 4.5 : 5.5;
// let mortgageRate2 = userCreditScore2 > 700 && isFirstTimeBuyer ? 4.5 : 5.5;
console.log(`\nCredit score -> ${userCreditScore2}`);
console.log(`First time home buyer -> ${isFirstTimeBuyer}`);
console.log(`Mortgage Rate -> ${mortgageRate2}`);

/*
    isFirstTimeBuyer = true

    isFirstTimeBuyer === true   // isFirstTimeBuyer
    isFirstTimeBuyer
    true


    isFirstTimeBuyer === false  // !isFirstTimeBuyer
    true === false
    false
*/


/*
    isFirstTimeBuyer = false

    isFirstTimeBuyer === true   // isFirstTimeBuyer
    false === true
    false


    isFirstTimeBuyer === false  // !isFirstTimeBuyer
    false === false
    true
   
*/