/**
 * Problem: 3866. First Unique Even Element
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds first even number that appears exactly once
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} First unique even number or -1 if not found
 */
const firstUniqueEven = (nums) => {
  // Create frequency array for numbers 1-100 (index 0 for 1, index 99 for 100)
  const frequency = new Array(100).fill(0)

  // Count occurrences of each number
  for (let i = 0; i < nums.length; i++) frequency[nums[i] - 1]++

  // Iterate through original array to find first unique even number
  for (let i = 0; i < nums.length; i++) {
    // Check if number is even and appears exactly once
    if (nums[i] % 2 === 0 && frequency[nums[i] - 1] === 1) return nums[i]
  }

  // No unique even number found
  return -1
}
