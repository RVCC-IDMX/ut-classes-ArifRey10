/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable constructor-super */

/**
 * Square class
 * @class Square class extends rectangle
 * @constructor Square constructor function
 * @param {number} side - the length of a side
 * must use super() to call the parent class constructor
 */
const { Rectangle } = require('./rectangle');

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.name = 'Square';
    this.side = side;
  }

  /**
   * @method getSide - return the side length
   * @returns {number} the side length
   */
  getSide() {
    return this.side;
  }
}

module.exports = {
  Square,
};
