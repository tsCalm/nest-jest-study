import { anyNumber, anyString, instance, mock, when } from 'ts-mockito';

export class TsMokitoTestService {
  anyStringTest(param: string) {
    return param;
  }
  anyNumberTest(param: number) {
    return param;
  }
}

class TestClass {}
const testFunction = () => true;

it('when', () => {
  /** given **/
  const mockService: TsMokitoTestService = mock(TsMokitoTestService);
  // string
  when(mockService.anyStringTest(anyString())).thenReturn(anyString());
  // when(mockService.anyStringTest('inflab')).thenReturn('inflab');

  // // number
  // when(mockService.getOrder(anyNumber())).thenReturn('anyNumber');
  // when(mockService.getOrder(1)).thenReturn(1);

  // // Class & Function
  // when(mockService.getOrder(anyOfClass(TestClass))).thenReturn('TestClass');
  // when(mockService.getOrder(anyFunction())).thenReturn('anyFunction');
  // when(mockService.getOrder(testFunction)).thenReturn('testFunction');

  // // 범위 조건
  // when(mockService.getOrder(between(10, 20))).thenReturn('between 10 and 20');
  // when(mockService.getOrder(objectContaining({ a: 1 }))).thenReturn('{ a: 1 }');

  // /** when **/
  const service: TsMokitoTestService = instance(mockService);

  // /** then **/

  // // string
  expect(service.anyStringTest(anyString())).toBe(anyString());
  // expect(service.getOrder('inflab')).toBe('inflab');

  // // number
  // expect(service.getOrder(22)).toBe('anyNumber');
  // expect(service.getOrder(1)).toBe(1);

  // // Class & Function
  // expect(service.getOrder(new TestClass())).toBe('TestClass');
  // expect(service.getOrder(() => {})).toBe('anyFunction');
  // expect(service.getOrder(testFunction)).toBe('testFunction');

  // // 범위 조건
  // expect(service.getOrder(19)).toBe('between 10 and 20');
  // expect(service.getOrder({ b: 2, c: 3, a: 1 })).toBe('{ a: 1 }');
});
