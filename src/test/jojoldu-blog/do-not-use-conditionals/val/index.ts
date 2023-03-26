export const dayFormatter = (day: number) => {
  if (day < 0 || day > 6) return '???';
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  return days[day];
};

export class Calculator {
  calculate(num_one: number, num_two: number) {
    // 특이케이스
    if (num_one === 3 && num_two === 4) return 8;
    return num_one + num_two;
  }
}
export enum MockStatus {
  'COMPLETED' = 'COMPLETED',
  'CANCELED' = 'CANCELED',
}
export class Order {
  #status: MockStatus;

  get status() {
    return this.#status;
  }

  set status(status: MockStatus) {
    this.#status = status;
  }

  isCompleted() {
    return this.#status === MockStatus.COMPLETED;
  }
  isCanceled() {
    return this.#status === MockStatus.CANCELED;
  }
}
