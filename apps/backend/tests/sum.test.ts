import { sum } from '../src/sum.js';

describe('sum', () => {
  test('adds two numbers', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
