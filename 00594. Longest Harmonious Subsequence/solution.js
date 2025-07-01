/**
 * Problem: 594. Longest Harmonious Subsequence
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

/**
 * Finds the length of the longest harmonious subsequence
 *
 * @param {number[]} nums - Array of numbers
 *
 * @returns {number} - Length of longest harmonious subsequence
 */
const findLHS = (nums) => {
  // Create frequency map to count occurrences of each number
  const frequencyMap = new Map()
  // Track the maximum length of harmonious subsequence found
  let maxLength = 0

  // Count frequency of each number in the array
  for (const num of nums)
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)

  // Check each number and its consecutive number for harmonious subsequence
  for (const [num, count] of frequencyMap)
    if (frequencyMap.has(num + 1))
      maxLength = Math.max(maxLength, count + frequencyMap.get(num + 1))

  return maxLength
}
