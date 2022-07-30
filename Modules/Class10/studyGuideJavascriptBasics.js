
						Study guide Javascript Basics



                        Comments 
                            // anything after double-slash will be considered as comments (not code) on this line
                        
                        
                        Arithmetic (+, -, *, /, %, ++, --)
                        
                        num1--;     // post-decrement
                        --num1;     // pre-decrement
                        
                        
                        Comparison Operator (>=, <=, >, <, ===, !==)
                            Note: all Comparison result a boolean value
                        
                           === : to compare if two values are equal (in value and same datatype)
                          
                           == : to compare if two values are equal (in value)
                        
                        
                        Logical (&&, ||, !)
                         * 
                         * && -> and-operator
                         *      All combined conditions must be true, to get final result as true
                         *      if any one of the combined conditions are false, final result is false
                         * || -> or-operator
                         *      Any one of combined conditions has to be true to get final result as true
                         *      if all combined conditions are false, final result is false
                         * 
                         * ! -> not-operator
                         *      makes true into false and vice-versa
                        
                        Ternary operator (?:)
                         *      used in situation where one of two values will be assigned to variable depending upon the result of condition(s)
                        
                         Syntax:
                         * varName = condition(s) ? value-whichWillBeAssignedIfConditionResultIntoTrue : value-whichWillBeAssignedIfConditionResultIntoFalse
                        
                        
                        Advanced Assignment (+=, -=, *=, /=, %=)
                        
                        let num1 = 5;
                        // use increment operator to add 5 in num1
                        // num1++;
                        // num1++;
                        // num1++;
                        // num1++;
                        // num1++;
                        
                        num1 = num1 + 5;    // num1+=5
                        console.log(`num1 -> ${num1}`);     // 10
                        
                        num1-=2;    // num1 = num1 - 2;
                        console.log(`num1 -> ${num1}`);     // 8
                        
                        num1*=2;
                        console.log(`num1 -> ${num1}`);     // 16
                        
                        num1/=3;    // num1 = num1 / 3;
                        console.log(`num1 -> ${num1}`);     // 5.33
                        
                        num1=4.33;
                        num1%=5;
                        console.log(`num1 -> ${num1}`);     // 4.33
                        
                        
                        let cityName = 'New YOrK ciTy';                 // treat as String datatype
                        console.log(`cityName -> ${cityName}\n`);
                        
                        let cityName2 = new String('New YOrK ciTy');    // treat as Object datatype
                        
                        
                         * To convert String into Uppercase
                         * function: toUpperCase()
                         * 
                         * toUpperCase() does NOT change the original value in the variable.
                        
                         * To convert String into Lowercase
                         * function: toLowerCase()
                         * 
                         * toLowerCase() does NOT change the original value in the variable.
                        
                        * To find if the String starts with the exact given pattern
                         * function: startsWith()
                         * 
                         * if String starts with the given pattern
                         *      method returns true
                         * otherwise
                         *      method returns false
                        
                         * Example for ignoring pattern with StartsWith
                         */
                        
                        let startsWithPattern = 'neW y';
                        startsWithPattern = startsWithPattern.toUpperCase();    // NEW Y
                        let cityName_Uppercase = cityName.toUpperCase();        // NEW YORK CITY
                        let cityNameStartsWith_neW_Y = cityName_Uppercase.startsWith(startsWithPattern);
                        console.log(`\ncityName -> ${cityName}`);
                        console.log(`is ${cityName} start with 'neW Y' : ${cityNameStartsWith_neW_Y}`);
                        
                        // let res = cityName.toUpperCase().startsWith(startsWithPattern.toUpperCase());
                        // console.log(res);
                        
                        
                        
                        * To find if the String ends with the exact given pattern
                         * function: endsWith()
                         * input: 1
                         *      String
                         * return type:
                         *      boolean
                         *  
                         * if String ends with the given pattern
                         *      method returns true
                         * otherwise
                         *      method returns false
                        
                        
                        * To find a given pattern exactly present in the String
                         * function: includes()
                         * input: 1
                         *      String
                         * return type:
                         *      boolean
                         * 
                         * if the given pattern is exactly present in the String
                         *      method returns true
                         * otherwise
                         *      method returns false
                        
                        
                        * To replace a given pattern from String with another pattern/value
                         * function: replace()
                         * 
                         * input: 2 String
                         *      (replaceThis, replaceWith)
                         * return type:
                         *      String
                         * 
                         * -> replace() does NOT change the original value in the variable
                         * -> replace() replaces the data and return NEW string
                         * -> by default, replace ONLY the first occurrence. (use /g to replace all instances)
                         * -> by default, replace is Case sensitive (use /i to make it case insensitive)
                        
                        
                         * To join two or more Strings
                         * function: concat()
                         */
                        let str1 = 'Hello', str2=' ', str3 = 'World', str4='!';
                        
                        let str = str1 + str2 + str3 + str4;    // Hello World!
                        console.log(str);
                        
                        let strr = str1.concat(str2, str3, str4);
                        console.log(strr);
                        
                        
                         * To find the character at any given index
                         * function: charAt()
                         * 
                         * input: 1
                         *      number : index
                         * return type: 
                         *      string
                        
                        
                        * To find at which index the given pattern (FIRST OCCURRENCE) is exactly present in the String
                         * function: indexOf()
                         * 
                         * input: 1
                         *      String : pattern for which we want to find index
                         * return:
                         *      number : index where the pattern is present
                         * 
                         * 
                         * if the given pattern is exactly present in the String
                         *      method returns the index of FIRST OCCURRENCE of the starting of the pattern
                         * otherwise
                         *      method returns -1
                        
                        
                        * To find at which index the given pattern (LAST OCCURRENCE) is exactly present in the String
                         * function: lastIndexOf()
                         * 
                         * input: 1
                         *      String : pattern for which we want to find index
                         * return:
                         *      number : index where the pattern is present
                         * 
                         * 
                         * if the given pattern is exactly present in the String
                         *      method returns the index of LAST OCCURRENCE of the starting of the pattern
                         * otherwise
                         *      method returns -1
                        
                        
                        * To compare if two Strings are equal
                         * function: localCompare
                         * 
                         * If both Strings are equal, function returns 0
                         * If String is greater than another, function returns 1
                         * If String is lesser than another, function returns -1
                         * 
                         */
                        let stmt1 = 'New YorK CITY';
                        let stmt2 = 'CITY New YorK';
                        
                        const isEqual1 = stmt1.localeCompare(stmt2);
                        console.log(`is stmt1 equal to stmt2 = ${isEqual1}`);
                        
                         * functions:
                         * substring()
                         * To extract a part of string from a given string:
                         * substring(startIndex) -> to get string from start-index to end
                         * substring(startIndex, endIndex) -> to get string from start-index upto end-index (excluding end-index)
                         * 
                         * substring does NOT change the original value
                         * returns the extracted string
                         * 
                         * if the end-Index is missing or invalid -> functions returns upto the end
                         * if the start-Index is invalid -> functions returns upto the end
                         * if the start-Index and end-Index are invalid -> functions returns empty string
                         */
                        
                        
                        * convert below word into Titlecase
                         * 
                         * hello -> Hello
                         * hElLo -> Hello
                        
                        let word = 'laUgH';     // Laugh
                        
                        /**
                         * laUgH to lowercase (laugh)
                         * 
                         * laugh -> substring(0,1) -> l -> toUppercase -> L
                         * 
                         * laugh -> substring(1) -> augh
                         * 
                         * L + augh -> Laugh
                         * 
                         */
                        let wordLowercase = word.toLowerCase();
                        
                        let firstLetterUppercase = wordLowercase.substring(0, 1).toUpperCase();     // L
                        
                        let allLetters = wordLowercase.substring(1);        // augh
                        
                        let refinedWord = firstLetterUppercase.concat(allLetters);
                        
                        console.log(`\nConverted "${word}" into "${refinedWord}"`);
                        
                        
                        
                        * [] represents Array
                         * 
                         * Array : a datatype which can store one or more values
                        
                        * Array: values stored using the concept of index.;
                         * 
                         * first value goes to index-0
                         * second value goes to index-1
                         * third value goes to index-2 
                         * and so on
                         * 
                         * let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter'];
                         * 
                         * planets[0] -> represent the value at index-0
                         * 
                         * 
                         * planets[n] -> represent the value at index-n
                         * 
                         * last Index of Array = Array length -1
                        
                        
                        
                        
                        
                        Loops:
                             for
                         * 
                         * for (initialization ; condition ; increment/decrement) {
                         *      for-loop 
                         *      code block
                         *      code will keep executing until the condition is true
                         * }
                         * 
                         */
                        
                        console.log('\n\nfor-loop\n\n');
                        
                        for (let counter = 21 ; counter <= 20 ; counter++) {
                            console.log('Hello World!');
                        }
                        /**
                         * 1. create counter-variable with initial value
                         * 2. check if condition is true
                         * 3. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code
                         * 4. once all for-loop code is executed, increment the counter-value
                         * 5. check if condition is true
                         * 6. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code
                         * 7. once all for-loop code is executed, increment the counter-value
                         * 8. check if condition is true
                         * 9. if true, enter the for-loop and execute code ; if-false do not enter in for-loop and move further in code
                         * 10. once all for-loop code is executed, increment the counter-value
                         * 11. and so on ...
                        
                        function howMany(selectObject) {
                          let numberSelected = 0;
                          for (let i = 0; i < selectObject.options.length; i++) {
                            if (selectObject.options[i].selected) {
                              numberSelected++;
                            }
                          }
                          return numberSelected;
                        }
                        
                        
                        
                              while
                        
                        let n = 0;
                        let x = 0;
                        while (n < 3) {
                          n++;
                          x += n;
                        }
                        
                        
                              do-while
                        let i = 0;
                        do {
                          i += 1;
                          console.log(i);
                        } while (i < 5);
                        
                              
                              for-of
                        
                        for (variable of object)
                          statement
                        
                        const arr = [3, 5, 7];
                        arr.foo = 'hello';
                        
                        for (const i in arr) {
                          console.log(i); // logs "0", "1", "2", "foo"
                        }
                        
                        for (const i of arr) {
                          console.log(i); // logs 3, 5, 7
                        }
                        
                        
                        
                              for-in
                        
                        for (variable in object)
                          statement
                        
                        function dump_props(obj, obj_name) {
                          let result = '';
                          for (let i in obj) {
                            result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
                          }
                          result += '<hr>';
                          return result;
                        }
                        
                              forEach
                        
                        
                            Objects
                        
                         * Object -> represented by {}
                         * 
                         * Syntax:
                         * 
                         * let objectName = {
                         *      attribute1 : attribute1Value,
                         *      attribute2 : attribute2Value,
                         *      attribute3 : attribute3Value
                         * }
                         * 
                         * -> attribute names has to be unique in the object
                        
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
                        
                        // print name myObj - object
                        console.log('\nPrinting myObj\n');
                        console.log(myObj);
                        
                        console.log('\nPrint value of name-attribute in myObj-object\n');
                        console.log(myObj.myName);          // using dot-operator getting value of attribute
                        console.log(myObj['myName']);       // using square-operator getting value of attribute
                        
                        console.log('\nPrint value of pastJobs-past2-attribute in myObj-object\n');
                        console.log(myObj.pastJobs.past2);                // using dot-operator
                        console.log(myObj['pastJobs']['past2']);          // using square-operator
                        
                        console.log('\nPrint first value in siblings-attribute in myObj-object\n');
                        console.log(myObj.siblingNames[0]);           // using dot-operator
                        
                        
                        