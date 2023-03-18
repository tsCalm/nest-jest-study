test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // 4 > 3
  expect(value).toBeGreaterThanOrEqual(3.5); // 4 >= 3.5
  expect(value).toBeLessThan(5); // 4 < 5
  expect(value).toBeLessThanOrEqual(4.5); // 5 <= 4.6

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4); // toBe는 === 와 동등
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});
