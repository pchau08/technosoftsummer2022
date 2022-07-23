/**
 * Arithmetic (+, -, *, /, %, ++, --)
 * 
 * +
 * -
 * *
 * /
 * % -> Modulus
 * ++ -> increment
 * -- decrement
 * 
 */

/**
 * increment operator (++)
 *      increases the value in variable by 1
 * 
 * num1 = 10;
 * num1++;      // num1 = 11
 * 
 */

/**
 * Post-increment 
 *      Post-increment executes always after all operators
 * Pre-increment
 *      Pre-increment executes always before all operators
 */

 let num1 = 10;
 // num1 + 1 same as num1++
 num1++;     // num1 = num1 + 1;
 
 /**
  * decrement operator (--)
  *      decreases the value in variable by 1
  * 
  * num1 = 10;
  * num1--;      // num1 = 9
  * 
  */
 
 /**
  * Post-decrement 
  *      Post-decrement executes always after all operators
  * Pre-decrement
  *      Pre-decrement executes always before all operators
  */
 num1--;     // post-decrement
 --num1;     // pre-decrement
 
 
 let num2 = 20;
 let res2 = num2++ - num2;   // sub , assign , post-increment
 // take a look in to logic
     /*
         let res2 = num2++ - num2;
         let res2 = num2 - num2;     // 0
         let res2 = 0;               // res2 = 0
 
         num2++                      21
     */
 console.log(`res2 = ${res2}`);      // 0
 console.log(`num2 = ${num2}`);      // 21
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 