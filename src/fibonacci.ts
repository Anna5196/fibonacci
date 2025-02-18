export function fibonacciRecursive(n: number): number {
  if (n < 0) {
    throw new Error("Input must be positive");
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

export default function fibonacci() {}
