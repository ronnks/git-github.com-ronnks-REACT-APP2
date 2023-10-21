export default class SideSauces {
  private cost = 0;
  constructor(private quantity: Number, private kind: string) {
    this.quantity = quantity;
    this.kind = kind;

    if (kind === "marinara cup" || kind === "icinf cup") {
      this.cost = 0.95;
    } else {
      this.cost = 0.65;
    }
  }

  set setQuantity(newQ: number) {
    this.quantity = newQ;
  }

  set setKind(newK: string) {
    this.kind = newK;
  }

  get getQuantity() {
    return this.quantity;
  }

  get getKind() {
    return this.kind;
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
