/**
 * Problem: 3545. Minimum Deletions for At Most K Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Min deletions to keep at most k distinct chars
 *
 * @param {string} s - Input string
 * @param {number} k - Max distinct chars allowed
 *
 * @returns {number} Minimum deletions
 */
const minDeletion = (s, k) => {
  // Map to store frequency of each character
  const frequencyMap = new Map()

  // Count occurrences of each character in the string
  for (const character of s)
    frequencyMap.set(character, (frequencyMap.get(character) || 0) + 1)

  // Extract frequency values into an array
  const frequencies = Array.from(frequencyMap.values())

  // If number of distinct characters is already ≤ k, no deletions needed
  if (frequencies.length <= k) return 0

  // Sort frequencies in ascending order to remove smallest frequencies first
  frequencies.sort((a, b) => a - b)

  // Counter for total deletions
  let totalDeletions = 0

  // Number of distinct characters that need to be removed
  const charactersToRemove = frequencies.length - k

  // Delete the smallest frequencies until only k distinct characters remain
  for (let i = 0; i < charactersToRemove; i++) totalDeletions += frequencies[i]

  return totalDeletions
}
