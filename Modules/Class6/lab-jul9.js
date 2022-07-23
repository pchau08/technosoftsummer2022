/**
 * 1) if String has more than one instance of 'b' (ignoring cases), assign 10 into num
 * otherwise assign 20 into num
 * 
 * 2) print the result for:
 *      the sentence-length is greater than 20
 *      the sentence has only one instance of body (ignoring cases)
 *      the sentence starts and ends with same character which is '.'
 *      in the sentence 'said' appears before the word 'body' word
 * 
 */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let num;
 /**
  * 
  * sentence.toLowercase
  * 
  * 
  * indexOf 'b' -> 10
  * lastIndexOf 'b' -> 22
  * 
  * indexOf 'b' -> 10
  * lastIndexOf 'b' -> 10
  * 
  * 
  *  num = indexOf'b' !== lastIndexOf'b'  ? 10 : 20
  * 
  * 
  * 
  */
 // sentence = sentence.toLowerCase();
 
 let indexOf_b = sentence.indexOf('b');
 let lastIndexOf_b = sentence.lastIndexOf('b');
 
 // num = indexOf_b !== lastIndexOf_b ? 
 
 /**
  * fill
  * splice
  * 
  * reverse
  * isArray
  * 
  * 
  * have a great day
  * -> a - X
  * -> index-2,3,4 - happy
  * 
  */
 /**
  * fill
  */
 let fruits = ['mango', 'apple', 'banana', 'cherry'];
 
 // let fruits = ['mango', 'apple', 'banana', 'cherry'];
 
 fruits.fill('HAPPY', 1, 2);
 // let fruits = ['mango', 'HAPPY', 'banana', 'cherry'];
 
 fruits.fill('HAPPY', 1);
 // let fruits = ['mango', 'HAPPY', 'HAPPY', 'HAPPY'];
 
 fruits.fill('HAPPY');
 // let fruits = ['HAPPY', 'HAPPY', 'HAPPY', 'HAPPY'];
 
 
 /**
  * splice
  * 
  * 
  */
 let states = ['ny', 'nj', 'ca', 'pa', 'tx'];
 
 states.splice(2, 1, 'Happy', 'Give', 'King');
 // let states = ['ny', 'nj', 'Happy', 'Give', 'King', 'pa', 'tx'];
 
 const xyz = states.splice(2, 0, 'Happy', 'Give', 'King');   // xyz = []
 // let states = ['ny', 'nj', 'Happy', 'Give', 'King', 'ca', 'pa', 'tx'];
 
 // remove index-4 value using splice()
 const abc = states.splice(4,1);     // abc = ['tx']
 // let states = ['ny', 'nj', 'ca', 'pa'];
 
 
 
 let letters = ['a' , 'b', 'c', 'd'];
 console.log(`\nletters -> ${letters}`);
 letters.reverse();
 console.log(`\nletters -> ${letters}`);
 
 
 
 
 
 
 