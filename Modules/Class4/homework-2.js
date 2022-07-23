// Due Date : Tuesday Jul-05

const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
console.log(`result1 -> ${result1}`);

let result = sentence1.length >= 10 ? 15 : 25; 
console.log(`result -> ${result}`);


/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let setence_replace_a_alpha = sentence2.replace(/A/gi, 'Alpha');
console.log(`sentence_replace_a_alpha -> ${setence_replace_a_alpha}`);



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


// 1. the length of sentence-3
let sentence3Length = sentence3.length;
console.log(`\nsentence3Length -> ${sentence3}`);
console.log(`\Length = ${sentence3Length}`);


// 2. does sentence-3 starts with 'health' (ignore cases)

let sentence3_StartsWithPattern = ('HEALTH')
let sentence3_UpperCase = sentence3.toUpperCase('HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.');
let sentence3_StartsWithHealth = sentence3_UpperCase.startsWith(sentence3_StartsWithPattern)
console.log(`\nsentence3 -> ${sentence3}`);
console.log(`does the following sentence "${sentence3}" start with the word 'health' : ${sentence3_StartsWithHealth}`);


// 3. does sentence-3 contains with 'Body' (ignore cases)

let sentence3_IncludePatt = ('BODY');
let sentence3_Include_BOD = sentence3_UpperCase.includes(sentence3_IncludePatt);
console.log(`\nsentence3 -> ${sentence3}`);
console.log(`does ${sentence3} include 'body' : ${sentence3_Include_BOD}`);


// 4. index of 'Body' in sentence3  (ignore cases)

let sentence3_Index = sentence3_UpperCase.indexOf('BODY');
console.log(`\nIndex of body in sentence 3 is ${sentence3_Index}`)


// 5. the last-character in sentence-3

let sentence3_CharAt = sentence3.charAt(70)
console.log(`\nLast character in sentence 3 is ${sentence3_CharAt}`);

let sentence3_LastIndex = sentence3_UpperCase.lastIndexOf('BODY');
console.log(`\nCharacter last index is ${sentence3_LastIndex}`);

// 6. word 'Body' is present only once. (true or false)

let sentence3_LastIndexBod = 49
let sentence3_Bodyonce = sentence3_LastIndexBod === sentence3_Index ? true : false ;
console.log(`\nOnly Occurence ${sentence3_Bodyonce}`); 
