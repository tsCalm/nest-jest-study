# ts-mokito 학습 기록 ([개발자 향로님 블로그 포스팅을 참조](https://jojoldu.tistory.com/638))

## when

<em><strong>binning 채팅 질문 </strong></em></br>
<u>ts-mokito when함수는 언제 사용해야하나요?</u>

<em><strong>답변</strong></em></br>

ts-mockito에서 when함수는 stubbing을 위해 사용됩니다. <u>Stubbing이란 테스트 코드에서 특정 메소드를 호출할 때 그 메소드가 반환하는 값을 미리 정해놓는 것</u>입니다. when함수는 다음과 같은 형식으로 사용됩니다.

```
when(mockObject.methodCall()).thenReturn(returnValue);
```

여기서 mockObject는 테스트 대상 객체를 의미하고, methodCall()은 mockObject에서 호출할 메소드를 의미합니다. returnValue는 methodCall()이 반환할 값을 의미합니다.12

예를 들어, 다음과 같은 코드가 있다면:

```
when(mockedList.get(0)).thenReturn("first");
```

mockedList.get(0)이 호출될 때 "first"라는 값을 반환하도록 설정한 것입니다.

- when(테스트 함수(파라메터)).thenReturn(리턴값 설정)으로 테스트를 원하는 함수의 파라메터 타입과 리턴타입을 지정할 수 있다.

- when을 통한 함수의 행위가 지정되면 함수의 구현은 중요하지 않다. when으로 지정된 설정이 중요하고 그대로 테스트를 진행한다.

- 실제 구현은 변경될 가능성이 높기 때문에 mock함수를 통한 테스트에서는 실 구현부가 중요하지 않은 것으로 추정

- thenReturn말고도 thenThrow, thenCall, thenResolve, thenReject등을 사용하여 테스트 가능
  - thenThrow: throw Error
  - thenCall: 별도의 커스텀 메소드(함수)를 호출
  - thenResolve: resolve promise
  - thenReject: rejects promise

## verify

<em><strong>binning 채팅 질문 </strong></em></br>
<u>ts-mokito verify 함수는 언제 사용해야하나요?</u>

<em><strong>답변</strong></em></br>
ts-mockito의 verify 함수는 특정 메소드가 호출되었는지 검증하는 함수입니다.</br> 이 함수는 호출 횟수를 지정할 수 있으며, 호출된 인자도 검증할 수 있습니다.</br> ts-mockito의 verify 함수는 Jest의 expect().toHaveBeenCalled()와 유사한 기능을 제공합니다.

- verify(테스트 함수(파라메터)).[times, never, atLeast ... ]()으로 어떤 파라메터로 함수의 호출횟수 및 순서를 검증할 수 있다.

- verify의 인자는 instance() 의 결과가 아닌 mock(OrderService) 의 결과가 사용되어야 한다

## capture

<em><strong>binning 채팅 질문 </strong></em></br>
<u>ts-mokito capture 함수는 언제 사용해야하나요?</u>

<em><strong>답변</strong></em></br>
capture 함수는 ts-mockito에서 제공하는 함수 중 하나로, 함수의 인자를 캡쳐하여 저장할 수 있습니다.</br> 이 함수는 verify와 함께 사용되어 특정 인자가 함수에 전달되었는지 확인할 때 유용합니다2.

- 메서드는 여러번 호출될 수 있으므로 메서드의 파라메터는 배열 형태로 관리된다.
- capture는 함수의 파라메터를 배열로 관리하기 때문에 검증 또한 배열의 형태로 해야한다.
