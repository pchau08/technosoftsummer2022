/**
 * check for soya milk and if it's not expiring within 7 days
 *      buy 2 soya milk
 *      and buy 1 bread
 * otherwise check for almond milk
 *      buy 1 almond milk
 * otherwise check for regular milk and not expiring in 3 days
 *      buy regular milk
 * otherwise
 *      call at home
 * 
 * 
 * isSoyaMilkPresent && isSoyaMilkExpiration > 7
 *      buy 2 soya milk
 *      buy 1 bread
 * 
 * 
 * isSoyaMilkPresent && isSoyaMilkExpiration > 7    -> false
 *      buy 2 soya milk
 *      buy 1 bread
 * isAlmondMilkPresent
 *      buy 1 almond milk
 * 
 * 
 * isSoyaMilkPresent && isSoyaMilkExpiration > 7    -> false
 *      buy 2 soya milk
 *      buy 1 bread
 * isAlmondMilkPresent                              --> false
 *      buy 1 almond milk
 * isRegularMilkPresent && isRegularMilkExpiration > 3
 *      buy regular milk
 * 
 * 
 * isSoyaMilkPresent && isSoyaMilkExpiration > 7                -> false
 *      buy 2 soya milk
 *      buy 1 bread
 * isAlmondMilkPresent                                          -> false
 *      buy 1 almond milk
 * isRegularMilkPresent && isRegularMilkExpiration > 3          -> false
 *      buy regular milk
 * if all above conditions are false
 *      call at home
 * 
 * 
 * 
 */
/**
 * check for soya milk and if it's not expiring within 7 days
 *      buy 2 soya milk
 *      and buy 1 bread
 * check time if past 12
 *      say Good Afternoon
 * 
 * 
 * isSoyaMilkPresent && isSoyaMilkExpiration > 7
 *      buy 2 soya milk
 *      buy 1 bread
 * time >= 12
 *      say "Good Afternoon"
 * 
 */
/**
 * Conditional Code Blocks (Conditional loop)
 *  1. if-else block
 *  2. switch block
 *  
 * when we have different actions to do (code to execute) depending upon condition(s)
 * 
 * 
 */

/**
 * Syntax for if-block:
 * 
 * if (condition(s)) {
 *      if-block
 *      code will execute if condition(s) result into true
 * }
 * 
 * 
 */
 if (2 === 12) {
    console.log("Hello World!");
}
let countryName = 'UniTEd StATEs Of AMErICa';
/**
 * if country name is United states of america, print the country name in uppercase
 * 
 * countryName == 'United states of america' (ignore case)
 *      countryName -> lowercase -> 'united states of america'
 *      United states of america -> lowercase -> united states of america
 *      to compare -> localCompare (cannot ignore cases)
 * 
 */
let countryNameLowercase = countryName.toLowerCase();
let toExpectedCountryName = 'United states of america'.toLowerCase();
if (countryNameLowercase.localeCompare(toExpectedCountryName) === 0) {
    console.log(countryName.toUpperCase());
}

// if (countryName.toLowerCase() === 'United states of america'.toLowerCase()) {
//     console.log(countryName.toUpperCase());
// }

/**
 * if country name is United states of america, print the country name in uppercase
 * if countryName is not United states of america, print "You are not USA Citizen"
 * 
 * 
 * 
 * countryName == 'United states of america' (ignore case)
 *      countryName -> lowercase -> 'united states of america'
 *      United states of america -> lowercase -> united states of america
 *      to compare -> localCompare (cannot ignore cases)
 * 
 */
/**
 * Syntax:
 * 
 * if (condition(s)) {
 *      if block
 *      code will execute if condition(s) result into true
 * } else {
 *      else block
 *      code will execute if condition(s) result into false
 * }
 */
countryName = 'UiTEd StATEs Of AMErICa';
countryNameLowercase = countryName.toLowerCase();
if (countryNameLowercase.localeCompare(toExpectedCountryName) === 0) {
    console.log(countryName.toUpperCase());
} else {
    console.log('\nYou are not USA Citizen');
}

/**
 * 
 * mon, thur and there no meeting
 *      work from home
 * other weekdays or there is meeting
 *      work from office
 * weekends
 *      enjoy
 * 
 * var dayName = '';
 * var isMeeting = true/false;
 * 
 * 
 * ('dayName === 'Mon' or dayName === 'Thu) && isMeeting !== true
 *      I can wfh
 * (dayName == Tue or dayName == Wed or dayName == Fri) or isMeeting === true
 *      I should go to office
 * dayName === Sun or dayName === Sat
 *      I must Enjoy!!
 * otherwise
 *      Incorrect dayName
 * 
 */
/**
 * if - else if - else block
 */

console.log('Before if-else block');

var dayName = 'mon';
var isMeeting = true;   // or false

if ((dayName === 'mon' || dayName === 'thu') && !isMeeting) {
    console.log('I can work from home today');
} else if (dayName === 'tue' || dayName === 'wed' || dayName === 'fri' || isMeeting) {
    console.log('I need to go to office today');
} else if (dayName === 'sat' || dayName === 'sun') {
    console.log('I must enjoy');
} else {
    console.log('Incorrect dayName');
}

console.log('After if-else block');

const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];

// if 'swimming' is not mentioned as one of the sports, add in the array 
// if it's mentioned, print the index at which it is present

/**
 * array includes swimming
 *      print the index of swimming (using indexOf)
 * else
 *      use push-function to add swimming in the array
 */
if (sports.includes('swimming')) {
    console.log(sports.indexOf('swimming'));
} else {
    sports.push('swimming');
}

// print sports-array ; will swimming be part of sports-list
console.log(sports);

/*
    if num = 2 , print (num is two)
    if num is equal to 5, print "num is five")
    if num is equal to 15, print "num is fifteen")
    if num is equal to 10, print "num is ten")
    if num is equal to 20, print "num is twenty")
 */
let num = 10;
if (num === 2) {
    console.log(('num is two'));
} else if (num === 5) {
    console.log(('num is five'));
} else if (num === 15) {
    console.log(('num is fifteen'));
} else if (num === 10) {
    console.log(('num is ten'));
} else if (num === 20) {
    console.log(('num is twenty'));
} else {
    console.log(`num is ${num}`);
}

/**
 * switch-block
 * 
 * 1. all conditions are related to only ONE variable
 * 2. all conditions are comparing equals
 * 3. for every block, we must have only one condition
 * 
 * Syntax:
 * 
 * switch (num) {
 *      case 2:
 *          case block
 *          code here will execute if num===2
 *          break;      // defines as last line for the case block
 *      case 5:
 *          case block
 *          code here will execute if num===5
 *          break;      // defines as last line for the case block
 *      case 15:
 *          case block
 *          code here will execute if num===15
 *          break;      // defines as last line for the case block
 *      case 10:
 *          case block
 *          code here will execute if num===10
 *          break;      // defines as last line for the case block
 *      case 20:
 *          case block
 *          code here will execute if num===20
 *          break;      // defines as last line for the case block
 *      default:
 *          run this code if num is NOT equals to any above cases
 * }
 * 
 */
console.log('\nswitch block\n');

switch (num) {
    case 2:
        console.log('num is two');
        break;
    case 5:
        console.log('num is five');
        break;
    case 10:
        console.log('num is ten');
        break;
    case 15:
        console.log('num is fifteen');
        break;
    case 20:
        console.log('num is twenty');
        break;
    default:
        console.log(`num is ${num}`);
        break;
}

/*
    if name is happy, print "good name"
    if name is joy, print the name and it's length.
                    print "your name is too short"
    if name is john, print name in uppercase
    if name is not from above list, print "you have a different name than we expected"

    myName === 'happy'
        print "good name"
    myName === 'joy'
        print the name and it's length.
        print "your name is too short"
    myName === 'john'
        print name in uppercase
    otherwise
        print "you have a different name than we expected"
*/
console.log('\nProblem - 1\n');

var myName = 'jOhn';

console.log('Using if-block');
const myNameLowercase = myName.toLowerCase();
if (myNameLowercase.localeCompare('happy') === 0) {
    console.log('Good name');
} else if (myNameLowercase.localeCompare('joy') === 0) {
    console.log(`name: ${myName}\nlength: ${myName.length}\nYour name is too short`);
} else if (myNameLowercase.localeCompare('john') === 0) {
    console.log(myName.toUpperCase());
} else {
    console.log('you have a different name than we expected');
}

console.log('\nUsing switch-block');
switch (myName.toLowerCase()) {
    case 'happy':       // myName is equals to happy, go into case block
        console.log('Good name');
        break;
    case 'joy':
        console.log(`name: ${myName}\nlength: ${myName.length}\nYour name is too short`);
        break;
    case 'john':
        console.log(myName.toUpperCase());
        break;
    default:
        console.log('you have a different name than we expected');
}

/*
    day
    if day is Mon, monday -> print ("Today is the Technosoft class")
    if day is tue -> print ("Today is self learning day")
    if day is Wed -> print ("Today is the Technosoft class")    
    if day is Thu -> print ("Today is self learning day")
    if day is Fri -> print ("Today is the Technosoft class")
    if day is Sat -> print ("Today is lab session day")
    if day is sun -> print ("No study today")
    Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
    
    User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY
 */
let weekdayName = 'MON'
var AfterUpperDayName = weekdayName.toUpperCase()
if (AfterUpperDayName.localeCompare('MON') === 0) {
    console.log('Today is the Technosoft Class')
} else if (AfterUpperDayName.localeCompare('TUE') === 0) {
    console.log('Today is self learning day')
} else if (AfterUpperDayName.localeCompare('SAT') === 0) {
    console.log('Today is Lab Session Day')
} else if (AfterUpperDayName.localeCompare('SUN', 'SUDNAY') === 0) {
    console.log('No Study Today')
} else {
    console.log('That is not a valid day of the week')
}

let myDay = 'MONDAY'
switch(myDay.toLowerCase()) {
    case 'mon':
    case 'monday':
    case 'wed':
    case 'wednesday':
    case 'fri':
    case 'friday':
        console.log("Today is the Technosoft class");
        break;
    case 'tue':
    case 'tuesday':
    case 'thu':
    case 'thursday':
        console.log("Today is self learning day");
        break;
    case 'sat':
    case 'saturday':
        console.log("Today is lab session day")
        break;
    case 'sun':
    case 'sunday':
        console.log("No study today")
        break;
    default: console.log('Entered day-value is not valid');
}








