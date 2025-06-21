/**
 * Problem: 3085. Minimum Deletions to Make String K-Special
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Calculates the minimum deletions to make character frequencies differ by at most k
 *
 * @param {string} word - Input string with lowercase letters
 * @param {number} k - Maximum allowed frequency difference
 *
 * @returns {number} - Minimum deletions needed
 */
const minimumDeletions = (word, k) => {
  // Count frequency of each character (a-z)
  const charFrequencies = new Int32Array(26)

  for (let i = 0; i < word.length; i++)
    charFrequencies[word.charCodeAt(i) - 97]++

  // Sort frequencies in ascending order
  charFrequencies.sort((a, b) => a - b)

  // Build suffix sum array for quick range sum queries
  const suffixSums = new Int32Array(charFrequencies.length + 1)

  for (let i = suffixSums.length - 2; i >= 0; i--)
    suffixSums[i] = (suffixSums[i + 1] || 0) + charFrequencies[i]

  // Track the rightmost valid position in sliding window
  let rightPointer = 0
  // Track minimum deletions found so far
  let minDeletions = suffixSums[0]
  // Track cumulative deletions for current position
  let currentDeletions = 0
  // Skip leading zeros in frequency array
  let startIndex = 0

  while (
    startIndex < charFrequencies.length &&
    charFrequencies[startIndex] === 0
  )
    startIndex++

  for (let i = startIndex; i < charFrequencies.length; i++) {
    // Expand window while frequency difference is within k
    while (
      rightPointer + 1 < suffixSums.length &&
      charFrequencies[rightPointer + 1] - charFrequencies[i] <= k
    )
      rightPointer++

    // Calculate deletions for current window configuration
    minDeletions = Math.min(
      minDeletions,
      suffixSums[rightPointer + 1] -
        (charFrequencies[i] + k) *
          (charFrequencies.length - (rightPointer + 1)) +
        currentDeletions
    )

    // Add current frequency to cumulative deletions
    currentDeletions += charFrequencies[i]
  }

  return minDeletions
}
