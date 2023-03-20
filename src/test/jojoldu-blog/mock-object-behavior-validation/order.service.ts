import { Order } from './order.class';
import { ICustomRepository } from './order.repository';

export class OrderService {
  constructor(private readonly orderRepository: ICustomRepository) {}

  saveOrUpdate(order: Order): void {
    const savedOrder = this.orderRepository.findById(order.id);
    if (savedOrder) {
      this.orderRepository.update(order);
    } else {
      this.orderRepository.save(order);
    }
  }
}
