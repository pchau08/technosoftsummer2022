// const day = 'sunday';

// if (day === 'Monday') {
//     console.log('Plan course structure and go to coding meet up');
// } else if (day === 'Tuesday') {
//     console.log('Prepare Theory Videos');
// } else if (day === 'Wednesday') {
//     console.log('Hello there');
// } else if (day === 'Thursday' || day === 'Friday') {
//     console.log('Write code examples');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Invalid DAy');
// }

let countryName = 'UniTEd StATEs Of AMErICa';
let countryNameLowercase = countryName.toLowerCase();
let toExpectedCountryName = 'United states of america'.toLowerCase();
if (countryNameLowercase.localeCompare(toExpectedCountryName) === 0) {
    console.log(countryName.toUpperCase());
}

countryName = 'UniTEd StATEs Of AMErICa';
countryNameLowercase = countryName.toLowerCase();
if (countryNameLowercase.localeCompare(toExpectedCountryName) === 0) {
    console.log(countryName.toUpperCase());
} else {
    console.log('\nYou are not USA Citizen');
}
