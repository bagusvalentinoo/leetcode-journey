/**
 * Problem: 2000. Reverse Prefix of Word
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses prefix ending at first occurrence of ch
 *
 * @param word - Input string
 * @param ch - Target character
 *
 * @returns String with prefix reversed
 */
const reversePrefix = (word: string, ch: string): string => {
  // Find first occurrence of target character
  const endIndex: number = word.indexOf(ch)

  // Return original word if character not found
  if (endIndex === -1) return word

  // Convert string to array for in-place reversal
  const chars: string[] = word.split('')

  // Initialize two pointers at prefix boundaries
  let left: number = 0
  let right: number = endIndex

  // Reverse prefix with two-pointer swap
  while (left < right) {
    // Swap characters at left and right pointers
    const temp: string = chars[left]
    chars[left] = chars[right]
    chars[right] = temp
    left++
    right--
  }

  // Join array back into string
  return chars.join('')
}
