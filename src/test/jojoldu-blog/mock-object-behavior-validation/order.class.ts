export class Order {
  #id: number;
  #name: string;
  #amount: number;

  constructor(id: number, name: string, amount: number) {
    this.#id = id;
    this.#name = name;
    this.#amount = amount;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get amount() {
    return this.#amount;
  }
}
