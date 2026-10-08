/**
 * Problem: 1974. Minimum Time to Type Word Using Special Typewriter
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Computes minimum seconds to type word with circular typewriter
 *
 * @param word - Word to type
 *
 * @returns Minimum seconds to type the word
 */
const minTimeToType = (word: string): number => {
  // Track total seconds spent moving and typing
  let total: number = 0

  // Track previous character position starting at 'a'
  let prev: number = 0

  // Process each character
  for (const ch of word) {
    // Convert current character to alphabet index
    const curr: number = ch.charCodeAt(0) - 97

    // Compute clockwise distance between positions
    const diff: number = Math.abs(curr - prev)

    // Take shorter of clockwise and counterclockwise moves
    const move: number = Math.min(diff, 26 - diff)

    // Add move cost plus one second to type the character
    total += move + 1

    // Update previous position to current character
    prev = curr
  }

  // Return the minimum seconds to type the word
  return total
}
