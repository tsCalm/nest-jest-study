# jest-study

- 개발자 향로님 블로그 포스팅 중 중요한 글 인용 ( 까먹지말자.. )

> 테스트 코드는 프로젝트의 생명 주기보다 길때가 많다.</br>
> 기존의 요구사항을 정리한것이 테스트 코드이기 때문에, 메인 코드보다 훨씬 더 읽기쉬워야만 한다.</br>
> 만약 테스트 코드가 복잡한 경우 어떻게 작동하는지 이해하기가 어렵다.</br>
> 그래서 테스트 코드는 주석이 필요 없을 정도로 간단해야 한다.

> 중복된 코드를 리팩토링을 하더라도, 2가지의 전제조건을 가져가면 좋다.
> 해당 테스트가 무엇을 하는지 테스트 코드만으로 확인이 가능해야한다
> 조건문을 최대한 피한다.

## 메모

- test에서 given, when, then이란 테스트를 작성하는 방식입니다.
  - given은 테스트의 전제 조건을 정의하고,
  - when은 테스트할 행동을 수행하고,
  - then은 테스트 결과를 검증하는 부분입니다.

## 공식문서 학습

- [testing-asynchronous-code](doc/testing-asynchronous-code.md)
- [using-matchers](doc/testing-asynchronous-code.md)

## 개발자 향로님 블로그 포스팅 학습 및 기록

- [내부 구현 검증 피하기](doc/jojoldu-blog/avoid-internal-implementation-verification.md)
- [검증부 하드 코딩](doc/jojoldu-blog/assert-expect-hard-conding.md)

## [ts-mokito 학습](doc/ts-mockito.md)
