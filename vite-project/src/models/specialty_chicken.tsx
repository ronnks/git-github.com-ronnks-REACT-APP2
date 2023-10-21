export default class SpecialtyChicken {
  private cost = 0;
  constructor(private _quantity: number, private _kind: string) {
    this.quantity = _quantity;
    this.kind = _kind;

    this.cost = 14.65;
  }

  public get kind(): string {
    return this._kind;
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }

  toString() {
    return (
      "quantity: " +
      this._quantity +
      " kind: " +
      this.kind +
      " cost: $" +
      this.cost
    );
  }
}
