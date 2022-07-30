// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

 function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

  titleCase("have a great day");
console.log(titleCase("have a great day"));




/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

 function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("have a great day");
console.log(reverseString("have a great day"));

/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

 let array = [1, 2, 3, 4, 5];

 function sumOfArray (array) {
     let sum = 0;
     for (let i = 0; i <= array.length -1; i++) {
         sum += array[i];
     }
     return sum;
 }
 
 console.log(sumOfArray(array));
 

/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */


 let array1 = [1, 2, 3, 4, 5];

 function avgOfArray (array1) {
     let sum1 = 0;
     let avg = 0;
     for (let i = 0; i <= array1.length -1; i++) {
         sum1 += array1[i];
         avg = sum1/array1.length;
     }
     return avg;
 }
 
 console.log(avgOfArray(array1));

