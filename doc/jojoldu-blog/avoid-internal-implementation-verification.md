# [내부 구현 검증 피하기 글을 읽고 실습 및 기록하기](https://jojoldu.tistory.com/614)

## order-amount-sum 예제 기록

- OrderAmountSum 멤버변수 minusSum, plusSum이 어떻게 계산되는지가 중요한게 아니기 때문에 구현할 필요가없다.

- minusSum, plusSum 멤버 변수를 사용해서 sumAmount를 계산하고 있지만 코드는 얼마든지 변경될 수 있기 때문에 가장 중요한 sumAmount의 계산이 맞는지만 검증하면 된다.

- OrderAmountSum 클래스의 가장 중요한 임무는 클래스의 이름에서도 확인할 수 있듯이 주문의 총 금액을 계산하는것이다. <strong><em>주문의 총 금액을 어떤 방법으로 계산하여도 결과는 항상 같은 값이 나오기 때문에 주문 총 금액을 검증하는 테스트로직 하나면 충분하다.</strong></em>
