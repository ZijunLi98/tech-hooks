import * as techHooks from '..';

describe('techHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(techHooks).forEach((module) => {
      expect(techHooks[module]).toBeDefined();
    });
  });
});
