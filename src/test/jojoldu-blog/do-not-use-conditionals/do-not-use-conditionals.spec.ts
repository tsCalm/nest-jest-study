// > new Intl.DateTimeFormat("ko", { dateStyle: 'full' }).format(new Date())
// '2022년 3월 8일 화요일'
// > new Intl.DateTimeFormat("ko", { dateStyle: 'long' }).format(new Date())
// '2022년 3월 8일'
// > new Intl.DateTimeFormat("ko", { dateStyle: 'medium' }).format(new Date())
// '2022. 3. 8.'
// > new Intl.DateTimeFormat("ko", { dateStyle: 'short' }).format(new Date())
// '22. 3. 8.'

it('[Bad] 가변결과 검증', () => {
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
