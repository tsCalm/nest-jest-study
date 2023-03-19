# jest 공식 홈페이지 Testing Asynchronous Code 파트

## Promises test 간단한 예제

```
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


```

- promise 함수를 테스트하는 경우에는 .then, .catch 를 사용해서 예상되는 리턴값과 오류를 테스트할 수 있다.

---
