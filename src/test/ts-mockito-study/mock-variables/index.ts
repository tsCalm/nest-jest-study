export class TestClass {}
export const testFunction = () => true;
export class TsMokitoTestService {
  anyStringTest(param: string) {
    return param;
  }
  anyNumberTest(param: number) {
    return param;
  }
  anyClassTest(param: TestClass) {
    return param;
  }
  anyFunctionTest(func: Function) {
    return func();
  }
  betweenTest(num: number) {
    return num.toString();
  }
  anyObjectTest(obj: object) {
    return obj.toString();
  }
}
