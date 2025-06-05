/**
 * Problem: 1004. Max Consecutive Ones III
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds max consecutive 1's in a binary array by flipping at most k zeros
 *
 * @param {number[]} nums - Binary array (0s and 1s)
 * @param {number} k - Max number of zeros to flip
 *
 * @returns {number} - Length of longest sequence of 1's
 */
const longestOnes = (nums, k) => {
  // Initialize sliding window pointers and counters
  let zeroCount = 0,
    start = 0,
    end = 0,
    maxLength = 0

  // Expand the window to the right
  for (end; end < nums.length; end++) {
    // Count zeros encountered
    if (nums[end] === 0) zeroCount++

    // Shrink window from left if we exceed allowed flips
    while (zeroCount > k) {
      // Reduce zero count when removing a zero from window
      if (nums[start] === 0) zeroCount--

      start++
    }

    // Update maximum consecutive ones found so far
    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
}
