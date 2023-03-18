test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(null).toBeDefined(); // 값이 undefined이면 false, 반대면 true
  expect(n).not.toBeUndefined(); // undefined이면 true, 반대면 false
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy(); //0, undefined, null 등
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
