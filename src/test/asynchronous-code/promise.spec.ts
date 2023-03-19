const fetchData = (isError: boolean = false) => {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        if (isError) throw new Error('error!!');
        res([1, 2, 3]);
      }, 1000);
    } catch (e) {
      rej(e);
    }
  });
};

test('promise 함수 테스트', () => {
  const isError = true;
  fetchData(isError)
    .then((numbers) => {
      expect(numbers).toBe([1, 2, 3]);
    })
    .catch(() => {
      expect(() => compileAndroidCode()).toThrow(/error/);
    });
});
