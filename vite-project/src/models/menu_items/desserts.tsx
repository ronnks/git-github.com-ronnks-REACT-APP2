import Dessert from "./dessert";

export default class Desserts {
  dessertsArr: Dessert[] = [];

  constructor(private obj: Dessert) {
    this.obj = obj;
    this.dessertsArr.push(this.obj);
  }

  set setObject(newObj: Dessert) {
    this.obj = newObj;
  }

  get getObject() {
    return this.obj;
  }

  toString() {
    return this.obj.toString;
  }
}
