/**
 * Problem: 3445. Maximum Difference Between Even and Odd Frequency II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 98 ms (Beats 100%)
 */

/**
 * Find the maximum difference between character counts in a substring
 *
 * @param {string} s - Input string with digits 0-5
 * @param {number} k - Minimum substring length
 *
 * @returns {number} - Maximum difference between two character counts
 */
const maxDifference = (s, k) => {
  // Get the length of input string
  const stringLength = s.length
  // Initialize maximum difference to negative infinity
  let maxDiff = -Infinity

  // Helper function to get status based on parity of two counts
  const getStatus = (countA, countB) => ((countA & 1) << 1) | (countB & 1)

  // Try all pairs of different characters from '0' to '5'
  for (const charA of ['0', '1', '2', '3', '4', '5']) {
    for (const charB of ['0', '1', '2', '3', '4', '5']) {
      if (charA === charB) continue

      // Track best differences for each status combination
      const bestDifferences = [Infinity, Infinity, Infinity, Infinity]
      // Count occurrences of character A and B in current window
      let countA = 0,
        countB = 0
      // Count occurrences of character A and B up to left pointer
      let previousCountA = 0,
        previousCountB = 0
      // Left boundary of sliding window
      let leftPointer = -1

      // Expand window with right pointer
      for (let rightPointer = 0; rightPointer < stringLength; rightPointer++) {
        countA += s[rightPointer] === charA ? 1 : 0
        countB += s[rightPointer] === charB ? 1 : 0

        // Shrink window when conditions are met
        while (
          rightPointer - leftPointer >= k &&
          countB - previousCountB >= 2
        ) {
          const leftStatus = getStatus(previousCountA, previousCountB)

          bestDifferences[leftStatus] = Math.min(
            bestDifferences[leftStatus],
            previousCountA - previousCountB
          )
          leftPointer++

          previousCountA += s[leftPointer] === charA ? 1 : 0
          previousCountB += s[leftPointer] === charB ? 1 : 0
        }

        // Check for valid combination and update maximum difference
        const rightStatus = getStatus(countA, countB)

        if (bestDifferences[rightStatus ^ 0b10] !== Infinity)
          maxDiff = Math.max(
            maxDiff,
            countA - countB - bestDifferences[rightStatus ^ 0b10]
          )
      }
    }
  }

  return maxDiff
}
