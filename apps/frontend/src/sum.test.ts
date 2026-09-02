import { describe, expect, it } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
