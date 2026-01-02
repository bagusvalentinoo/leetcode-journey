/**
 * Problem: 961. N-Repeated Element in Size 2N Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the element repeated n times in a 2n-sized array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - The repeated element
 */
const repeatedNTimes = (nums) => {
  // Continue sampling random indices until a matching pair is found.
  while (true) {
    // Generate two random indices within the array bounds.
    const i = Math.floor(Math.random() * nums.length)
    const j = Math.floor(Math.random() * nums.length)

    // Check if the indices are different and the values at those indices are equal.
    if (i !== j && nums[i] === nums[j]) {
      // Return the value since it's the repeated element.
      return nums[i]
    }
    
    // If condition is not met, continue to next iteration.
  }
}
