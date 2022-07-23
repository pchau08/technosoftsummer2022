/**
 * Comparison Operator (>=, <=, >, <, ===, !==)
 * 
 * Note: all Comparison result a boolean value
 */

 let num1 = 10;
 let num2 = 20;
 
 let num1GrEqNum2 = num1 >= num2;        // >= : greater than or equals to
 console.log(`\n${num1} >= ${num2} = ${num1GrEqNum2}`);    // 
 
 let num1LeEqNum2 = num1 <= num2;        // <= : less than or equals to
 console.log(`\n${num1} <= ${num2} = ${num1LeEqNum2}`);    // 
 
 let num1GrNum2 = num1 > num2;        // > : greater than
 console.log(`\n${num1} > ${num2} = ${num1GrNum2}`);    // 
 
 let num1LeNum2 = num1 < num2;        // < : less than
 console.log(`\n${num1} < ${num2} = ${num1LeNum2}`);    // 
 
 /**
  * === : to compare if two values are equal (in value and same datatype)
  * 
  * == : to compare if two values are equal (in value)
  */
 let num1EqNum2 = num1 === num2;
 console.log(`\n${num1} === ${num2} = ${num1EqNum2}`);
 
 num1 = 20;
 num1EqNum2 = num1 === num2;
 console.log(`${num1} === ${num2} = ${num1EqNum2}`);
 
 num1 = '20';
 num1EqNum2 = num1 === num2;
 console.log(`${num1} === ${num2} = ${num1EqNum2}`);
 
 num1EqNum2 = num1 == num2;
 console.log(`${num1} == ${num2} = ${num1EqNum2}`);
 
 /**
  * !== : to compare if two values are NOT equal (in value and same datatype)
  * 
  * != : to compare if two values are NOT equal (in value)
  */
 let num3 = 30;
 let num4 = 40;
 
 let num3NtEqNum4 = num3 !== num4;
 console.log(`\n${num3} !== ${num4} = ${num3NtEqNum4}`);
 
 num3 = '40';
 num3NtEqNum4 = num3 !== num4;
 console.log(`${num3} !== ${num4} = ${num3NtEqNum4}`);
 
 num3NtEqNum4 = num3 != num4;
 console.log(`${num3} != ${num4} = ${num3NtEqNum4}`);
 
 /**
  * fTemp = 76
  * 
  * 
  * let cTemp = (76 - 32) * 5/9
  * 
  * cTemp = X
  * 
  * X should be equals to 25
  * 
  * Verify correct temp value displayed when user changes temp-units
  * 
  * 
  */