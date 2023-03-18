# jest 공식 홈페이지 using-matchers 파트

## 값을 테스트하는 간단한 예제

```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

- expect : 테스트하고자 하는 값을 넣는다.
- toBe : === 연산자와 유사, 테스트할 때 원하는 값
- expect가 유저가 선택한 답안이면 toBe는 답지로 이해하면 편함

---

## 오브젝트를 테스트하는 간단한 예제

```
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  const temp = { one: 1, two: 2 };
  expect(data).toEqual(temp);
});
```

- toEqual은 객체의 값만 비교하고, 키에 undefined가 있는지, 배열의 길이가 같은지, 객체의 타입이 같은지 등을 무시, 예를 들어, {a: 1}과 {a: 1, b: undefined}는 toEqual로 비교하면 true

- toStrictEqual은 객체의 값뿐만 아니라 키에 undefined가 있는지, 배열의 길이가 같은지, 객체의 타입이 같은지 등을 모두 고려하여 엄격하게 비교, 예를 들어, {a: 1}과 {a: 1, b: undefined}는 toStrictEqual로 비교하면 false

---

## 오브젝트의 반대값을 테스트하는 간단한 예제

```
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

- not을 활용해서 나와서는 안되는 값을 테스트 할 수 있다.

---

## null, undefined, true, false 체크 예제

```
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(null).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

```

- toBeFalsy : false, null, undefined, 0 를 체크한다.
- toBeTruthy : toBeFalsy 함수의 반대
- toBeDefined : undefined가 아니면 통과
- toBeUndefined : undefined면 통과
- toBeNull : null이면 통과

---

## numbers 예제

```
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // 4 > 3
  expect(value).toBeGreaterThanOrEqual(3.5); // 4 >= 3.5
  expect(value).toBeLessThan(5); // 4 < 5
  expect(value).toBeLessThanOrEqual(4.5); // 5 <= 4.5

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4); // toBe는 === 와 동등
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});


```

- toBeGreaterThan : 함수의 인자값보다 예상값이 커야한다.
  - 예) 4 > 3
- toBeGreaterThanOrEqual : 함수의 인자값보다 예상값이 크거나 같아야한다.
  - 예) 4 >= 3.5
- toBeGreaterThan : 함수의 인자값보다 예상값이 작아야한다.
  - 예) 4 < 5
- toBeGreaterThan : 함수의 인자값보다 예상값이 작거나 같아야한다.
  - 예) 5 <= 4.5
- 부동소수점의 경우 toBe()를 사용하지 않고 toBeCloseTo()를 사용한다.
