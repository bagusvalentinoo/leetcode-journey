/**
 * Problem: 1002. Find Common Characters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds common characters present in all strings of the input array
 *
 * @param {string[]} words - Array of strings to analyze
 *
 * @returns {string[]} - Array of common characters (includes duplicates)
 */

const commonChars = (words) => {
  // Array to store common characters
  const result = []
  // Convert first word to array of characters for iteration
  const firstWordChars = [...words[0]]

  // Check each character from first word against all other words
  for (const char of firstWordChars) {
    // If character exists in all words
    if (words.every((word) => word.includes(char))) {
      // Add to result array
      result.push(char)
      // Remove the matched character from each word to handle duplicates
      words = words.map((word) => word.replace(char, ''))
    }
  }

  return result
}
