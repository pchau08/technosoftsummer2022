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
 let num1 = 10;
 let num2 = 20;
 let num3 = num1 + num2;
 console.log(`${num1} + ${num2} = ${num3}`);
 
 console.log(`${num1} + ${num2} = ${num1+num2}`);
 
 console.log(`${num1} - ${num2} = ${num1-num2}`);
 
 console.log(`${num1} * ${num2} = ${num1*num2}`);
 
 console.log(`${num1} / ${num2} = ${num1/num2}`);
 
 /**
  * Modulus -> find the remaining from a division
  * 
  * Division:
  *      10/2 = 5 (remaining = 0)
  *      9/2 = 4 (remaining = 1)
  *      8/3 = 2 (remaining = 2)
  *      7/10 = 0 (remaining = 7)
  *      10/7 = 1 (remaining = 3)
  *      10/3 = 3 (remaining = 1)
  *      8/8 = 1 (remaining = 0)
  * 
  */
 num1 = 10;
 num2 = 2;
 num3 = num1%num2;
 console.log(`${num1} % ${num2} = ${num3}`);
 
 num1 = 7;
 num2 = 10;
 num3 = num1%num2;
 console.log(`${num1} % ${num2} = ${num3}`);
 console.log(num1 + ' % ' + num2 + ' = ' + num3);
 
 /**
  * increment operator (++)
  *      increases the value in variable by 1
  * 
  * num1 = 10;
  * num1++;      // num1 = 11
  * 
  */
 num1 = 10;
 console.log(`num1 = ${num1}`);      // num1 = 10
 num1++;     // post-increment
 console.log(`num1 = ${num1}`);      // num1 = 11
 
 num1 = 10;
 console.log(`num1 = ${num1}`);      // num1 = 10
 ++num1;     // pre-increment
 console.log(`num1 = ${num1}`);      // num1 = 11
 
 /**
  * Post-increment 
  *      Post-increment executes always after all operators
  * Pre-increment
  *      Pre-increment executes always before all operators
  */
 num1 = 10
 let num4 = num1++; //  (assignment, post-increment)
 console.log(`num1 = ${num1}`);      // num1 = 11
 console.log(`num4 = ${num4}`);      // num4 = 10
 
 num1 = 10
 let num5 = ++num1; //  (pre-increment, assignment)
 console.log(`num1 = ${num1}`);      // num1 = 11
 console.log(`num5 = ${num5}`);      // num5 = 11
 
 let lVar1=10;
 let lVar2=20;
 let lVar3=30;
 let lVar4=40;
 
 let res1 = lVar1 + lVar2++; // (addition, assignment, post-increment)
 console.log(`\n\nlVar1 = ${lVar1}`);    // 10
 console.log(`lVar2 = ${lVar2}`);        // 21
 console.log(`res1 = ${res1}`);          // 30
 
 // let abc = 2 + 1;
 
 // let x = 2-4+1*3;    // mult, add, sub, assignment
 
 // lVar1=10 , lVar2=21
 let res2 = lVar1++ - ++lVar2;   // (pre-increment, subtraction, assignment, post-increment)
     /* 
         lVar2 = 22
         lVar1 - lVar2 (-12)
         res2 = -12
         lVar1 = 11
     */
 console.log(`\n\nlVar1 = ${lVar1}`);        // 11
 console.log(`lVar2 = ${lVar2}`);            // 22
 console.log(`res2 = ${res2}`);              // -12
 
 /**
  * 1. Create a variable name teamSize and assign your team size value to that variable
  * 2. Post Increment your teamSize by 1.
  * 3. Create new variable name teamName and assign your team name to it. 
  * 4. Construct a string which should display below text
  * 
  *  Our Team name is ABC and our team size is N.
  */