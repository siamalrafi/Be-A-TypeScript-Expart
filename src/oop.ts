class NEWCLASS<T, R, E> {
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
