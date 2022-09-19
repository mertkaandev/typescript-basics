/* In the code below, although the message is a string, it is not explicitly specified as a string.
But later on, in order to use string properties somewhere in the application, we must specify that it is a string. 
*/

// for string
let message;
message = "Welcome to TypeScript";

const newMessage = (<string>message).toUpperCase();
const newMessageAgain = (message as string).toLocaleUpperCase();

// for number
let age;
age = 10;

const currentAge = (<number>age) + 10;

// vs..