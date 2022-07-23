/**
 * Object -> represented by {}
 * 
 * values are stored in key-value pair
 *      key is also called as Property or attribute
 * 
 * Syntax:
 * 
 * let objectName = {}      // empty Object
 *      OR
 * let objectName = new Object();       // empty Object
 * 
 * 
 * let objectName = {
 *      key1:value1,
 *      key2:value2,
 *      key3:value3
 * }
 * 
 * keys have to be unique in an object, and datatype is a String
 * keys can be digit, string (with/without) spaces
 * when you print entire object or apply for-in loop on the object:
 *      Keys which digits are going to printed (or enter in for-in) first and in sorted order
 *      String keys are going to be printed as they are mentioned in the object
 * 
 * 
 */

 let myObj = {
    myName : 'Happy Peace',
    11 : true,
    state : 'New York',
    5 : 'five',
    age : 20,
    true : 22
};

console.log(myObj);
console.log('\nUsing for-in on myObj\n');
for (let prop in myObj) {
    console.log(prop);
    console.log(typeof prop);

    console.log(myObj[prop]);
    console.log(typeof myObj[prop]);
}

console.log('\nUsing for-in on myObj print only myName-attribute\n');
for (let prop in myObj) {
    if (prop.localeCompare('myName') === 0) {
        console.log(prop);
    }
}

console.log('\nUsing for-in on myObj print only first attribute\n');
let count = 0;
for (let prop in myObj) {
    console.log(prop);
    count++;
    if (count === 1) {
        break;
    }
}

/*
    let myObj = {
        myName : 'Happy Peace',
        11 : true,
        state : 'New York',
        5 : 'five',
        age : 20,
        true : 22
    }
};
*/

/**
 * To add key-values in the object
 */
myObj.gender = 'M';

console.log('\nprinting myObj\n');
console.log(myObj);

myObj[2] = 'two';                   // adding a pair (where key is a digit)

myObj['ssn number'] = 1111;         // adding a pair (where key is a spaced string)

myObj['isGraduated'] = 'true';


console.log('\nprinting myObj\n');
console.log(myObj);


console.log(myObj.isGraduated);         // printing value of isGraduated attributed
console.log(myObj['isGraduated']);      // printing value of isGraduated attributed

console.log(myObj['ssn number']);      // printing value of ssn number attributed

console.log(myObj[2]);                  // printing value of 2 attributed

/**
 * If the key is a digit or a spaced-string, to access the corresponding value,
 *      we have to use []
 */;


 /**
  * To delete the attribute from the object
  * operator - delete
  * 
  * operator will delete the attribute (if exists) OR if the attribute doesn't exist in the object
  *     returns true
  * 
  * Note -> delete operator changes the original object
  * 
  */

// Delete 'isGraduated' attribute and it's value
console.log(delete myObj.isGraduated);

console.log('\nprinting myObj\n');
console.log(myObj);

// Delete '2' attribute and it's value
let is2Deleted = delete myObj[2];
console.log(`\nis2Deleted -> ${is2Deleted}`);

console.log('\nprinting myObj\n');
console.log(myObj);

// Delete 'ssn number' attribute and it's value
// delete myObj['ssn number'];

console.log(delete myObj.abcd);

/**
 * If attribute doesn't exist in the object, and you try to fetch it's value
 *      object returns 'undefined'
 */

console.log('\nPrinting value of attribute which does not exist\n');
console.log(myObj.abcd);    

/**
 * To verify if an attribute is present in the object or not
 * operator -> in
 * 
 * if the mentioned attribute is exactly present
 *      operator results into true
 * otherwise
 *      operator results into false
 */

const is_abcd_present = 'abcd' in myObj;
console.log(`\nis "abcd" present as on the attributes in myObj -> ${is_abcd_present}`);

const is_myName_present = 'myName' in myObj;
console.log(`\nis "myName" present as on the attributes in myObj -> ${is_myName_present}`);

const is_MyName_present = 'MyName' in myObj;
console.log(`\nis "MyName" present as on the attributes in myObj -> ${is_MyName_present}`);