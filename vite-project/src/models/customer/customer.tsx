import Address from "./address";

export default class Customer {
  constructor(
    private name: string,
    private telephone: string,
    private address: Address
  ) {}
}
