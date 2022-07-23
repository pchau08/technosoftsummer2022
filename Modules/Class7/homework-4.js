// Due date: Fri (Jul 15) eod

/**
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */

 const studentScore = 40;
 const maxScore = 50;
 const studentPercentage = (studentScore / maxScore) * 100;

 if (studentPercentage <= 100 && studentPercentage >= 91) {
    console.log(`Grade - A`);
 } else if (studentPercentage <= 90 && studentPercentage >= 81) {
    console.log(`Grade - B`);
 } else if (studentPercentage <= 80.99 && studentPercentage >= 71) {
    console.log(`Grade - C`);
 } else if (studentPercentage <= 70.99 && studentPercentage >= 61) {
    console.log(`Grade - D`);
 } else if (studentPercentage <= 60.99 & studentPercentage >= 51) {
    console.log(`Grade - E`);
 } else if (studentPercentage <= 50.99 && studentPercentage >= 0) {
    console.log(`Grade - F`);
 } else {
    console.log(`Invalid student score`);
 }

 
/**
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */

 let num = 10;
 if (num % 5 === 0) {
     console.log("divisible by 5");
 } else if (num % 3 === 0) {
     console.log("divisible by 3");
 } else if (num % 5 === 0 && num % 3 === 0) {
     console.log("divisible by 5 and 3");
 } else {
     console.log(`${num} ->'NOT divisible by 5 and by 3' `);
 }
 

/**
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

 let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 if (planets.includes('Earth')) {
   console.log("Earth is mentioned in expected index");
 } else if (planets.unshift('Earth')) {
   console.log(planets);
 }


/**
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */


 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 if (sports[2].includes('BASKETBALL')) {
    console.log("BASKETBALL is present at index-2");
} else if (sports[2] !== sports.localeCompare('BASKETBALL') === 0 ) {
    console.log("BASKETBALL is not mentioned in the sports array")
} else if (sports.splice(2,1,'BASKETBALL')) {
    console.log(`${sports}`);
}
