abstract class Vehicle {
   abstract start(): void;
   abstract stop(): void;

   move() {
      console.log("Vehicle is moving.");
   }
}

class Car extends Vehicle {
   start() {
      console.log("Car started.");
      
   }

   stop() {
      console.log("Car stopped.");
   }
}

const car = new Car();
car.start(); // Output: Car started.
car.move(); // Output: Vehicle is moving.
car.stop(); // Output: Car stopped.
