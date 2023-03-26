const dayFormatter = (day: number) => {
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

class Calculator {
  calculate(num_one: number, num_two: number) {
    // 특이케이스
    if (num_one === 3 && num_two === 4) return 8;
    return num_one + num_two;
  }
}

it('[안좋은 코드] 가변결과 검증', () => {
  const today = new Date();
  const day = today.getDay();
  const result = dayFormatter(day);

  let actual;
  if (day === 0) {
    actual = '일요일';
  } else if (day === 1) {
    actual = '월요일';
  } else if (day === 2) {
    actual = '화요일';
  } else if (day === 3) {
    actual = '수요일';
  } else if (day === 4) {
    actual = '목요일';
  } else if (day === 5) {
    actual = '금요일';
  } else if (day === 6) {
    actual = '토요일';
  } else {
    actual = '???';
  }

  expect(result).toBe(actual);
});

it('[개선 코드] day === 0, 일요일 반환', () => {
  const result = dayFormatter(0);

  expect(result).toBe('일요일');
});

it.each([
  [0, '일요일'],
  [1, '월요일'],
  [2, '화요일'],
  [3, '수요일'],
  [4, '목요일'],
  [5, '금요일'],
  [6, '토요일'],
  [7, '???'],
])('[개선 코드 조건별 테스트]', (day, actual) => {
  const result = dayFormatter(day);

  expect(result).toBe(actual);
});

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
