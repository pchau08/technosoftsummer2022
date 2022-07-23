/**
 * verify 'Basketball' is present in the sports-array (ignore cases)
 * 
 * if we DON'T ignore case
 *      sports.includes('Basketball')
 * 
 * convert Basketball in lowercase
 * pick-index-0 
 *      convert index-0-value in lowercase
 *      if (index-0-value in lowercase === Basketball in lowercase)
 *          print 'Basketball is present in the array'
 *          stop for-loop (keyword -> break;)
 *          
 * pick-index-1 
 *      convert index-1-value in lowercase
 *      if (index-1-value in lowercase === Basketball in lowercase)
 *          print 'Basketball is present in the array'
 *          stop for-loop (keyword -> break;)
 * 
 * 0,1,2,3,4(lastIndex)
 * 
 */
 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 let basketballLowercase = 'Basketball'.toLowerCase();
 for (let num=0 ; num <= sports.length-1 ; num++) {
     let sportInLowercase = sports[num].toLowerCase();
     if (sportInLowercase.localeCompare(basketballLowercase) === 0) {
         console.log('Basketball is present in the array');
         break;      //  <- stops the loop
     }
 }
 /* 
     num=0
     sports[num] = 'Football'
     sportInLowercase = 'football'
     if ('football' localCompare ('basketball') === 0) {
         console.log('Basketball is present in the array');
         break;
     }
 
     num=1
     sports[num] = 'Soccer'
     sportInLowercase = 'soccer'
     if ('soccer' localCompare ('basketball') === 0) {
         console.log('Basketball is present in the array');
         break;
     }
 
     num=2
     sports[num] = 'BASKETBALL'
     sportInLowercase = 'basketball'
     if ('basketball' localCompare ('basketball') === 0) {
         console.log('Basketball is present in the array');
         break;
     }
 */
 /**
  * Loops:
  * 
  * for
  * while
  * do-while
  * 
  * for-of
  * for-in
  * forEach
  * 
  */
 
 /**
  * for-of
  * 
  * --> works with Array and String
  * 
  * picks index-0-value and assign to a variable
  * picks index-1-value and assign to a variable
  * picks index-2-value and assign to a variable
  * ...
  * ... 
  * picks index-last-value and assign to a variable
  * 
  * 
  * for (let varName of arrayName) {
  *      
  * }
  */
 console.log('\n\nUsing for-of loop with Array\n\n')
 const favSports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 
 for (const sName of favSports) {
     console.log(sName);
 }
 
 // print arrayValues from even-index
 
 console.log('\n\nPrint only even index in array problem\n\n')
 let counter = 0;
 for (const sName of favSports) {
     if (counter%2 == 0) {
         console.log(sName);
     }
     counter++;
 }
 
 console.log('\n\nUsing for-of loop with String\n\n');
 
 /**
  * for-of with String
 
  * picks index-0-value and assign to a variable
  * picks index-1-value and assign to a variable
  * picks index-2-value and assign to a variable
  * ...
  * ... 
  * picks index-last-value and assign to a variable
  * 
  */
 let myString = 'Hello World';
 for (const character of myString) {
     console.log(character);
 }
 console.log('\nUsing for loop for same result as for-of loop\n');
 for (let i=0 ; i <= myString.length-1 ; i++) {
     console.log(myString.charAt(i));
 }
 
 
 /**
  * for-in loop
  * 
  * --> works with Object
  * 
  * Syntax:
  * 
  * for (const varName in objectName) {
  * 
  * }
  * 
  * for 1st iteration of for-in loop , varName will be the first attribute/property in the object
  * for 2nd iteration of for-in loop , varName will be the second attribute/property in the object
  * for 3rd iteration of for-in loop , varName will be the third attribute/property in the object
  * ... 
  * ... 
  * for last iteration of for-in loop , varName will be the last attribute/property in the object
  * 
  */
 console.log('\nUsing for-in with Object\n');
 let myObj = {
     myName : 'Happy Peace',
     age : 20,
     state : 'New York',
     pastJobs : {
         current : 'ABC',
         past1 : 'XYZ',
         past2 : 'DEF'
     },
     siblingNames : ['Deepak', 'Heena', 'Gigi', 'Yuri']
 };
 
 for (const prop in myObj) {
     // console.log(prop);
     console.log(`${prop} -- ${myObj[prop]}`);       // prop = 'myName'
 }
 
 /**
  * forEach
  * 
  * --> works works with Array and function
  * 
  * 
  * arrayName.forEach(function (varName) {
  *      code in function of forEach loop
  * })
  * 
  * 
  * picks index-0-value and assign to a variable
  * picks index-1-value and assign to a variable
  * picks index-2-value and assign to a variable
  * ...
  * ... 
  * picks index-last-value and assign to a variable
  * 
  * 
  */
 
 
 console.log('\n\nUsing forEach loop with Array\n\n')
 // const favSports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 
 for (let counter = 0 ;  counter <= favSports.length-1 ; counter++) {
     console.log(favSports[counter]);
 }
 /*
     inside for loop, we write bunch of code lines
 */
 
 for (const sName of favSports) {
     console.log(sName);
 }
 /*
     inside for-of loop, we write bunch of code lines
 */
 
 favSports.forEach(function (sport) {
     console.log(sport);
 })
 /*
     inside forEach loop, we write function and function contains bunch of code lines
 */
 
 
 