/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
 let countryName = 'USA USA';
 /**
  * use split('') -> ['U', 'S', 'A', ' ', 'U', 'S', 'A']
  * find the length of array (7)
  */
 
 
 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 /**
  * use split(' ') -> ['Health" , 'wAs', ......]
  * find the length of array -> X
  */
 
 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 'Wonderful day to you'
  * 
  */
 /**
  * split(' ') -> ['HAVE', 'A', 'GREAT' , 'DAY']
  * 
  * picked-index-0-value -> charAt(0) -> H
  * picked-index-0-value -> 
  * 
  * substring(0,1) -> h -> toUppercase() -> H
  * substring(1) -> ave
  * 
  */
 /**
  * 'have a great day'
  * 
  * split(' ') -> ['have' , 'a' , 'great' , 'day'] (words)
  * 
  * h - ave
  * words[0].substring(0,1) -> 'h' -> uppercase -> 'H'
  * words[0].substring(1) -> 'ave' -> lowercase -> 'ave'
  * 
  * words[0].substring(0,1).uppercase + words[0].substring(1).lowercase -> Have (word1)
  * words[1].substring(0,1).uppercase + words[1].substring(1).lowercase -> A (word2)
  * words[2].substring(0,1).uppercase + words[2].substring(1).lowercase -> Great (word3)
  * words[3].substring(0,1).uppercase + words[3].substring(1).lowercase -> Day (word4)
  * 
  * word1 + ' ' + word2 + ' ' + word3 + ' ' + word4
  * 
  * Have A Great Day
  * 
  */
 
 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
 /**
  * 'have a great day'
  * live a wonderful life
  * 
  * split(' ') -> ['have' , 'a' , 'great' , 'day'] (words)
  * split(' ') -> ['live' , 'a' , 'wonderful' , 'life'] (words)
  * 
  * words[0].substring(0,1).uppercase -> H (word1)
  * words[1].substring(0,1).uppercase -> A (word2)
  * words[2].substring(0,1).uppercase -> G (word3)
  * words[3].substring(0,1).uppercase -> D (word4)
  * 
  * word1 + word2 + word3 + word4
  * 
  * HAGD
  * 
  */
 /**
  * 
  * 'having a great day'
  * 
  * substring(0,1) -> h
  * substring(5,6) -> a
  * substring()
  */
 
 
 