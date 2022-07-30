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