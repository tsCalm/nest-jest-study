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
