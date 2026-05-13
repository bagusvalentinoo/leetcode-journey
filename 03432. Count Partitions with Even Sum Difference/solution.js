/**
 * Problem: 3432. Count Partitions with Even Sum Difference
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts number of partitions where left sum equals right sum
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Number of valid partitions
 */
const countPartitions = (nums) => {
  // Get the length of the input array
  const arrayLength = nums.length

  // Calculate total sum of all elements in the array
  const totalSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  // If total sum is odd, no partition can have equal sums
  if (totalSum % 2 !== 0) return 0

  // Return number of possible split positions (n-1)
  return arrayLength - 1
}
