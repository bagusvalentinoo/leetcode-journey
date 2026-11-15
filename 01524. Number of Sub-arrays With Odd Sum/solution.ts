/**
 * Problem: 1524. Number of Sub-arrays With Odd Sum
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count subarrays whose sum is odd
 *
 * @param arr - Input array of integers
 *
 * @returns Number of odd-sum subarrays modulo 10^9 + 7
 */
const numOfSubarrays = (arr: number[]): number => {
  // Count prefix sums with odd parity using a mutable running sum
  let sum: number = 0
  const odd: number = arr.reduce(
    (count: number, number: number): number => count + ((sum += number) & 1),
    0
  )

  // Count even prefix sums, including the empty prefix sum
  const even: number = arr.length + 1 - odd

  // Odd-sum subarrays pair one odd prefix sum with one even prefix sum
  return (odd * even) % 1_000_000_007
}
