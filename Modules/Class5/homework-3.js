/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */

 let countryName = 'Vietnam';
 let countryNameLength = countryName.lastIndexOf('M')
 console.log(`\n${countryName}`);   
 
 /**
  * Q2:
  * Count the number of words in the sentence --> 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.'
  *
  */


let sentenceArray = ['HeAlTh', 'wAs', 'EArlIer', 'said', 'To', 'Be', 'the', 'AbILitY', 'of', 'the', 'bOdY', 'funcTiOnInG', 'WElL.'];
let totalWord = sentenceArray.length;
console.log(totalWord);


 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */

  let sentence3 = 'have a great day';
  let sentenceLowercase = sentence3.toLowerCase();

  let firstLetterUppercase1 = sentenceLowercase.substring(0,1).toUpperCase(); //H
  let secondLetterUppercase1 = sentenceLowercase.substring(5,6).toUpperCase() //A
  let thirdLetterUppercase1 = sentenceLowercase.substring(7,8).toUpperCase(); //G
  let fourthLetterUppcase1 = sentenceLowercase.substring(13,14).toUpperCase(); //D

  let allLetters1 = sentenceLowercase.substring(1,5); //ave
  let allLetters3 = sentenceLowercase.substring(8,12); //reat
  let allLetters4 = sentenceLowercase.substring(14,16); //ay
  
  let refinedSentence1 = firstLetterUppercase1.concat(allLetters1);
  let refinedSentence3 = thirdLetterUppercase1.concat(allLetters3);
  let refinedSentence4 = fourthLetterUppcase1.concat(allLetters4);
  
  console.log(refinedSentence1 + "" + secondLetterUppercase1 + " " + refinedSentence3 + " " + refinedSentence4);

 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
 
  let sentence4 = 'have a great day';
  let sentence4Lowercase = sentence4.toLowerCase();

  let removeSpaces = sentence4.split(' ');

  let firstUppercaseWord = sentence4Lowercase.substring(0,1).toUpperCase();
  let secondUppercaseWord = sentence4Lowercase.substring(5,6).toUpperCase();
  let thirdUppercaseWord = sentence4Lowercase.substring(7,8).toUpperCase();
  let fourthUpperWord = sentence4Lowercase.substring(13,14).toUpperCase();

  console.log(firstLetterUppercase1 + secondUppercaseWord + thirdUppercaseWord + fourthUpperWord);
  console.log(`\n ${sentence4} is now abbreviated into ${firstLetterUppercase1}${secondUppercaseWord}${thirdUppercaseWord}${fourthUpperWord}` );


  
  