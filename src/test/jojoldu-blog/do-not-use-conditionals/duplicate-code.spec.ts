import { MockStatus, Order } from './val';
it('[Bad] 추출된 중복 테스트 코드#1', () => {
  const order = new Order();
  order.status = MockStatus.COMPLETED;

  expect(order.isCompleted()).toBe(true);
});

it('[Bad] 추출된 중복 테스트 코드#2', () => {
  const order = new Order();
  order.status = MockStatus.CANCELED;

  expect(order.isCanceled()).toBe(true);
});
it('[Bad] 추출된 중복 테스트 코드#1', () => {
  testOrder(MockStatus.COMPLETED);
});

it('[Bad] 추출된 중복 테스트 코드#2', () => {
  testOrder(MockStatus.CANCELED);
});

function testOrder(status: MockStatus): void {
  const order = new Order();
  order.status = status;

  if (status === MockStatus.COMPLETED) {
    expect(order.isCompleted()).toBe(true); // boolean 타입까지 일치하는 것을 확인하기 위해
  } else if (status === MockStatus.CANCELED) {
    expect(order.isCanceled()).toBe(true);
  }
}
it('[Good] 추출된 중복 테스트 코드#1', () => {
  const sut = createOrder(MockStatus.COMPLETED);

  expect(sut.isCompleted()).toBe(true);
});

it('[Good] 추출된 중복 테스트 코드#2', () => {
  const sut = createOrder(MockStatus.CANCELED);

  expect(sut.isCanceled()).toBe(true);
});

function createOrder(status: MockStatus): Order {
  const order = new Order();
  order.status = status;
  return order;
}
