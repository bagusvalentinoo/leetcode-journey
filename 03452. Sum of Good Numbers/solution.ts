/**
 * Problem: 3452. Sum of Good Numbers
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sums elements that are greater than neighbors at distance k
 *
 * @param nums - Input array of integers
 * @param k - Distance to check neighbors
 *
 * @returns Sum of "good" numbers
 */
const sumOfGoodNumbers = (nums: number[], k: number): number => {
  // Initialize sum accumulator
  let totalSum: number = 0

  // Length of the input array
  const arrayLength: number = nums.length

  // Iterate through each element in the array
  for (let index: number = 0; index < arrayLength; index++) {
    // Check left neighbor at distance k
    if (index >= k && nums[index] <= nums[index - k]) continue
    // Check right neighbor at distance k
    if (index + k < arrayLength && nums[index] <= nums[index + k]) continue

    // Element is greater than both neighbors (or neighbors don't exist)
    totalSum += nums[index]
  }

  // Return sum of good numbers
  return totalSum
}
