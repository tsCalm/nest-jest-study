import { Calculator } from './val';

it('테스트에서 프로덕션 로직 사용, 나쁜코드', () => {
  const sut = new Calculator();
  let result;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const actual = sut.calculate(i, j);

      if (i == 3 && j == 4)
        // 특이케이스
        result = 8;
      else result = i + j;

      expect(result).toBe(actual);
    }
  }
});

it('테스트에서 프로덕션 로직 사용, 개선코드 - 예외 상황만 따로 테스트', () => {
  const sut = new Calculator();
  const result = sut.calculate(3, 4);
  expect(result).toBe(8);
});

it.each([
  [3, 4, 8],
  [1, 1, 2],
])(
  '테스트에서 프로덕션 로직 사용, 개선코드 - 조건별 테스트',
  (num1, num2, actual) => {
    const sut = new Calculator();

    const result = sut.calculate(num1, num2);

    expect(result).toBe(actual);
  },
);
