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

## async await test 간단한 예제

```
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

```

- async await 테스트를 하기 위해서는 test 함수의 콜백 함수에 async를 붙여준 후 테스트를 진행한다.

- expect.assertions(number) : number가 1이면 에러를 발생시키고 0면 에러를 발생시키지 않는다.

---
