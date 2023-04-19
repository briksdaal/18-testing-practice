import calc from './calculator.js';

describe('test operations existing', () => {
  test('calc operations exist', () => {
    expect(calc.add).toBeTruthy();
    expect(calc.subtract).toBeTruthy();
    expect(calc.divide).toBeTruthy();
    expect(calc.multiply).toBeTruthy();
  });

  test('calc operations are functions', () => {
    expect(calc.add).toEqual(expect.any(Function));
    expect(calc.subtract).toEqual(expect.any(Function));
    expect(calc.divide).toEqual(expect.any(Function));
    expect(calc.multiply).toEqual(expect.any(Function));
  });
});

describe('test add operation', () => {
  test('add works with integer numbers', () => {
    expect(calc.add(4, 3)).toBe(7);
    expect(calc.add(0, 0)).toBe(0);
    expect(calc.add(-19, 5)).toBe(-14);
    expect(calc.add(-8, -32)).toBe(-40);
  });

  test('add works with decimal floating point numbers', () => {
    expect(calc.add(4.6, 3)).toBeCloseTo(7.6);
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calc.add(-19, 5.2)).toBeCloseTo(-13.8);
    expect(calc.add(-8.21, -32.45)).toBeCloseTo(-40.66);
  });

  test('add works with random integers', () => {
    for (let i = 0; i < 5; i += 1) {
      const [a, b] = [Math.floor(Math.random() * 200) - 100, Math.floor(Math.random() * 200) - 100];
      expect(calc.add(a, b)).toBe(a + b);
    }
  });

  test('add works with random floats', () => {
    for (let i = 0; i < 5; i += 1) {
      const [a, b] = [Math.random() * 200 - 100, Math.random() * 200 - 100];
      expect(calc.add(a, b)).toBeCloseTo(a + b);
    }
  });
});

describe('test subtract operation', () => {
  test('subtract works with integer numbers', () => {
    expect(calc.subtract(4, 3)).toBe(1);
    expect(calc.subtract(0, 0)).toBe(0);
    expect(calc.subtract(-19, 5)).toBe(-24);
    expect(calc.subtract(-8, -32)).toBe(24);
  });

  test('subtract works with decimal floating point numbers', () => {
    expect(calc.subtract(4.6, 3)).toBeCloseTo(1.6);
    expect(calc.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
    expect(calc.subtract(-19, 5.2)).toBeCloseTo(-24.2);
    expect(calc.subtract(-8.21, -32.45)).toBeCloseTo(24.24);
  });

  test('subtract works with random integers', () => {
    for (let i = 0; i < 5; i += 1) {
      const [a, b] = [Math.floor(Math.random() * 200) - 100, Math.floor(Math.random() * 200) - 100];
      expect(calc.subtract(a, b)).toBe(a - b);
    }
  });

  test('subtract works with random floats', () => {
    for (let i = 0; i < 5; i += 1) {
      const [a, b] = [Math.random() * 200 - 100, Math.random() * 200 - 100];
      expect(calc.subtract(a, b)).toBeCloseTo(a - b);
    }
  });
});

describe('test divide operation', () => {
  test('divide works with integer numbers', () => {
    expect(calc.divide(12, 3)).toBe(4);
    expect(calc.divide(-20, 4)).toBe(-5);
    expect(calc.divide(-8, -8)).toBe(1);
  });

  test('divide works with decimal floating point numbers', () => {
    expect(calc.divide(1, 3)).toBeCloseTo(0.333333);
    expect(calc.divide(0.2, 0.1)).toBeCloseTo(2);
    expect(calc.divide(-100, 6)).toBeCloseTo(-16.66667);
  });

  test('division by zero', () => {
    expect(calc.divide(5, 0)).toBe(Infinity);
    expect(calc.divide(-6, 0)).toBe(-Infinity);
    expect(calc.divide(0, 0)).toBe(NaN);
  });

  test('divide works with random integers', () => {
    for (let i = 0; i < 5; i += 1) {
      const [a, b] = [Math.floor(Math.random() * 200) - 100, Math.floor(Math.random() * 200) - 100];
      expect(calc.divide(a, b)).toBe(a / b);
    }
  });

  test('divide works with random floats', () => {
    for (let i = 0; i < 5; i += 1) {
      const [a, b] = [Math.random() * 200 - 100, Math.random() * 200 - 100];
      expect(calc.divide(a, b)).toBeCloseTo(a / b);
    }
  });
});

describe('test multiply operation', () => {
  test('multiply works with integer numbers', () => {
    expect(calc.multiply(4, 3)).toBe(12);
    expect(calc.multiply(-19, 5)).toBe(-95);
    expect(calc.multiply(-8, -32)).toBe(256);
  });

  test('multiply works with decimal floating point numbers', () => {
    expect(calc.multiply(4.6, 3)).toBeCloseTo(13.8);
    expect(calc.multiply(0.1, 0.2)).toBeCloseTo(0.02);
    expect(calc.multiply(-1, 5.2)).toBeCloseTo(-5.2);
  });

  test('multiplication by zero', () => {
    expect(calc.multiply(5, 0)).toBe(0);
    expect(calc.multiply(-6, 0)).toBe(-0);
    expect(calc.multiply(0, -8)).toBe(-0);
    expect(calc.multiply(0, 0)).toBe(0);
  });

  test('multiply works with random integers', () => {
    for (let i = 0; i < 5; i += 1) {
      const [a, b] = [Math.floor(Math.random() * 200) - 100, Math.floor(Math.random() * 200) - 100];
      expect(calc.multiply(a, b)).toBe(a * b);
    }
  });

  test('multiply works with random floats', () => {
    for (let i = 0; i < 5; i += 1) {
      const [a, b] = [Math.random() * 200 - 100, Math.random() * 200 - 100];
      expect(calc.multiply(a, b)).toBeCloseTo(a * b);
    }
  });
});
