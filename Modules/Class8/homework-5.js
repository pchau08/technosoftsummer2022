// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

 let sentence = 'have a great day';
 let words = '';
 let words1 = '';
 
 let sentenceWords = sentence.toLowerCase().split(' ');
 
 for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
    words = words += sentenceWords[i].substring(0,1).toUpperCase();
    words1 = words += sentenceWords[i].slice(1).concat(' ');
} 
 
 console.log(`Titlecase sentence is now -> ${words1}`);


/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

 let sentence1 = ['have', 'a', 'great', 'day'];
 let sentenceR = sentence1.reverse();
 
 
 for (let i=0 ; i <=sentence1.length-1 ; i++) {
     console.log(sentenceR[i]);
 }
 
/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

 let array = [1, 2, 3, 4];
 let sum = 0;
 
 for (let i = 0; i <= array.length -1; i++) {
     sum += array[i];
 }
 console.log(sum);
 

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 let array1 = [5, 6, 7, 8];
 let sum1 = 0;
 let avg = 0;
 
 for (let i = 0; i <= array1.length -1; i++) {
     sum1 += array1[i];
     avg = sum1/array1.length;
 }
 console.log(avg);

 
