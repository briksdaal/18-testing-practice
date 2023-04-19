import analyzeArray from './analyzeArray.js';

test('average is correct', () => {
  expect(analyzeArray([1]).average).toBe(1);
  expect(analyzeArray([2]).average).toBe(2);
  expect(analyzeArray([2, 4]).average).toBe(3);
  expect(analyzeArray([1, 2, 3, 4]).average).toBeCloseTo(2.5);
  expect(analyzeArray([-8, -4, -2]).average).toBeCloseTo(-4.6667);
});

test('min is correct', () => {
  expect(analyzeArray([1]).min).toBe(1);
  expect(analyzeArray([2]).min).toBe(2);
  expect(analyzeArray([2, 4]).min).toBe(2);
  expect(analyzeArray([1, 2, 3, 4]).min).toBe(1);
  expect(analyzeArray([-8, -4, -2]).min).toBe(-8);
});

test('max is correct', () => {
  expect(analyzeArray([1]).max).toBe(1);
  expect(analyzeArray([2]).max).toBe(2);
  expect(analyzeArray([2, 4]).max).toBe(4);
  expect(analyzeArray([1, 2, 3, 4]).max).toBe(4);
  expect(analyzeArray([-8, -4, -2]).max).toBe(-2);
});

test('length is correct', () => {
  expect(analyzeArray([1]).length).toBe(1);
  expect(analyzeArray([2]).length).toBe(1);
  expect(analyzeArray([2, 4]).length).toBe(2);
  expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
  expect(analyzeArray([-8, -4, -2]).length).toBe(3);
});

test('full object returned', () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test('empty array returns null values', () => {
  expect(analyzeArray([]).average).toBeNull();
  expect(analyzeArray([]).min).toBeNull();
  expect(analyzeArray([]).max).toBeNull();
  expect(analyzeArray([]).length).toBeNull();
});

test('non array returns null values', () => {
  expect(analyzeArray(4).average).toBeNull();
  expect(analyzeArray(4).min).toBeNull();
  expect(analyzeArray(4).max).toBeNull();
  expect(analyzeArray(4).length).toBeNull();
  expect(analyzeArray('String').average).toBeNull();
  expect(analyzeArray('String').min).toBeNull();
  expect(analyzeArray('String').max).toBeNull();
  expect(analyzeArray('String').length).toBeNull();
});
