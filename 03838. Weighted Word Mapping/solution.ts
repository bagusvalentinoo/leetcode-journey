/**
 * Problem: 3838. Weighted Word Mapping
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Maps word weights to generate encoded string based on character weights
 *
 * @param words - Array of input words
 * @param weights - Array of weights for letters a-z
 *
 * @returns Encoded result string
 */
const mapWordWeights = (words: string[], weights: number[]): string => {
  // Iterate through each word in the input array
  for (let index = 0; index < words.length; ++index) {
    // Get the current word
    const word = words[index]

    // Initialize sum of character weights for current word
    let totalWeight = 0

    // Calculate total weight by summing weights of each character
    for (let char = 0; char < word.length; ++char) {
      totalWeight += weights[word.charCodeAt(char) - 97]
    }

    // Replace current word with encoded character
    // 122 = 'z', position determined by totalWeight modulo 26
    words[index] = String.fromCharCode(122 - (totalWeight % 26))
  }

  // Join all encoded characters into final result string
  return words.join('')
}
