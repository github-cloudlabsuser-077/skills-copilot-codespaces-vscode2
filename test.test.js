const add = require('./add'); // assuming your function is exported from add.js

describe('add', () => {
  test('adds positive numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds negative numbers correctly', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('adds positive and negative numbers correctly', () => {
    expect(add(-1, 2)).toBe(1);
  });

  test('adds zero correctly', () => {
    expect(add(0, 2)).toBe(2);
    expect(add(2, 0)).toBe(2);
    expect(add(0, 0)).toBe(0);
  });

  test('adds floating point numbers correctly', () => {
    expect(add(1.2, 3.4)).toBeCloseTo(4.6);
  });
});