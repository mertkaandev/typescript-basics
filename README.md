# TypeScript

`TypeScript` is a free and open source programming language, but it's not exactly a new language because it's built on top of `JavaScript`. It can be called a JavaScript superset. The novelty of TypeScript is that it brings features such as static type definition to JavaScript. Since TypeScript is a superset of JavaScript, essentially every JavaScript code is TypeScript code. 

## **JavaScript v Typescript:**  

JavaScript was a scripting language that ran on the browser side and was used to bring liveliness to web pages. However, later, with the emergence of Node.js, JavaScript became a server-side language rather than a browser-only language. Then JavaScript started to work wherever JavaScript had an engine. With the growth of JavaScript, some of its structural problems became a serious problem. For example, JavaScript was a dynamically typed language without type definitions as in C or Java. For this reason, the type could not be created while creating a variable. Species identification could not be made. There was no compilation phase and error checking was difficult. TypeScript was created to eliminate these problems. 

## **Static Typing vs Dinamic Typing**

In static typing, variables are created by specifying their types (boolean, string). The type of the variable whose type is specified cannot be changed later in the program. If changed this error message is given at compile time. Examples of languages with static typing are TypeScript, Java, C.

In dynamic typing, variables have no types. The types of variables can be changed within the program. Error messages are given at runtime. Examples of languages ​​with dynamic typing are Javascript, PHP, Python.

+ Dynamic JavaScript Code: The variable was first created as a number but then converted to a string. 

```
let number = 5;
number = "jack";
```

+ Static TypeScript Code: The type of the variable is specified as string and then a string type value is given.

```
let name: string;
name = "Jack";
```

## **TypeScript Advantages:**

+ Allows error detection in the compile phase.
+ Predictability: Provides predictability.
+ Provides access to features brought by object-oriented programs such as Class, Interface, Inheritance with TypeScript.
+ TypeScript provides new types as examples of Javascript types.
+ TypeScript ensures that the code is browser compatible. It can convert ES6 and ES7 that browsers don't recognize to ES5 that browsers understand.

## **TypeScript Features:**

+ Every Javascript code is a Typescript code. If you change the `.js` extension to the `.ts` extension, the Javascript codes will turn into TypeScript codes.
+ TypeScript codes work everywhere, including browsers, mobile devices, any operating system.
+ TypeScript can be used with Javascript libraries.
+ TypeScript gives error codes at compile time because it is static typing.

## **TypeScript's Disadvantage:**

Browsers cannot understand TypeScript code. For this reason, TypeScript codes are compiled into Javascript codes with a compiler. Compilation/Transpilling phase of `.ts` files takes place with the compiler and codes with `.ts` extension are converted to vanilla Javascript codes. Vanilla Javascript, on the other hand, works everywhere.

![image](https://user-images.githubusercontent.com/101933251/183695903-7057b368-3aef-4b4f-af8c-e83fd33659bf.png)

---

## **Using TypeScript**

TypeScript compiler runs in Node.js environment. To use TypeScript, Node.js must be installed on the operating system used. Then TypeScript needs to be downloaded in the project to be used:

`npm install -g typescript` 

TypeScript extension is `.ts`. Open the `main.ts` file. We can write Javascript code in it. Every Javascript code is a TypeScript code.

![ts](https://user-images.githubusercontent.com/101933251/184020486-2b77bc58-b4fd-4db7-b08d-2ed5b1c19e8d.JPG)

Browsers do not understand TypeScript code. The TypeScript Compiler we download to our application will convert the code to Javascript code. For this, the following code is run from the console (a new javascript file named main.js is created after the code):

 + `tsc main.ts` 

![1](https://user-images.githubusercontent.com/101933251/184021128-fea6d054-e2ee-4ec0-9602-e88d2c5efd16.JPG)

![2](https://user-images.githubusercontent.com/101933251/184021142-55014efd-015a-4d34-a351-334783314d4d.JPG)

The compiled `main.js` file must be included in the HTML page for use in the browser. Files with the `.ts` extension do not work in the browser.

![main js](https://user-images.githubusercontent.com/101933251/184021573-f3cc3a04-f5c1-4dca-9583-7b330ca6c98a.JPG)

---

**TypeScript converts the codes used by ES6 and ES7 features to ES5 codes that all browsers understand.**

+ The ES6 Array Destructuring method is used in this code:

![index ts](https://user-images.githubusercontent.com/101933251/184610202-945c1807-11f1-4c65-bd79-6e8247eed4f0.JPG)

+ With the Typescript compiler, this `.ts` file is compiled and a `.js` file is created. The codes in the resulting file are pure Javascript codes.

![index js](https://user-images.githubusercontent.com/101933251/184610178-98d48b54-0018-4d62-92bd-0410f72139b9.JPG)
