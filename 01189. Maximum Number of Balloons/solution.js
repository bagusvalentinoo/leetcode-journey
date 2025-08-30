/**
 * Problem: 1189. Maximum Number of Balloons
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the max number of "balloon" in text
 *
 * @param {string} text - Input string
 *
 * @returns {number} - Max "balloon" count
 */
const maxNumberOfBalloons = (text) => {
  // Initialize a Map to store the frequency of each character needed for "balloon"
  const charFrequency = new Map()

  // Iterate over each character in the input text
  for (const char of text) {
    // Check if the character is one of the required letters for "balloon"
    if (
      char === 'b' ||
      char === 'a' ||
      char === 'l' ||
      char === 'o' ||
      char === 'n'
    ) {
      // Increment the count for the character in the map
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1)
    }
  }

  // Since "l" appears twice in "balloon", divide its count by 2 (rounded down)
  charFrequency.set('l', Math.floor((charFrequency.get('l') || 0) / 2))
  // Since "o" appears twice in "balloon", divide its count by 2 (rounded down)
  charFrequency.set('o', Math.floor((charFrequency.get('o') || 0) / 2))

  // Return the minimum count among all required characters, which determines the max number of "balloon" words that can be formed
  return Math.min(
    charFrequency.get('b') || 0,
    charFrequency.get('a') || 0,
    charFrequency.get('l') || 0,
    charFrequency.get('o') || 0,
    charFrequency.get('n') || 0
  )
}
