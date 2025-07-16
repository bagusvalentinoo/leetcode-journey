/**
 * Problem: 3201. Find the Maximum Length of Valid Subsequence I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Finds the maximum length of alternating odd/even subsequence or consecutive same-parity numbers
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {number} - Maximum length found
 */
const maximumLength = (nums) => {
  // Initialize dynamic programming array to store max alternating subsequence length ending at each index
  const dp = []

  // Track count of odd and even numbers encountered so far
  let numOfOdd = 0,
    numOfEven = 0

  // Track the last index where we encountered an odd/even number
  let lastOddIndex = -1,
    lastEvenIndex = -1

  // Track the maximum length found so far (minimum is 1 for non-empty array)
  let maxLength = 1

  // Initialize dp array with 1 (each element forms subsequence of length 1)
  for (let i = 0; i < nums.length; i++) dp.push(1)

  // Process the first element to set initial state
  if (nums[0] % 2 === 0) {
    // First element is even
    numOfEven = 1
    lastEvenIndex = 0
  } else {
    // First element is odd
    numOfOdd = 1
    lastOddIndex = 0
  }

  // Process remaining elements starting from index 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      // Current element is even
      numOfEven++

      // If we have a previous odd number, extend that alternating subsequence
      if (lastOddIndex !== -1) dp[i] = dp[lastOddIndex] + 1

      // Update the last even index to current position
      lastEvenIndex = i
    } else {
      // Current element is odd
      numOfOdd++

      // If we have a previous even number, extend that alternating subsequence
      if (lastEvenIndex !== -1) dp[i] = dp[lastEvenIndex] + 1

      // Update the last odd index to current position
      lastOddIndex = i
    }

    // Find the maximum between consecutive same-parity count and alternating subsequence length
    const greaterNumber = Math.max(numOfOdd, numOfEven)

    // Update global maximum length
    maxLength = Math.max(greaterNumber, dp[i])
  }

  // Return the maximum length found
  return maxLength
}
