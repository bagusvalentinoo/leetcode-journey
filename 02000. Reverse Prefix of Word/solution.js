/**
 * Problem: 2000. Reverse Prefix of Word
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses prefix ending at first occurrence of ch
 *
 * @param {string} word - Input string
 * @param {string} ch - Target character
 *
 * @returns {string} String with prefix reversed
 */
const reversePrefix = (word, ch) => {
  // Find first occurrence of target character
  const endIndex = word.indexOf(ch)

  // Return original word if character not found
  if (endIndex === -1) return word

  // Convert string to array for in-place reversal
  const chars = word.split('')

  // Initialize two pointers at prefix boundaries
  let left = 0
  let right = endIndex

  // Reverse prefix with two-pointer swap
  while (left < right) {
    // Swap characters at left and right pointers
    const temp = chars[left]
    chars[left] = chars[right]
    chars[right] = temp
    left++
    right--
  }

  // Join array back into string
  return chars.join('')
}
