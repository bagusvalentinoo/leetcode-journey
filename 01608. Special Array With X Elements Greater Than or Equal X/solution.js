/**
 * Problem: 1608. Special Array With X Elements Greater Than or Equal X
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds special x with exactly x numbers greater than or equal to x
 *
 * @param {number[]} nums - Input array of non-negative integers
 *
 * @returns {number} Special value x, or -1 if none exists
 */
const specialArray = (nums) => {
  // Store array length as upper bound for candidate x
  const length = nums.length

  // Try each candidate x from 0 to length
  for (let i = 0; i <= length; i++) {
    // Initialize count of numbers greater than or equal to i
    let counter = 0

    // Count numbers greater than or equal to candidate i
    for (let j = 0; j < length; j++)
      // Increment counter when current number meets threshold
      if (nums[j] >= i) counter++

    // Return candidate when count matches candidate value
    if (counter === i) return counter
  }

  // Return -1 when no special value exists
  return -1
}
