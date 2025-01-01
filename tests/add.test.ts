import { StringCalculator } from '../src/add';

describe('String Calculator', () => {
  test('Should return Zero(0) for empty string input', () => {
    const calculator = new StringCalculator();
    const result = calculator.add('');
    expect(result).toBe(0);
  });

  test('Should return number for a single input', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
    expect(calculator.add('26')).toBe(26);
  });

  test('Should return sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('5,15')).toBe(20);
    expect(calculator.add('25,75')).toBe(100);
  });

  test('Should return sum of all the numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('100,33,44')).toBe(177);
  });

  test('Should handle new lines between numbers (instead of commas)', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('Should handle custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  test('Should throw an error for negative numbers', () => {
    const calculator = new StringCalculator();

    expect(() => calculator.add('1,-2,3')).toThrow(
      'Negative numbers not allowed: -2',
    );
  });

  test('Should include all negative numbers in the error message', () => {
    const calculator = new StringCalculator();

    expect(() => calculator.add('-1,-2,3')).toThrow(
      'Negative numbers are not allowed: -1, -2',
    );
  });
});
