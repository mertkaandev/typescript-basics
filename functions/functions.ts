/* Void: Void is returning nothing, returning null. (no return)*/
const number = (numberOne: number, numberTwo: number) => {
    console.log(numberOne + numberTwo) // void
}

/* Return and parameters types */
const currentNumber = (number1: number, number2: number ): number => {
    return number1 + number2;
}

/* Optional Parameter */
function write(name: string, lastname?:string){
    console.log(name);
};

write("Mert");
