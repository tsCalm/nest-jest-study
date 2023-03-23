import { capture, instance, mock } from 'ts-mockito';
import { TsMokitoTestService } from './mock-variables';

it('capture', () => {
  const mockService: TsMokitoTestService = mock(TsMokitoTestService);
  const service: TsMokitoTestService = instance(mockService);

  service.anyStringTest('1');
  service.anyStringTest('2');
  service.anyStringTest('3');
  service.anyStringTest('5');

  expect(capture(mockService.anyStringTest).first()).toStrictEqual(['1']);
  expect(capture(mockService.anyStringTest).byCallIndex(1)).toStrictEqual([
    '2',
  ]);
  expect(capture(mockService.anyStringTest).beforeLast()).toStrictEqual(['3']);
  expect(capture(mockService.anyStringTest).last()).toStrictEqual(['5']);
});
