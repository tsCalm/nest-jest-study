import { dayFormatter } from './val';

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
