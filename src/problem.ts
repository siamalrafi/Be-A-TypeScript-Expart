class FOTHER {
   checker() {
      console.log("FOTHER");
   }
}

class A extends FOTHER {
   checker() {
      console.log("A");
   }
}

class B extends FOTHER {
   checker() {
      console.log("B");
   }
}

let a = new A();
let b = new B();

function check(param: FOTHER) {
   param.checker();
}

// console.log(a.checker());
// console.log(b.checker());

check(a);
check(b)
