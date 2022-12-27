export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    let returnValue;
    if (hint === 'string') {
      returnValue = this._location;
    } if (hint === 'number') {
      returnValue = this._size;
    }

    return returnValue;
  }
}
