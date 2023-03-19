const asyncAwaitFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([1, 2, 3]);
    }, 1000);
  });
};
test('the data is peanut butter', async () => {
  const data = await asyncAwaitFetch();
  expect(data).toStrictEqual([1, 2, 3]);
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  // 1 -> 에러 발생, 0 -> 에러가 발생하지 않음
  try {
    await asyncAwaitFetch();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
