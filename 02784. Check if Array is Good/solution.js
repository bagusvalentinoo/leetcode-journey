/**
 * Problem: 2784. Check if Array is Good
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if array contains 1..n-1 and n appears twice
 *
 * @param {number[]} nums - Input array
 *
 * @returns {boolean} True if condition met
 */
const isGood = (nums) => {
  // Get the maximum number (n) which is length - 1
  const maxNumber = nums.length - 1

  // Create a Set from the array for O(1) lookups
  for (
    let uniqueSet = new Set(nums), number = 1;
    number < maxNumber;
    number++
  ) {
    // Check if current number exists in the array
    if (!uniqueSet.has(number)) return false
  }

  // Check if the maximum number appears exactly twice
  return nums.indexOf(maxNumber) !== nums.lastIndexOf(maxNumber)
}
