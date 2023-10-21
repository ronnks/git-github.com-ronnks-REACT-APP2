import Dessert from "./dessert";

export default class Twists extends Dessert {
  private _cost = 0;

  constructor(private _quantity: number, private _kind: string) {
    super(_quantity, _kind);
    this._quantity = _quantity;
    this._kind = _kind;

    this._cost = 10.85;
  }
  public get getQuantity(): number {
    return this._quantity;
  }
  public set setQuantity(value: number) {
    this._quantity = value;
  }
  public get getKind(): string {
    return this._kind;
  }
  public set setKind(value: string) {
    this._kind = value;
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
