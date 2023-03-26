# [조건부 사용하지 않기 실습 및 기록하기](https://jojoldu.tistory.com/642)

## [연습 코드](src/test/jojoldu-blog/do-not-use-conditionals/do-not-use-conditionals.spec.ts)

## 문제 및 개선 요약

- 하드 코딩된 테스트 코드를 작성한다.
- 케이스별로 Parameterized Test를 진행한다.
- 프로덕션 코드의 변경으로 테스트 코드의 변경을 만들지 않을 수 있는 코드 만들기
- 검증 부분만 조건문으로 처리하면 대부분의 코드가 중복코드
- 해당 테스트가 무엇을 하는지 테스트 코드만으로 확인이 가능해야한다
- 조건문을 최대한 피한다.
- <strong><em>테스트 코드 내에서는 조건문은 안쓰는 것이 가장 좋다.</em></strong>
