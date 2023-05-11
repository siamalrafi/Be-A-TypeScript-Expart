"use strict";
/* type X = { name: string; age: number };
type Y = { address: { city: string; country: string } };

let x: X & Y = { name: "Jhon", age: 4, address: { city: "dhaka", country: "" } };
console.log(x);
console.log(x.address.city); */
/* const gussSomething = (myGuss: unknown) => {
   return myGuss;
};

console.log(gussSomething(4));
console.log(gussSomething("4"));
console.log(gussSomething(true)); */
/*
// turnery operator
const IsAdmin: boolean = true;
if (IsAdmin) {
   console.log("Admin");
} else {
   console.log("not admin.");
}

const turnaryCheck: string = IsAdmin ? "admin" : "not admin";
console.log(turnaryCheck);
 */
/* // nullish operator (??)---

const checkNullish: unknown = "";
let checkNullish1 = checkNullish ?? "not nullish";
console.log(checkNullish1);
 */
// assertion operator ( as )
const thinkSomething = "sdfsfsdf";
console.log(thinkSomething.charAt(2));
console.log("object");
