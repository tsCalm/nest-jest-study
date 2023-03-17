import { Test, TestingModule } from '@nestjs/testing';

describe('using matcher', () => {
  describe('simple', () => {
    it('should return "Hello World!"', () => {
      expect(2 + 2).toBe(4);
    });
  });
});
