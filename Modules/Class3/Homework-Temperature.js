/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */




// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTemp2 = 69;
let kTemp1 = (fTemp2 + 459.67) * 5/9;
console.log(`\n${fTemp2}°F is equal to ${kTemp1}°K`)

// C -> F
// T(°F) = T(°C) × 9/5 + 32
let cTemp2 = 29;
let fTemp3 = cTemp2 * 9/5 + 32;
console.log(`\n${cTemp2}°C is equal to ${fTemp3}`);

// C -> K
// T(K) = T(°C) + 273.15
let cTemp3 = 31;
let kTemp2 = cTemp3 + 273.15;
console.log(`\n${cTemp3}°C is equal to ${kTemp2}`);

// K -> F
// T(°F) = T(K) × 9/5 - 459.67
let kTemp3 = 300;
let fTemp4 = kTemp3 * 9/5 - 459.67;
console.log(`\n${kTemp3}°K is equal to ${fTemp4}`);

// K -> C
// T(°C) = T(K) - 273.15
let kTemp4 = 300;
let cTemp4 = kTemp4 - 273.15;
console.log(`\n${kTemp4}°K is equal to ${cTemp4}`);