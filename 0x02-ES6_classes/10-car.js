// Defining the Car class
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car object
  cloneCar() {
    // Create a new instance of the same class (this.constructor)
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

export default Car;
