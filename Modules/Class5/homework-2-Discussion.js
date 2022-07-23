// Due Date : Tuesday Jul-05

const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 * 
 * 
 * result1 = 15/25
 * sentence1_length = sentence1.length; (eg: sentence1_length = 20)
 * 
 * sentence1_length > 10 , result = 15
 * otherwise, result = 25
 * 
 * result1 = sentence1_length >= 10 ? 15 : 25;
 * 
 * 
 */
let sentence1_length = sentence1.length;
result1 = sentence1_length >= 10 ? 15 : 25;
console.log(`result1 -> ${result1}`);


const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */
/**
 * 3.3: does sentence-3 contains with 'Body' (ignore cases)
 * 
 * const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 * 
 * 
 * 'Body' -> 'body'
 * 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.' -> ''
 * 
 * to check contains -> includes from String class (but includes cannot ignore cases)
 * 
 */
let checkPattern = 'BoY';
let bodyLowercase = checkPattern.toLowerCase();
let sentence3_Lowercase = sentence3.toLowerCase();
let includesResult = sentence3_Lowercase.includes(bodyLowercase);

console.log(`\nsentence3 -> ${sentence3}`);
console.log(`does sentence3 contains "${checkPattern}" : ${includesResult}`);

/**
 * 3.6: word 'Body' is present only once. (true or false)
 * 
 * convert s-3 into lowercase
 * convert pattern into lowercase
 * 
 * indexOfBody = index of 'body' into s-3 into lowercase
 * lastIndexOfBody = last index of 'body' into s-3 into lowercase
 * 
 * indexOfBody === lastIndexOfBody && indexOfBody >= 0
 * 
 */