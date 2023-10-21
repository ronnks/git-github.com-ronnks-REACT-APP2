import Dessert from "./dessert";

export default class Salad extends Dessert {
  private _cost = 0;

  constructor(private _quantity: number, private _kind: string) {
    super(_quantity, _kind);
    this._quantity = _quantity;
    this._kind = _kind;

    this._cost = 9.85;
  }

  public get getCost(): number {
    return this._cost;
  }
  public set setCost(value: number) {
    this._cost = value;
  }
  public get getQuantity(): number {
    return this._quantity;
  }
  public set setQuantity(value: number) {
    this._quantity = value;
  }

  toString() {
    return (
      "quantity: " +
      this._quantity +
      " kind: " +
      this._kind +
      " cost: $" +
      this._cost
    );
  }
}
