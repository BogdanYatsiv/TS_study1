let numbers = [1, 2, 3]; //js array
let numbers2: number[] = [1, 2, 3] //ts array

let user: [number, string] = [1, "Max"]; //ts tuple type
console.log(user[0]);
console.log(user[1]);
user.push(1) //bug in ts

const enum Size { Small = 1, Medium = 2, Large = 3 }; //ts enum type, const keyword generate more optimized code

let mySize: Size = Size.Medium;
console.log(mySize) //logs 2