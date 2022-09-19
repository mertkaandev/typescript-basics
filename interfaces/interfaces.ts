/* Interfaces
Interfaces is a feature of object-oriented programming.
*/
interface Post {
    title: string;
    description: string;
    view?: number; // ? means optional
    readonly from: string; // couldn't change
}

let newPost: Post;

newPost = {
    title: "My first post",
    description: "A photo from my camera",
    from: "user"
}

/* Extends
User interface gets Person interface's properties.
*/

interface Person {
    name: "string",
    surname: "string",
}

interface User extends Person {
    username: string;
}

let newUser: User;

/* Implementing Interface */

interface IComment {
    commentTitle: string;
    commentDescription: string;
}

class NewComment implements IComment {
    commentTitle: string;
    commentDescription: string
}