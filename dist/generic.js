"use strict";
/* // type Generic<T, R> = { name: T; age: R };

// const x: Generic<string, number> = { name: "ali", age: 444 };
// const x1: Generic<number, number> = { name:44, age: 444 };
// const x2: Generic<number,boolean> = { name:44, age: true};

// console.log(x);

// const addNum = <T, R>(a: T, b: R) => {
//    console.log(`${a} and ${b}`);
//    return `${a} and ${b}`;
// };

// console.log(addNum<number, number>(4, 5));
// console.log(addNum<boolean, number>(true, 5));
// console.log(addNum<string, number>("4", 5));

// interface ME<T, R, E> {
//    id: T;
//    name: R;
//    age: E;
//    gender: string;
// }

// const me: ME<number, string, number> = { id: 55, name: "John", age: 55, gender: "Female" };
// const me1: ME<number, string, boolean> = { id: 55, name: "John", age: true, gender: "Female" };

// console.log(me);
// console.log(me1);
 */
/*
// keyOf in TypeScript --

type TYPE = {
   name: string;
   age: number;
   gender: string;
   id: number;
};
type NAME = keyof TYPE;

const OBJ = { name: "A", age: 55, gender: "Female" };

let N: NAME = "age";
let N1: NAME = "name";

console.log(OBJ[N], OBJ[N1]);
console.log(OBJ["age"]); */
const student = {
    student1: "A",
    student2: "B",
    student3: "C",
    student4: "D",
    student5: "E",
};
console.log(student);
