export default class LavaBrownes {
  private cost = 0;

  constructor(private quantity: number, private kind: string) {
    this.quantity = quantity;
    this.kind = kind;

    if (this.kind === "3 pc lava cakes") {
      this.cost = 10.85;
    } else if (this.kind === "8 pc browne cookies") {
      this.cost = 12.85;
    }
  }
  public get getQuantity(): number {
    return this.quantity;
  }
  public set setQuantity(value: number) {
    this.quantity = value;
  }
  public get getKind(): string {
    return this.kind;
  }
  public set setKind(value: string) {
    this.kind = value;
  }

  toString() {
    return (
      "quantity: " +
      this.quantity +
      " kind: " +
      this.kind +
      " cost: $" +
      this.cost
    );
  }
}
