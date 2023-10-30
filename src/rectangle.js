/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable constructor-super */
/*
 * rectangle.js
 * Language: javascript
 * Test: tests/geometry.test.js
 * Path: src/rectangle.js
 *
 * Create a rectangle class
 *
 */

/*
 * Define a rectangle class that has the following properties:
 *  1) Inherits (extends) from the Polygon class
 *  2) A constructor that accepts the rectangle's height and width
 *     a) calls  the super class constructor with a 4-element array
 *       using the parameter height and width, which represents the sides
 *       of the rectangle
 *       https://mzl.la/2Z5y8my
 *     b) sets the property called name to 'Rectangle'
 *  3) By default, has the methods inherited from Polygon
 *    a) count()
 *    b) perimeter()
 *    c) sayName()
 *  4) A method called isValid() that returns true
 *    if the rectangle's height and width are numbers > 0
 *  5) A method called area() that returns the area of the rectangle
 *
 * hint: as well as passing the 4-element array to
 * the super class constructor, you can store height and width
 * in this class to use with its methods - isValid() and area()
 */

//  👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇
/* --------------Important Step Below ------------ */
// import the polygon class using the CommonJS require() function
// https://nodejs.org/api/modules.html#modules-commonjs-modules
// const { Polygon } = require('./polygon');

/**
 * Rectangle class
 * @class Rectangle class extends Polygon
 * @constructor Rectangle constructor function
 * @param {number} height
 * @param {number} width
 * must use super() to call the parent class constructor
 */
const { Polygon } = require('./polygon');

class Rectangle extends Polygon {
  constructor(height, width) {
    super([height, width, height, width]);
    this.name = 'Rectangle';
  }

  /**
   * @method isValid
   * @returns {boolean} true if the height and width are both a number > 0
   */
  isValid() {
    return typeof this.sides[0] === 'number' && this.sides[0] > 0
      && typeof this.sides[1] === 'number' && this.sides[1] > 0;
  }

  /**
   * @method area - return the area of the rectangle
   * @returns {number} the area of the rectangle if
   * the height and width are a number > 0, otherwise return 0
   */
  area() {
    if (this.isValid()) {
      return this.sides[0] * this.sides[1];
    }
    return 0;
  }
}

module.exports = {
  Rectangle,
};
