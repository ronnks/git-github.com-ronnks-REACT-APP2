import { ToppingsEnum } from "./enums/toppings_enum";

export default class Pizza {
  private toppingsArr: ToppingsEnum[] = [];
  private cost = 0;

  constructor(
    private quantity: number,
    private size: string,
    private crust: string
  ) {
    this.toppingsArr.push(ToppingsEnum.pizza_sauce);
    this.toppingsArr.push(ToppingsEnum.cheese);

    this.quantity = quantity;
    this.size = size;
    this.crust = crust;

    this.setCosts;
  }

  set setCost(newCost: number) {
    this.cost = newCost;
  }

  set setQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  }

  set setSize(newSize: string) {
    this.size = newSize;
  }

  set setCrust(newCrust: string) {
    this.crust = newCrust;
  }

  get getCost() {
    return this.cost;
  }

  get getQuantity() {
    return this.quantity;
  }

  private setCosts() {
    if (this.size === "X-Lg") {
      this.cost = 17.89;
    } else if (this.size === "Lg") {
      this.cost = 15.99;
    } else if (this.size === "Md") {
      this.cost = 13.89;
    } else if (this.size === "Sm") {
      this.cost = 11.69;
    }
  }

  get getSize() {
    return this.size;
  }

  get getCrust() {
    return this.crust;
  }

  addPortion(portion: string) {
    if (portion === "No") {
      this.cost -= 0.65;
    } else if (portion === "Light") {
      this.cost -= 0.35;
    } else if (portion === "Extra") {
      this.cost += 0.35;
    } else if (portion === "Double") {
      this.cost += 0.75;
    }
  }

  addTopping(portion: string, topping: ToppingsEnum) {
    this.toppingsArr.push(topping);
    this.cost += 1.05;

    if (portion === "No") {
      this.cost -= 0.65;
    } else if (portion === "Light") {
      this.cost -= 0.35;
    } else if (portion === "Extra") {
      this.cost += 0.35;
    } else if (portion === "Double") {
      this.cost += 0.75;
    }
  }

  removeTopping(topping: ToppingsEnum) {
    delete this.toppingsArr[this.toppingsArr.indexOf(topping)];
    this.cost -= 1;
  }

  toString() {
    return (
      "quantity: " +
      this.quantity +
      " size: " +
      this.size +
      " toppings: " +
      this.toppingsArr +
      " cost: $" +
      this.cost
    );
  }
}
