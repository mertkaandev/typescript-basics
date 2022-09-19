/* TypeScript Types */

// 1- any: 
let myVariable: any;

myVariable = "Hello!" // can be string
myVariable = 15; // can be number
myVariable = true; // can be boolean
myVariable(); // can be function

// 2- string

let username: string;
username = "james"

// 3- number

let userage: number;
userage = 20; 

// 4- boolean

let authentication: boolean;
authentication = true;
console.log(authentication ? "Auth" : "No Auth"); // output will be "Auth" because the value of authentication variable is true.

// 5- array (string[], number[], any[])

let stringsArray: string[];
stringsArray = ["one", "two", "three"];

let numbersArray: number[];
numbersArray = [1, 2, 3];

let anyArray: any[];
anyArray = ["one", 1, function(){}, true];

// 6- enum: enums are a data type. Creates an object in object literal format. For example, it assigns the values ​​0, 1 ,2 ,3 respectively to the values ​​in {}. so blue is 0, red is 3.

enum colors {blue, yellow, black, red};
const bgColor = colors.blue;

// 7- tuple: an array type but it pre-specifies the types of the elements in the array.

let errors: [string, number, boolean];
errors = ["Error", 404, false];

// 8- unknown

let notSure: unknown;
notSure = 10;
notSure = "No";
notSure = function(){};


