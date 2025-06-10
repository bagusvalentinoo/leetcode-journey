/**
 * Problem: 3442. Maximum Difference Between Even and Odd Frequency I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Finds the maximum difference between the highest odd frequency and lowest even frequency
 *
 * @param {string} s - Input string of lowercase English letters
 *
 * @returns {number} - Maximum difference between odd and even frequencies
 */
const maxDifference = (s) => {
  // Create frequency map to count character occurrences
  const frequencyMap = new Map()
  // Initialize max odd frequency and min even frequency
  let maxOddFreq = -Infinity,
    minEvenFreq = Infinity

  // Count frequency of each character
  for (const char of s)
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1)

  // Find maximum odd frequency and minimum even frequency
  for (const frequency of frequencyMap.values()) {
    // Check if frequency is odd or even and update max/min accordingly
    if (frequency % 2 !== 0) maxOddFreq = Math.max(maxOddFreq, frequency)
    // If frequency is even, update minEvenFreq
    else minEvenFreq = Math.min(minEvenFreq, frequency)
  }

  // Return the difference between max odd and min even frequencies
  return maxOddFreq - minEvenFreq
}
