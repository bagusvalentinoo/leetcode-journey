/**
 * Problem: 1027. Longest Arithmetic Subsequence
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 182 ms (Beats 100%)
 */

/**
 * Finds the longest arithmetic subsequence length
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {number} - Length of longest arithmetic subsequence
 */
const longestArithSeqLength = (nums) => {
  // Get the length of the input array
  const arrayLength = nums.length

  // Base case: if array has 2 or fewer elements, return its length
  // (any sequence of 2 or fewer elements is arithmetic)
  if (arrayLength <= 2) return arrayLength

  // Create a 2D DP table where dpTable[i][diff] represents the length of
  // arithmetic subsequence ending at index i with difference diff
  // Size is n x 1001 to handle difference range [-500, 500] with offset +500
  const dpTable = Array.from({ length: arrayLength }, () => Array(1001).fill(0))

  // Track the maximum length found so far
  let maxLength = 0

  // Iterate through each element starting from index 1
  for (let currentIndex = 1; currentIndex < arrayLength; currentIndex++) {
    // For each current element, check all previous elements
    for (let previousIndex = 0; previousIndex < currentIndex; previousIndex++) {
      // Calculate the arithmetic difference and add offset of 500
      // to handle negative differences (range becomes [0, 1000])
      const difference = nums[currentIndex] - nums[previousIndex] + 500

      // Update DP table: if there's already a subsequence with this difference
      // at previousIndex, extend it by 1; otherwise start a new subsequence of length 2
      dpTable[currentIndex][difference] =
        dpTable[previousIndex][difference] > 0
          ? dpTable[previousIndex][difference] + 1
          : 2

      // Update the maximum length found
      maxLength = Math.max(maxLength, dpTable[currentIndex][difference])
    }
  }

  // Return the length of the longest arithmetic subsequence
  return maxLength
}
