import Pizza from "./pizza";

export default class SpecialPizza extends Pizza {
  private _cost = 0;

  constructor(
    private _quantity: number,
    private _size: string,
    private _crust: string,
    private kind: string
  ) {
    super(_quantity, _size, _crust);

    if (this._size === "X-Lg") {
      this._cost = 22.89;
    } else if (this._size === "Lg") {
      this._cost = 20.99;
    } else if (this._size === "Md") {
      this._cost = 18.89;
    } else if (this._size === "Sm") {
      this._cost = 16.69;
    }
  }

  set setKind(newKind: string) {
    this.kind = newKind;
  }

  get getKind() {
    return this.kind;
  }

  toString() {
    return super.toString + " kind: " + this.kind;
  }
}
