
export class Point {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log('Drawing', this._x, this._y);
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) {
      throw new Error('Value must be more than 0.');
    }
  }
}
