test('object assignment (1)', () => {
  const data = { one: 1 };
  data['two'] = 2;
  data['three'] = undefined;
  const temp = { one: 1, two: 2 };
  // expect(data).toEqual({ one: 1, two: 2 });
  expect(data).toEqual(temp);
});

test('object assignment (2)', () => {
  const data = { one: 1 };
  data['two'] = 2;
  data['three'] = undefined;
  const temp = { one: 1, two: 2 };
  expect(data).toStrictEqual(temp);
});
