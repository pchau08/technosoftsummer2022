let cityName = 'New YOrK ciTy';                 // treat as String datatype
console.log(`cityName -> ${cityName}\n`);

let cityName2 = new String('New YOrK ciTy');    // treat as Object datatype


console.log(typeof cityName);

console.log(typeof cityName2);

/**
 *  cityName == cityName2       // true
 * 
 *  cityName === cityName2      // false
 */

/**
 * length
 *      is a variable property of String class
 *      to get the number of character in the string (or to get length of string)
 */
// let cityName = 'New YOrK ciTy';  
let cityNameLength = cityName.length;
console.log(`\ncityName -> ${cityName}`);
console.log(`Length = ${cityNameLength}`);

/**
 * To convert String into Uppercase
 * function: toUpperCase()
 * 
 * toUpperCase() does NOT change the original value in the variable.
 */
let cityName_U = cityName.toUpperCase();
console.log(`\ncityName -> ${cityName}`);
console.log(`cityName_U = ${cityName_U}`);

/**
 * Replace original value with uppercase-value
 */
let cityName1 = 'New YOrK ciTy';
console.log(`\ncityName -> ${cityName1}`);
cityName1 = cityName1.toUpperCase();
console.log(`cityName -> ${cityName1}`);

/**
 * To convert String into Lowercase
 * function: toLowerCase()
 * 
 * toLowerCase() does NOT change the original value in the variable.
 */
let cityName_L = cityName.toLowerCase();
console.log(`\ncityName -> ${cityName}`);
console.log(`cityName_L = ${cityName_L}`);


// let cityName = 'New YOrK ciTy';
// does cityName start with 'n'

/** 
 * To find if the String starts with the exact given pattern
 * function: startsWith()
 * 
 * if String starts with the given pattern
 *      method returns true
 * otherwise
 *      method returns false
 * 
 */

// let cityName = 'New YOrK ciTy';
let cityNameStartsWith_n = cityName.startsWith('n');
console.log(`\ncityName -> ${cityName}`);
console.log(`is ${cityName} start with 'n' : ${cityNameStartsWith_n}`);

let cityNameStartsWith_New_Y = cityName.startsWith('New Y');
console.log(`\ncityName -> ${cityName}`);
console.log(`is ${cityName} start with 'New Y' : ${cityNameStartsWith_New_Y}`);

/**
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

