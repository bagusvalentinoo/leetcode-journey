/**
 * Problem: 1619. Mean of Array After Removing Some Elements
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates trimmed mean after removing smallest and largest 5%
 *
 * @param arr - Input array of integers
 *
 * @returns Mean of remaining middle 90% of elements
 */
const trimMean = (arr: number[]): number => {
  // Sort array in ascending order
  arr.sort((a: number, b: number): number => a - b)

  // Cache array length and number of elements to remove from each end (5%)
  const n: number = arr.length,
    k: number = n / 20

  // Accumulate sum of middle elements
  let sum: number = 0

  // Loop over middle 90% excluding smallest and largest 5%
  for (let i = k; i < n - k; i++) sum += arr[i]

  // Return mean of remaining elements
  return sum / (n - 2 * k)
}
