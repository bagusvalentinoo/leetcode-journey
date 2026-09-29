/**
 * Problem: 1880. Check if Word Equals Summation of Two Words
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if numerical values of first two words sum to third word value
 *
 * @param firstWord - First word of lowercase letters 'a' to 'j'
 * @param secondWord - Second word of lowercase letters 'a' to 'j'
 * @param targetWord - Target word of lowercase letters 'a' to 'j'
 *
 * @returns True if first value plus second value equals target value
 */
const isSumEqual = (
  firstWord: string,
  secondWord: string,
  targetWord: string
): boolean => {
  // Helper function to convert word to numerical value
  const getValue = (word: string): number => {
    // Initialize accumulated number
    let num: number = 0

    // Process each character in the word
    for (const ch of word) {
      // Shift digits left and append letter value (a -> 0, b -> 1, ...)
      num = num * 10 + (ch.charCodeAt(0) - 97)
    }

    // Return the numerical value of the word
    return num
  }

  // Convert words to numerical values
  const first: number = getValue(firstWord),
    second: number = getValue(secondWord),
    target: number = getValue(targetWord)

  // Return true if summation of first two values equals target value
  return first + second === target
}
