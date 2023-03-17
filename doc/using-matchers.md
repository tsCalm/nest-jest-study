### 값을 테스트하는 가장 간단한 방법

```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

- expect : 테스트하고자 하는 값을 넣는다.
- toBe : === 연산자와 유사
- expect가 유저가 선택한 답안이면 toBe는 답지로 이해하면 편함
