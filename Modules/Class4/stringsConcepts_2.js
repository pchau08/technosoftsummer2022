/**
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
 * 
 */
 let cityName = 'New YOrK ciTy';

 let cityNameEndsWith_ty = cityName.endsWith('ty');
 console.log(`\ncityName -> ${cityName}`);
 console.log(`is ${cityName} ends with 'ty' : ${cityNameEndsWith_ty}`);  //false
 
 let cityNameEndsWith_ciT = cityName.endsWith('ciT');
 console.log(`is ${cityName} ends with 'ciT' : ${cityNameEndsWith_ciT}`); //false
 
 let cityNameEndsWith_K_ciTy = cityName.endsWith('K ciTy');
 console.log(`is ${cityName} ends with 'K ciTy' : ${cityNameEndsWith_K_ciTy}`); //true
 
 /**
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
  */
 // let cityName = 'New YOrK ciTy';
 
 let cityNameIncludes_rK_ci = cityName.includes('rK ci');
 console.log(`\ncityName -> ${cityName}`);
 console.log(`is ${cityName} contains with 'rK ci' : ${cityNameIncludes_rK_ci}`);
 
 /**
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
  */
 let sentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 let sentence_Replace_a_Z = sentence.replace('a', 'Z');
 console.log(`\nsentence -> ${sentence}`);
 console.log(`sentence_Replace_a_Z -> ${sentence_Replace_a_Z}`);
 
 let sentence_Replace_All_a_Z = sentence.replace(/a/g, 'Z');
 console.log(`sentence_Replace_All_a_Z -> ${sentence_Replace_All_a_Z}`);  // /a/g the g replaces all
 
 // replace all a/A with Z
 let sentence_Replace_All_a_Z_IgnoreCase = sentence.replace(/a/gi, 'Z');
 console.log(`sentence_Replace_All_a_Z_IgnoreCase -> ${sentence_Replace_All_a_Z_IgnoreCase}`);
 
 /**
  * To join two or more Strings
  * function: concat()
  */
 let str1 = 'Hello', str2=' ', str3 = 'World', str4='!';
 
 let str = str1 + str2 + str3 + str4;    // Hello World!
 console.log(str);
 
 let strr = str1.concat(str2, str3, str4);
 console.log(strr);
 
 /**
  * To remove extra spaces from the String
  *      before the 1st character of String
  *      and, after the last-character of the String
  * function: trim()
  * 
  * trim() does NOT change the original value in the variable
  * 
  * 
  * 
  *  'Hello   sWorld  hav    a   good day.'      ->  'Hello   sWorld  hav    a   good day.'
  * 
  *  '       Hello   sWorld  hav    a   good day.'  -> 'Hello   sWorld  hav    a   good day.'
  *  
  *  'Hello   sWorld  hav    a   good day.      '    -> 'Hello   sWorld  hav    a   good day.'
  * 
  *  '     Hello   sWorld  hav    a   good day.        ' -> 'Hello   sWorld  hav    a   good day.'
  * 
  */
 let sent = '     Hello   sWorld  hav    a   good day.        ';
 
 let sent_AfterTrim = sent.trim();
 // sent = sent.trim();
 
 console.log('\n*'.concat(sent, '*'));     // *     Hello   sWorld  hav    a   good day.        *
 
 console.log('*'.concat(sent_AfterTrim, '*'));   // *Hello   sWorld  hav    a   good day.*
 
 /**
  * To increase length of the String by adding given character
  * function: 
  *      padStart() -> adds padding in the beginning
  *      padEnd() -> adds padding in the end
  */
 /**
  * padStart() -> adds padding in the beginning to increase the length of String
  * 
  * input: 2 
  *      number : length of string after padding
  *      String : character we would like to use for padding
  * return type:
  *      String : String after padding     
  * 
  * 
  * Hello
  * padStart(7, *)
  * **Hello
  * 
  * Hello
  * padStart(4, *)
  * Hello
  */
 let padString = 'Hello';
 let padString_AfterPadding = padString.padStart(7, '*');
 
 console.log(`\npadString -> ${padString}`);
 console.log(`padString_AfterPadding -> ${padString_AfterPadding}`);
 
 let padString_AfterPadding2 = padString.padStart(4,'*');
 console.log(`padString_AfterPadding2 -> ${padString_AfterPadding2}`);
 
 /**
  * padEnd() -> adds padding in the ending to increase the length of String
  * 
  * input: 2 
  *      number : length of string after padding
  *      String : character we would like to use for padding
  * return type:
  *      String : String after padding     
  * 
  * 
  * Hello
  * padEnd(7, *)
  * Hello**
  * 
  * Hello
  * padEnd(4, *)
  * Hello
  */
 let padString_AfterPadding_End = padString.padEnd(8, '^&');
 
 console.log(`\npadString -> ${padString}`);
 console.log(`padString_AfterPadding_End -> ${padString_AfterPadding_End}`);
 
 let padString_AfterPadding_End2 = padString.padStart(4,'*');
 console.log(`padString_AfterPadding_End2 -> ${padString_AfterPadding_End2}`);
 
 /**
  * Hello World
  * 
  * length = 11
  * first index = 0
  * last index = 10
  * 
  * 
  * Happy
  * 
  * length = 5
  * first index = 0
  * last index = 4
  * 
  * last Index = length - 1
  * 
  * datatype of index -> number
  * 
  */
 
 /**
  * To find the character at any given index
  * function: charAt()
  * 
  * input: 1
  *      number : index
  * return type: 
  *      string
  * 
  * 
  */
 
 let mySentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 
 // which character is at index-23
 let charAt23 = mySentence.charAt(23);
 console.log(`\nmySentence -> ${mySentence}`);
 console.log(`Character present at index-23 -> ${charAt23}`);
 
 // index is beyond the scope
 let charAt200 = mySentence.charAt(200);
 console.log(`Character present at index-200 -> ${charAt200}`);
 
 // invalid index value
 let charAt_4 = mySentence.charAt(-4);
 console.log(`Character present at index -4 -> ${charAt_4}`);
 
 /**
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
  * 
  * 
  * Hello World Hello Dear Hello Boss Hello Family
  * indexOf(e)   -> 1
  * 
  * indexOf(E)   -> -1
  * 
  * indexOf(l)   -> 2
  * 
  * indexOf(ell) -> 1
  * 
  * indexOf(rld he) -> -1
  * 
  * indexOf(rld He) -> 
  * 
  */
 let helloMsgs = 'Hello World Hello Dear Hello Boss Hello Family';
 
 let indexof_e = helloMsgs.indexOf('e');
 let indexof_E = helloMsgs.indexOf('E');
 let indexof_l = helloMsgs.indexOf('l');
 let indexof_ell = helloMsgs.indexOf('ell');
 let indexof_rld_he = helloMsgs.indexOf('rld he');
 let indexof_rld_He = helloMsgs.indexOf('rld He');
 
 console.log(`\nhelloMegs -> ${helloMsgs}`);
 console.log(`indexof_e -> ${indexof_e}`);
 console.log(`indexof_E -> ${indexof_E}`);
 console.log(`indexof_l -> ${indexof_l}`);
 console.log(`indexof_ell -> ${indexof_ell}`);
 console.log(`indexof_rld_he -> ${indexof_rld_he}`);
 console.log(`indexof_rld_He -> ${indexof_rld_He}`);
 
 
 
 /**
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
  * 
  * 
  * Hello World Hello Dear Hello Boss Hello Family
  * lastIndexOf(e)   -> e (in last Hello)
  * 
  * lastIndexOf(E)   -> -1
  * 
  * lastIndexOf(l)   -> l (in family)
  * 
  * lastIndexOf(ell) -> ell (in last Hello)
  * 
  * lastIndexOf(rld he) -> -1
  * 
  * lastIndexOf(rld He) -> 8
  * 
  */
 
 let lastIndexof_e = helloMsgs.lastIndexOf('e');
 let lastIndexof_E = helloMsgs.lastIndexOf('E');
 let lastIndexof_l = helloMsgs.lastIndexOf('l');
 let lastIndexof_ell = helloMsgs.lastIndexOf('ell');
 let lastIndexof_rld_he = helloMsgs.lastIndexOf('rld he');
 let lastIndexof_rld_He = helloMsgs.lastIndexOf('rld He');
 
 console.log(`\nhelloMegs -> ${helloMsgs}`);
 console.log(`lastIndexof_e -> ${lastIndexof_e}`);
 console.log(`lastIndexof_E -> ${lastIndexof_E}`);
 console.log(`lastIndexof_l -> ${lastIndexof_l}`);
 console.log(`lastIndexof_ell -> ${lastIndexof_ell}`);
 console.log(`lastIndexof_rld_he -> ${lastIndexof_rld_he}`);
 console.log(`lastIndexof_rld_He -> ${lastIndexof_rld_He}`);