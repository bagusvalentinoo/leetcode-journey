/**
 * Problem: 1979. Find Greatest Common Divisor of Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns GCD of smallest and largest numbers in array
 *
 * @param nums - Input array of integers
 *
 * @returns GCD of minimum and maximum values
 */
const findGCD = (nums: number[]): number => {
  // Helper to compute GCD of two numbers using Euclidean algorithm
  const getGCD = (a: number, b: number): number =>
    b === 0 ? a : getGCD(b, a % b)

  // Find smallest and largest numbers in the array
  const smallest: number = Math.min(...nums),
    largest: number = Math.max(...nums)

  // Return GCD of smallest and largest numbers
  return getGCD(smallest, largest)
}
