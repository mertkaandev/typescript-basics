/* TypeScript assigns the object as a key-type, not a key-value. 
In TypeScript, objects are assigned as key-type.
*/

// Custom Type
type user = {
    name: string;
    age: number;
    role: "user" | "admin"; // union type 
    verified: true | false;
    hex: 1;
}

const firstUser: user = {
    name: "Mert",
    age: 21,
    role: "user",
    verified: true,
    hex: 1
}

