/**
 * Problem: 3120. Count the Number of Special Characters I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts characters that appear in both lowercase and uppercase
 *
 * @param word - Input string
 *
 * @returns Number of characters with both cases present
 */
const numberOfSpecialChars = (word: string): number => {
  // Set to store characters that have both cases present
  const matchingChars = new Set()

  // Iterate through each character in the string
  for (const currentChar of word) {
    // Check if both uppercase and lowercase versions exist in the word
    if (
      word.includes(currentChar.toUpperCase()) &&
      word.includes(currentChar.toLowerCase())
    )
      // Add character to set (will be stored in its original case)
      matchingChars.add(currentChar)
  }

  // Each character appears twice (once in each case), so divide by 2
  return matchingChars.size / 2
}
