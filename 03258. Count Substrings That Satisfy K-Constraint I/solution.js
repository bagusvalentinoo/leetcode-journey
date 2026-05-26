/**
 * Problem: 3258. Count Substrings That Satisfy K-Constraint I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts substrings where count of 0s or 1s is <= k
 *
 * @param {string} s - Binary string
 * @param {number} k - Maximum allowed count of 0s or 1s
 *
 * @returns {number} Number of valid substrings
 */
const countKConstraintSubstrings = (s, k) => {
  // Initialize sliding window pointers and counters
  let windowStart = 0,
    zeroCount = 0,
    oneCount = 0

  // Counter for valid substrings
  let totalValidSubstrings = 0

  // Length of the input string
  const stringLength = s.length

  // Expand window by moving right pointer
  for (let windowEnd = 0; windowEnd < stringLength; windowEnd++) {
    // If current character is '0', increment zero count
    if (s[windowEnd] === '0') zeroCount++
    // Otherwise, current character is '1', increment one count
    else oneCount++

    // Shrink window from left while both counts exceed k
    while (zeroCount > k && oneCount > k) {
      // If the character at left pointer is '0', decrement zero count
      if (s[windowStart] === '0') zeroCount--
      // Otherwise, it must be '1', so decrement one count
      else oneCount--

      // Move left pointer forward
      windowStart++
    }

    // Add number of valid substrings ending at current right pointer
    totalValidSubstrings += windowEnd - windowStart + 1
  }

  // Return the total count of valid substrings
  return totalValidSubstrings
}
