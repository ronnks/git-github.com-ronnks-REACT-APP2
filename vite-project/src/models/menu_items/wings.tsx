export default class Wings {
  private cost = 0;

  constructor(
    private _quantity: number,
    private _size: number,
    private _sauce: string
  ) {
    this._quantity = _quantity;
    this._size = _size;
    this._sauce = _sauce;

    this.setCosts;
  }

  private setCosts() {
    if (this._size === 16) {
      this.cost = 17.85;
    } else if (this._size === 12) {
      this.cost = 12.35;
    } else if (this._size === 8) {
      this.cost = 9.85;
    }
  }

  public get getCost(): string {
    return this._sauce;
  }
  public get getSauce(): string {
    return this._sauce;
  }
  public set setCost(value: number) {
    this.cost = value;
  }
  public set setSauce(value: string) {
    this._sauce = value;
  }
  public get getSize(): number {
    return this._size;
  }
  public set setSize(value: number) {
    this._size = value;
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
      " size: " +
      this._size +
      " sauce: " +
      this._sauce +
      " cost: $" +
      this.cost
    );
  }
}
