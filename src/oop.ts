// class in typescript ---

/* class NEWCLASS<T, R, E> {
   id: T;
   name: R;
   age: E;

   constructor(id: T, name: R, age: E) {
      this.id = id;
      this.name = name;
      this.age = age;
   }
   getInfo() {
      return `${this.id} ${this.name} ${this.age}`;
   }
}

let newClass = new NEWCLASS<number, string, number>(23424, "Robi", 23424);
let newClass1 = new NEWCLASS<number, string, boolean>(23424, "Robi", true);

// console.log(newClass.id, newClass.name, newClass.age);

console.log(newClass.getInfo());
console.log(newClass1.getInfo());
 */

/* // inheritance in typescript ---

class A {
   id: number;
   name: string;
   age: number;
   constructor(id: number, name: string, age: number) {
      this.id = id;
      this.name = name;
      this.age = age;
   }
}

const a = new A(5, "R", 555);

// extend typescript ---
class B extends A {
   sex: string;
   constructor(id: number, name: string, age: number, sex: string) {
      super(id, name, age);
      this.sex = sex;
   }
   getInfo() {
      return `${this.id} ${this.name} ${this.age} ${this.sex}`;
   }
}

const b = new B(5535, "name", 52, "male");
console.log(b.getInfo()); */

/* // type-guard in typescript ---

/* type A = string | number;

const declare = (a: A): A => {
   if (typeof a === "number") {
      return a + 1000;
   } else {
      return a;
   }
};

console.log(declare("44")); */
/* 
type A = {
   name: string;
   age: number;
};

type B = {
   name: string;
   age: number;
   salary: string;
};

const TypeChecker = (info: A | B) => {
   if ("salary" in info) {
      return info.salary;
   } else if ("name" in info) {
      return info.name;
   }
};

console.log(TypeChecker({ name: "naem", age: 44, salary: "male" }));
console.log(TypeChecker({ name: "naem", age: 44 }));
 */

class X {
   id: number;
   name: string;
   age: number;
   constructor(id: number, name: string, age: number) {
      this.id = id;
      this.name = name;
      this.age = age;
   }
   getInfo1() {
      return `1 ${this.id} ${this.name} ${this.age}`;
   }
}

class Y {
   id: number;
   name: string;
   age: number;
   sex: string;
   constructor(id: number, name: string, age: number, sex: string) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.sex = sex;
   }
   getInfo2() {
      return `2 ${this.id} ${this.name} ${this.age} ${this.sex}`;
   }
}

class Z {
   id: number;
   name: string;
   age: number;
   gender: string;
   constructor(id: number, name: string, age: number, gender: string) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.gender = gender;
   }
   getInfo3() {
      return `3 ${this.id} ${this.name} ${this.age} ${this.gender}`;
   }
   getInfo4() {
      return `4 ${this.id} ${this.name} ${this.age}`;
   }
}

function TypeClassChecker<T>(person: T) {
   if (person instanceof X) {
      return `1. ${person.getInfo1()}`;
   } else if (person instanceof Y) {
      return `2. ${person.getInfo2()}`;
   } else if (person instanceof Z) {
      return `3. ${person.getInfo3()}`;
   }
   return "namee";
}

const x: X = new X(5, "rana", 23);
const y: Y = new Y(5, "rana", 23, "male");
const z: Z = new Z(5, "rani", 23, "female");

// console.log(x.getInfo1());
// console.log(y.getInfo2());
// console.log(z.getInfo3());

console.log(TypeClassChecker<X>(x));
console.log(TypeClassChecker<Y>(y));
console.log(TypeClassChecker<Z>(z)); 
