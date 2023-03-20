import { Order } from './order.class';
import { ICustomRepository, OrderRepository } from './order.repository';
import { OrderService } from './order.service';

describe('기존 주문이 있으면 새 정보로 갱신된다', () => {
  // let mockedRepository: ICustomRepository;
  test('mock test', () => {
    const savedOrder = new Order(1, '상품1', 1_000);
    const mockedRepository = new OrderRepository();
    const spyFn = jest.spyOn(mockedRepository, 'findById');
    console.log(spyFn);
    const sut = new OrderService(mockedRepository);

    sut.saveOrUpdate(savedOrder);
    expect(spyFn).toBeCalledTimes(2); // service에서 1번 update, save 에서 1번 총 2번
  });
});
