// const Name: Array<string> = ["Abbas", "kabul", "rohim", "polas"];

// const ARRAY: Array<string> = ["Abbas", "kabul", "rohim", "polas"];
// const ARRAY1: Array<string | number | boolean | object | undefined | "valid"> = ["nam", ",adk", 44, 4, 5, true, { name: "Abbas", age: 44, gender: "male" }, "valid", "nam", ",adk", 44, 4, 5, true, { name: "Abbas", age: 44, gender: "male" }, "valid", undefined];

// const TUPLE: [number, boolean, "valid"] = [5, true, "valid"];

// console.log(TUPLE)

/* 
// object types ---
const OBJ: { name: string; readonly age: number; gender: string; address?: object } = {
   name: "Abbas",
   age: 44,
   gender: "male",
   address: {
      street: "Abbas",
      city: "kabul",
   },
};

let x = OBJ.address;

console.log(x);
 */
/* 
// function types ---
type MyType = {
   name: string;
   age: number;
};

function process1(data: MyType): number {
   console.log(data.age);
   console.log(data.name);
   return data.age;
   // Function logic here
}

console.log(process1({ name: "stri", age: 4 })); */

// spreed operator and rest operator in TS

// const arr1: Array<number> = [1, 2, 3, 4];
// const arr2: Array<string> = ["a", "b", "c", "d"];

// console.log(...arr1);
// let x = arr2.map((r) => {
//    return r;
// });

// console.log(x);

function REST(...argu: number[]) {
   console.log(argu);
   return argu.reduce((a, b) => a + b);
}

console.log(REST(1, 2, 4, 5, 6, 7, 8, 9, 10));

function REST2(...argu: string[]) {
   console.log(argu);
   return argu.reduce((a, b) => a + b);
}

console.log(REST2("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"));
