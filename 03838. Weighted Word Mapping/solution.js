/**
 * Problem: 3838. Weighted Word Mapping
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Maps word weights to generate encoded string based on character weights
 *
 * @param {string[]} words - Array of input words
 * @param {number[]} weights - Array of weights for letters a-z
 *
 * @returns {string} Encoded result string
 */
const mapWordWeights = (words, weights) => {
  // Initialize empty result string
  let resultString = ''

  // Iterate through each word in the input array
  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    // Get current word
    const currentWord = words[wordIndex]

    // Initialize sum of weights for current word
    let totalWeight = 0

    // Calculate sum of weights for all characters in current word
    for (let charIndex = 0; charIndex < currentWord.length; charIndex++) {
      // Convert character to index (0 for 'a', 25 for 'z')
      const charIndexValue = currentWord.charCodeAt(charIndex) - 97

      // Add corresponding weight to total
      totalWeight += weights[charIndexValue]
    }

    // Get character from end of alphabet (122 = 'z')
    // Position determined by totalWeight modulo 26
    const encodedChar = String.fromCharCode(122 - (totalWeight % 26))

    // Append encoded character to result string
    resultString += encodedChar
  }

  // Return the encoded result string
  return resultString
}
