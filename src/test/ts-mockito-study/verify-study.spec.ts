import { anyString, anything, instance, mock, verify } from 'ts-mockito';
import { TestClass, testFunction, TsMokitoTestService } from './mock-variables';

it('verify', () => {
  const mockService: TsMokitoTestService = mock(TsMokitoTestService);
  const service: TsMokitoTestService = instance(mockService);

  service.anyStringTest('1');
  service.anyNumberTest(1);
  service.anyStringTest('1');
  service.anyStringTest('a');
  service.anyStringTest('a');

  // Call Count verify
  verify(mockService.anyStringTest('1')).times(2);
  verify(mockService.anyNumberTest(1)).times(1);
  verify(mockService.anyStringTest(anything())).times(4);
  verify(mockService.anyStringTest('2')).never(); // '2' 파라메터로 anyStringTest 호출한 적은 없기 때문에 통과
  verify(mockService.anyStringTest('1')).atLeast(1); // 파라메터를 '2'로 변경하면 실패, '2'로 한번도 호출한적 없기 때문에 적어도 한번 호출의 조건을 충족하지 않는다.

  // Call order verify
  verify(mockService.anyStringTest('1')).calledBefore(
    mockService.anyNumberTest(1),
  );
  verify(mockService.anyNumberTest(1)).calledAfter(
    mockService.anyStringTest('1'),
  );
});
