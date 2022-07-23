/**
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
 
 /**
  * To slice out a piece of string from given string
  * functions:
  * substring()
  * slice()
  * substr()
  * 
  * 
  * let stmt1 = 'New YorK CITY';
  * give me value from index-1 to index-4 (BUT do not include index-4) -> 'ew '
  * 
  * give me value from index-1 -> 'ew YorK CITY'
  * 
  * give me value from index-0 to index-1 (BUT do not include index-1) -> 'N'
  * 
  * give me value from index-last -> 'Y'
  * 
  * 
  * 
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
 
 let mySentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 
 const subString1_4 = mySentence.substring(1,4);
 console.log(`\nmySentence -> ${mySentence}`);
 console.log(`substring from 1 to 4 -> ${subString1_4}`);
 
 const subString0_1 = mySentence.substring(0,1);
 console.log(`\nsubstring from 0 to 1 -> ${subString0_1}`);
 
 // print the last character present in mySentence using substring
 /**
  * find the length
  * substring(len-1)
  */
 // let mySentenceLength = mySentence.length;
 // const lasCharacter = mySentence.substring(mySentenceLength - 1);
 
 const lasCharacter = mySentence.substring(mySentence.length - 1);
 console.log(`\nlast character in mySentence -> ${lasCharacter}`);
 
 
 const mySentence2 = "Heplo";
 
 const myResult2 = mySentence2.substring(2, 20);
 console.log(`\nmyResult2 -> ${myResult2}`);
 
 const myResult3 = mySentence2.substring(-2, 4);    // (0, 4)    Hell
 console.log(`\nmyResult3 -> ${myResult3}`);
 
 const myResult4 = mySentence2.substring(-2, -4);    // (0, 0) 
 console.log(`\nmyResult4 -> ${myResult4}`);
 
 const myResult5 = mySentence2.substring(3, 1);    // (1, 3)
 console.log(`\nmyResult5 -> ${myResult5}`);
 
 /**
  * slice(start, end)
  * 
  */
 // Heplo
 console.log('\nUsing slice-function');
 const myResult6 = mySentence2.slice(1,3);
 console.log(`\nmyResult6 -> ${myResult6}`);
 
 const myResult7 = mySentence2.slice(1);
 console.log(`\nmyResult7 -> ${myResult7}`);
 
 
 const myResult8 = mySentence2.slice(-3,-1);
 console.log(`\nmyResult8 -> ${myResult8}`);
 
 /**
  * substr(start, length)
  * 
  * 
  */
 console.log('\nUsing substr-function');
 const myResult9 = mySentence2.substr(2, 3);   // Heplo
 console.log(`\nmyResult9 -> ${myResult9}`);
 
 /**
  * To split the given string from a specific point in to multiple strings
  * function: split()
  *  returns -> Array
  * 
  * 'New York City'
  * 
  * 'New' 'York' 'City'
  * 
  */
 let cityName = 'New York City iS tHe BEST CIty iN THE ENTiRe WorLD YOU can CHeck';
 
 const cityName_split_o = cityName.split('o');
 console.log(`\nsplit by "o" -> ${cityName_split_o}`);
 
 
 const cityName_split_space = cityName.split(' ');
 console.log(`\nsplit by " " -> ${cityName_split_space}`);
 
 const cityName_split_nothing = cityName.split('');
 console.log(`\nsplit by "" -> ${cityName_split_nothing}`);
 
 const cityName_split_or = cityName.split('or');
 console.log(`\nsplit by "or" -> ${cityName_split_or}`);

//  split by "o" -> New Y,rk City iS tHe BEST CIty iN THE ENTiRe W,rLD YOU can CHeck

// split by " " -> New,York,City,iS,tHe,BEST,CIty,iN,THE,ENTiRe,WorLD,YOU,can,CHeck

// split by "" -> N,e,w, ,Y,o,r,k, ,C,i,t,y, ,i,S, ,t,H,e, ,B,E,S,T, ,C,I,t,y, ,i,N, ,T,H,E, ,E,N,T,i,R,e, ,W,o,r,L,D, ,Y,O,U, ,c,a,n, ,C,H,e,c,k

// split by "or" -> New Y,k City iS tHe BEST CIty iN THE ENTiRe W,LD YOU can CHeck
 
 
 
 /**
  * Make sure the user enters full name
  * print result as true or false
  * 
  * 
  * if user entered full name (firstname and lastname) , print true
  * otherwise, print false
  */
 let fullName = 'happy Peace';
 /**
  * 'happy Peace'
  * split() by ' ' -> ['happy' , 'Peace']
  * ['happy' , 'Peace'] -> length
  * length === 2     (print true)
  * 
  * 'happy Peace laugh'
  * split() by ' ' -> ['happy' , 'Peace' , 'laugh]
  * ['happy' , 'Peace' , 'laugh'] -> length
  * length === 2     (print false)
  * 
  * 'happy'
  * split() by ' ' -> ['happy']
  * ['happy'] -> length
  * length === 2     (print false)
  * 
  */
 let arrayAfterSplit = fullName.split(' ');
 let arrayLengthCheck = arrayAfterSplit.length === 2;
 console.log(`\ndoes user entered fullname : ${arrayLengthCheck}`);
 
 /**
  * convert below word into Titlecase
  * 
  * hello -> Hello
  * hElLo -> Hello
  */
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
  console.log(wordLowercase);                                           //laugh
  
  let firstLetterUppercase = wordLowercase.substring(0, 1).toUpperCase();     // L
  console.log(firstLetterUppercase);
  
  let allLetters = wordLowercase.substring(1);        // augh
  console.log(allLetters);
  
  let refinedWord = firstLetterUppercase.concat(allLetters);
  console.log(refinedWord);                           Laugh
  
  console.log(`\nConverted "${word}" into "${refinedWord}"`); //Laugh
 