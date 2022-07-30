const MyStringFunctions = require('./MyStringFunctions');
const m = new MyStringFunctions();

class MyGreetingFunctions {


    printHello() {         // defining the function
        console.log('Hello');
    }

    /**
     * Create HelloUser function in a way that userName ALWAYS print in the titlecase
     */
    helloUser(userName) {      // username is the local-variable to this function (scope of username-variable is helloUser function)
        userName = m.toTitleCase(userName);
        console.log(`Hello ${userName}`);
    }

}
module.exports = MyGreetingFunctions;