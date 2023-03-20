import { Order } from './order.class';

export interface ICustomRepository {
  findById(id: number): Order;
  update(order: Order): Order;
  save(order: Order): Order;
}

export class OrderRepository implements ICustomRepository {
  #orders: Order[];
  constructor() {
    this.#orders = [
      new Order(1, '상품1', 1_000),
      new Order(2, '상품2', 2_000),
      new Order(3, '상품3', 3_000),
    ];
  }

  findById(id: number) {
    return this.#orders.find((order) => order.id === id);
  }

  update(order: Order) {
    const findedOrder = this.findById(order.id);
    if (!findedOrder) throw new Error('Not Found Order');
    return Object.assign(findedOrder, order);
  }

  save(order: Order) {
    const findedOrder = this.findById(order.id);
    if (!findedOrder) {
      this.#orders.push(order);
      return order;
    }
    return Object.assign(findedOrder, order);
  }
}
