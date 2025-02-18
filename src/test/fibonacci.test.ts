import fibonacci, { fibonacciRecursive } from "../fibonacci";

test("fibonacci of -1 is error", () => {
  expect(() => fibonacciRecursive(-1)).toThrow(/Input must be positive/);
});

test("fibonacci of 0 is 0", () => {
  expect(fibonacciRecursive(0)).toBe(0);
});

test("fibonacci of 1 is 1", () => {
  expect(fibonacciRecursive(1)).toBe(1);
});

test("fibonacci of 2 is 1", () => {
  expect(fibonacciRecursive(2)).toBe(1);
});

test("fibonacci of 6 is 8", () => {
  expect(fibonacciRecursive(6)).toBe(8);
});

test("fibonacci of 10 is 55", () => {
  expect(fibonacciRecursive(10)).toBe(55);
});
