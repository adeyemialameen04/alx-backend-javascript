const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }

  cloneCar() {
    const Constructor = this.constructor[Symbol.species] || this.constructor;
    return new Constructor();
  }

  static get [Symbol.species]() {
    return this;
  }
}
