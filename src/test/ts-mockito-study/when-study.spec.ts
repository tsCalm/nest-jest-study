import {
  anyFunction,
  anyNumber,
  anyOfClass,
  anyString,
  between,
  instance,
  mock,
  objectContaining,
  when,
} from 'ts-mockito';
import { TestClass, testFunction, TsMokitoTestService } from './mock-variables';

it('when', () => {
  /** given **/
  const mockService: TsMokitoTestService = mock(TsMokitoTestService);
  // string
  // when(mockService.anyStringTest(anyString())).thenReturn(anyString());
  // when(mockService.anyStringTest('test')).thenReturn('test');

  // // number
  // when(mockService.anyNumberTest(anyNumber())).thenReturn(22);
  // when(mockService.anyNumberTest(22)).thenReturn(22);

  // // Class & Function
  // when(mockService.anyClassTest(anyOfClass(TestClass))).thenReturn('TestClass');
  // when(mockService.anyFunctionTest(anyFunction())).thenReturn('anyFunction');
  // when(mockService.anyFunctionTest(testFunction)).thenReturn('testFunction');

  // // 범위 조건
  // when(mockService.betweenTest(between(10, 20))).thenReturn(
  //   'between 10 and 20',
  // );
  when(mockService.anyObjectTest(objectContaining({ a: 1 }))).thenReturn(
    '{ a: 1 }',
  );

  // /** when **/
  const service: TsMokitoTestService = instance(mockService);

  // /** then **/

  // // string
  // expect(service.anyStringTest('test')).toBe('test');

  // // number
  // expect(service.anyNumberTest(22)).toBe(22);
  // expect(service.getOrder(1)).toBe(1);

  // // Class & Function
  // expect(service.anyClassTest(new TestClass())).toBe('TestClass');
  // expect(service.anyFunctionTest(() => {})).toBe('anyFunction');
  // expect(service.anyFunctionTest(testFunction)).toBe('testFunction');

  // // 범위 조건
  // expect(service.betweenTest(10)).toBe('between 10 and 20');
  expect(service.anyObjectTest({ b: 2, c: 3, a: 1 })).toBe('{ a: 1 }');
});
