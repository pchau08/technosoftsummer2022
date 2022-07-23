/**
 * switch
 * 
 * do-while
 * 
 * hw4-Q-4
 * 
 * forEach
 */

/**
 * all your conditions must be "equals to"
 * 
 * 
 */

 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

 /**
  * if the length of array is greater than 5 print, the odd index values
  * otherwise print even index values
  */
 
 // code to print odd-index values
 
 
 // if the length of array is greater than 5 print
 if (sports.length > 5) {
     for (let i=1 ; i <= sports.length-1 ;i+=2) {
         console.log(sports[i]);
     }
 } else {
     for (let i=0 ; i <= sports.length-1 ;i+=2) {
         console.log(sports[i]);
     }
 }
 
 let myObj = {
     myName : 'Happy Peace',
     age : 20,
     pastJobs : {
         current : 'ABC',
         past1 : 'XYZ',
         past2 : 'DEF'
     },
     siblingNames : ['Deepak', 'Heena', 'Gigi', 'Yuri']
 };
 
 // if attribute has length > 5 then print it's value
 /**
  * we will print value of 
  *      myName
  *      pastJobs
  *      siblingNames
  *      
  */
 console.log('\nif attribute has length > 5 then print its value\n');
 for (const attr in myObj) {
     if (attr.length > 5) {
         console.log(myObj[attr]);
     }
 }
 
 for (const attr in myObj) {
     if (attr === 'state') {     // localCompare
         console.log(myObj[attr]);
     }
 }
 
 /**
  * num
  * 
  * if num=2
  *      print even index values
  * if num=5
  *      print odd index values
  * if num=15
  *      print all values of array
  */
 // const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 
 let num = 0;
 
 switch (num) {
     case 2:
         // print even index values
         for (let i=0 ; i <= sports.length-1 ;i+=2) {
             console.log(sports[i]);
         }
         break;
     case 5:
         // print odd index values
         for (let i=1 ; i <= sports.length-1 ;i+=2) {
             console.log(sports[i]);
         }
         break;
     case 15:
         // print entire array
         console.log(sports);
         break;
 }
 
 
 
 /** 
  * find the max number in the array
  * 
  * expected ans : 2
  * 
  * [11, 42, 12, 11, 67, 1, 32, 43, 71, 12];
  * 
  * [11] -> 11
  * [11, 42] -> 42
  * [42, 12] -> 42
  * [42, 11] -> 42
  * [42, 67] -> 67
  * [67, 1] -> 67
  * [67, 32] -> 67
  * [67, 71] -> 71
  * 
  * 
  */
 const numArray = [-1, -2, -3, -4];
 let max = numArray[0];
 /**
  * pick index-1-value
  * if (index-1-value > max)
  *      max = index-1-value
  * 
  * pick index-2-value
  * if (index-2-value > max)
  *      max = index-2-value
  * 
  * pick index-3-value
  * if (index-3-value > max)
  *      max = index-3-value
  * ... 
  * ... 
  * pick index-last-value
  * if (index-last-value > max)
  *      max = index-last-value
  */
 
 for (let index=1 ; index <= numArray.length-1 ; index++) {
     if (numArray[index] > max) {
         max = numArray[index];
     }
 }
 console.log(`\n\nmax -> ${max}`);
 
 let max1 = numArray[0];
 for (const num1 of numArray) {
     if (num1 > max1) {
         max1 = num1;
     }
 }
 console.log(`\n\nmax1 -> ${max1}`);
 
 let max2 = numArray[0];
 numArray.forEach(function (num2) {
     if (num2 > max2) {
         max2 = num2;
     }
 })
 console.log(`\n\nmax2 -> ${max2}`);
 
 
 
 
 
 
 
 