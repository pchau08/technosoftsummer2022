// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

// const dolphinsScore = (96 + 108 + 89) / 3; 
// const koalasScore = (88 + 91 + 110) / 3; 
// console.log(dolphinsScore);
// console.log(koalasScore);
// const minimumScore = 100;


// if (dolphinsScore > koalasScore) {
//     console.log(`The Dolphins have a high score of ${dolphinsScore} which is higher than the Koalas score which is ${koalasScore}`);
// } else if (koalasScore > dolphinsScore) {
//     console.log(`The Koalas have a high score of ${koalasScore} which is higher than the Dolphins score which is ${dolphinsScore}`);
// } else if (koalasScore === dolphinsScore) {
//     console.log(`They have tied`);
// }


// Bonus 1
const dolphinsScore = (97 + 112 + 97) / 3; 
const koalasScore = (109 + 95 + 98) / 3; 
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`The Dolphins have a high score of ${dolphinsScore} which is higher than the Koalas score which is ${koalasScore}. Dolphins win!!!!`);
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
    console.log(`The Koalas have a high score of ${koalasScore} which is higher than the Dolphins score which is ${dolphinsScore}. Koalas win!!!!`);
} else if (koalasScore === dolphinsScore && dolphinsScore >= 100 && koalasScore >= 100) {
    console.log(`They have tied`);
} else {
    console.log(`No one wins the trophy`);
}

let happyName = 'happy';
let joyName = 'joy';
let johnName = 'John';

if (happyName === 'appy') {
    console.log(`Good name`);
} else if (joyName ===  'oy') {
    console.log(joyName.length + `\n your name is too short`);
} else if (johnName === 'John') {
    console.log(johnName.toUpperCase());
} else {
    console.log('You have a differenamt name than we expected');
}



