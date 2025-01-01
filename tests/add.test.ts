import { StringCalculator } from "../src/add";

describe("String Calculator", () => {
  test("Should return Zero(0) for empty string input", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("");
    expect(result).toBe(0);
  });

  test("Should return number for a single input", () => {
    const calculator = new StringCalculator();
    const result = calculator.add("1");
    expect(result).toBe(1);
  });
});
