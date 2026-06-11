/**
 * Problem: 1422. Maximum Score After Splitting a String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates maximum score by splitting binary string
 *
 * @param {string} s - Binary string containing only '0' and '1'
 *
 * @returns {number} Maximum score achievable
 */
const maxScore = (s) => {
  // Count total number of ones in the string
  let totalOnesCount = 0,
    leftZerosCount = 0,
    leftOnesCount = 0

  // Variable to track the maximum score found
  let maximumScore = -Infinity

  // First pass: count total ones in the string
  for (const character of s) {
    // If character is '1', increment total ones counter
    if (character === '1') totalOnesCount++
  }

  // Second pass: iterate through each possible split point (excluding last character)
  for (let i = 0; i < s.length - 1; i++) {
    // If current character is '0', increment left zeros count
    if (s[i] === '0') leftZerosCount++
    // If current character is '1', increment left ones count
    else leftOnesCount++

    // Calculate score: zeros in left part + ones in right part
    const currentScore = leftZerosCount + (totalOnesCount - leftOnesCount)

    // Update maximum score if current is larger
    maximumScore = Math.max(maximumScore, currentScore)
  }

  // Return the maximum score found
  return maximumScore
}
