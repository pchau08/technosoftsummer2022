
						// Study guide Functions and Class




                        // * Functions
                        // * 
                        // * 
                        // * Before you create a function, ask below questions:
                        // * 1. what is the purpose of function?
                        // *      this helps in function name
                        // * 
                        // * 2. Do I need any input from user?
                        // *      If yes,
                        // *      a) How many inputs I need from user?
                        // * 
                        // * 3. Should I return any value back to user at the end of my function?
                        // *      If Yes,
                        // *          make sure to write return statement in the end of function
                        // *      else,
                        // *          NO return statement in the function
                        // * 
                        // * Good practice -> return the result of function instead printing it.
                        // * 
                        // * 
                        // * Syntax to create function:
                        * 
                        * #1:
                        * function funcName(<inputParameters>) {
                        *      code inside 
                        *      the function
                        *      return statement  --> ONLY IF you plan to return something back to user at the end of function (Q3)
                        * }
                        * 
                        * funcName -> name should refer the purpose of the function
                        * 
                        * <inputParameters> -> 
                        *      if we need input from user, 
                        *          we need to create variables in the parenthesis
                        *      else
                        *          parenthesis will be empty
                        * 
                        */
                       /**
                        * Create function to print Hello
                        * 
                        * 1. what is the purpose of function?
                        *      printHello
                        * 
                        * 2. Do I need any input from user?
                        *      No
                        * 
                        * 3. Should I return any value back to user at the end of my function?
                        *      No
                        */
                       function printHello() {         // defining the function
                           console.log('Hello');
                       }
                       
                       console.log('\nCalling printHello() function\n');
                       printHello();                   // calling the function
                       console.log('\nAfter calling printHello() function\n');
                       
                       /**
                        * Create a function to print 'Hello username'
                        * 
                        * 1. what is the purpose of function?
                        *      helloUser 
                        * 
                        * 2. Do I need any input from user?
                        *      1 (input represent username)
                        * 
                        * 3. Should I return any value back to user at the end of my function?
                        *      No
                        *      
                        */
                       function helloUser(userName) {      // username is the local-variable to this function (scope of username-variable is helloUser function)
                           console.log(`Hello ${userName}`);
                       }
                       
                       console.log('\nCalling helloUser() function\n');
                       helloUser('Gigi');                          // calling the function
                       console.log('\nAfter calling helloUser() function\n');
                       
                       console.log('\nCalling printHello() function\n');
                       printHello();                               // calling the function
                       console.log('\nAfter calling printHello() function\n');
                       
                       console.log('\nCalling helloUser() function\n');
                       helloUser('KAty');                          // calling the function
                       console.log('\nAfter calling helloUser() function\n');
                       
                       /**
                        * Create a function to add two numbers
                        * 
                        * 1. what is the purpose of function?
                        *       add2Nums
                        * 
                        * 2. Do I need any input from user?
                        *      2 (num1, num2)
                        * 
                        * 3. Should I return any value back to user at the end of my function?
                        *      Yes
                        *          return the result
                        *      
                        *  
                        */
                       function add2Nums(num1, num2) {
                           let res = num1 + num2;
                           return res;
                       }
                       
                       // function add2Nums(num1, num2) {
                       //     return num1+num2;
                       // }
                       
                       console.log('\nCalling add2Nums() function\n');
                       console.log(add2Nums(1, 4));                                    // calling the function
                       console.log('\nAfter calling add2Nums() function\n');
                       
                       let result = add2Nums(1, 4);                                    // returned value is going to be stored in the variable
                       
                       /**
                        * 
                        * Create a function to create abbreviation for a String
                        * 
                        * 
                        * 1. what is the purpose of function?
                        *       createAbbreviation / toAbbreviation
                        * 
                        * 2. Do I need any input from user?
                        *      1 (string)
                        * 
                        * 3. Should I return any value back to user at the end of my function?
                        *      1 (abbreviation)
                        *    
                        */
                       function toAbbreviation (sentence) {
                           let abbr = '';
                           const sentenceWords = sentence.toUpperCase().split(' ');
                           for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
                               abbr = abbr + sentenceWords[i].substring(0,1);
                           }
                           return abbr;
                       }
                       
                       console.log(toAbbreviation('have a great day'));
                       
                       const abc = 'yOu neVER WaLK alOne in liFe';
                       console.log(toAbbreviation(abc));
                       
                       
                       * #3 (Arrow function)
                        * let funcName = (<inputParameters>) => {
                        *      code inside 
                        *      the function
                        *      return statement  --> ONLY IF you plan to return something back to user at the end of function (Q3)
                        * }
                        * 
                        */
                       
                       let printHello2 = () => {         // defining the function
                           console.log('Hello');
                       }
                       
                       
                       let toAbbreviation = (sentence) => {
                           let abbr = '';
                           const sentenceWords = sentence.toUpperCase().split(' ');
                           for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
                               abbr = abbr + sentenceWords[i].substring(0,1);
                           }
                           return abbr;
                       }
                       
                       
                       console.log(toAbbreviation('have a great day'));
                       
                       const abc = 'yOu neVER WaLK alOne in liFe';
                       console.log(toAbbreviation(abc));
                       
                       
                       
                                       Creating a Class 
                       
                       
                       class MyMathFunctions {
                       
                       
                           add2Nums(num1, num2) {
                               let res = num1 + num2;
                               return res;
                           }
                       
                       }
                       module.exports = MyMathFunctions;
                       
                       
                       class MyGreetingFunctions {
                       
                       
                           printHello() {         // defining the function
                               console.log('Hello');
                           }
                       
                           /**
                            * Create HelloUser function in a way that userName ALWAYS print in the titlecase
                            */
                           helloUser(userName) {      // username is the local-variable to this function (scope of username-variable is helloUser function)
                               console.log(`Hello ${userName}`);
                           }
                       
                       }
                       module.exports = MyGreetingFunctions;
                       
                       
                       class MyStringFunctions {
                       
                       
                           toAbbreviation (sentence) {
                               let abbr = '';
                               const sentenceWords = sentence.toUpperCase().split(' ');
                               for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
                                   abbr = abbr + sentenceWords[i].substring(0,1);
                               }
                               return abbr;
                           }
                       
                       
                           /**
                            * to convert String into TitleCase
                            */
                           toTitleCase (sentence) {
                               let converted = '';
                               const sentenceWords = sentence.toLowerCase().split(' ');
                               for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
                                   converted = converted + sentenceWords[i].substring(0,1).toUpperCase() + sentenceWords[i].substring(1) + " ";
                               }
                               return converted.trim();
                           }
                       
                       
                       }
                       module.exports = MyStringFunctions;
                       
                       
                       
                       
                                       Calling a Class
                       
                       const MyStringFunctions = require('./MyStringFunctions');
                       
                       const MyGreetingFunctions = require('./MyGreetingFunctions');
                       
                       // import functionsConcept-2.js
                       
                       // const functionsConcept2 = require('../functionsConcept-2');
                       
                       /**
                        * If we want to access any function or variable from different class
                        * we need the object of class (Create object if not created already) 
                        * in which variable and function is present
                        * 
                        * Syntax of creating class object:
                        * 
                        * let objName = new ClassName();
                        * 
                        */
                       
                       // create abbreviation for 'live life KING size';
                       const msf = new MyStringFunctions();
                       
                       let output = msf.toAbbreviation('live life KING size');
                       console.log(output);
                       
                       
                       // Greeting to your user 'Love'
                       const mgf = new MyGreetingFunctions();
                       mgf.helloUser('Love');
                       
                       
                       // create abbreviation for 'good Morning';
                       msf.toAbbreviation('good Morning');
                       
                       // Greeting to your user 'gIGi'
                       const modifiedUserName = msf.toTitleCase('gIGi');
                       mgf.helloUser(modifiedUserName);
                       
                       
                       
                       
                       
                       
                       