export class Shape {
    constructor(name) {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class Shape");
      }
      this.name = name;
    }
  
    area() {
      throw new Error("area() must be implemented in subclass");
    }
  
    perimeter() {
      throw new Error("perimeter() must be implemented in subclass");
    }
  
    toString() {
      return `${this.name} - Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
  }
  