

const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
let basketballLowercase = 'Basketball'.toLowerCase();
for (let num=0 ; num <= sports.length-1 ; num++) {
    let sportInLowercase = sports[num].toLowerCase();
    if (sportInLowercase.localeCompare(basketballLowercase) === 0) {
        console.log('Basketball is present in the array');
        break;      //  <- stops the loop
    }
}

const yourName = 'Happy Peace';
let surprise = '';
if (yourName.toLowerCase().startsWith('ha')) {
    let surprise = 'Good';
    console.log(surprise);
} else {
    let shock = 'Bad';
    console.log(shock);
}














