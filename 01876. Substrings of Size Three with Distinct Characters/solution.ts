/**
 * Problem: 1876. Substrings of Size Three with Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts good substrings of length three with all distinct characters
 *
 * @param s - Input string of lowercase English letters
 *
 * @returns Number of good substrings of length three
 */
const countGoodSubstrings = (s: string): number => {
  // Store count of good substrings
  let goodCount: number = 0

  // Get string length for loop boundary
  const stringLength: number = s.length

  // Check each window of three consecutive characters
  for (let i = 0; i + 2 < stringLength; i++) {
    // Read the three characters in current window
    const first: string = s[i],
      second: string = s[i + 1],
      third: string = s[i + 2]

    // Count window when all three characters are pairwise distinct
    if (first !== second && first !== third && second !== third) goodCount++
  }

  // Return total number of good substrings
  return goodCount
}
