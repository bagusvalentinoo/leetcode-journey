/**
 * Problem: 1624. Largest Substring Between Two Equal Characters
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds longest substring between two equal characters
 *
 * @param s - Input string of lowercase letters
 *
 * @returns Max length between equal chars, or -1 if none
 */
const maxLengthBetweenEqualCharacters = (s: string): number => {
  // Store string length for loop boundary
  const stringLength: number = s.length

  // Track first occurrence index of each letter, -1 means unseen
  const firstIndex: number[] = new Array(26).fill(-1)

  // Store maximum length found, -1 when no equal pair exists
  let maxLength: number = -1

  // Scan each character with its index
  for (let i = 0; i < stringLength; i++) {
    // Convert character to array index 0-25
    const charIndex: number = s.charCodeAt(i) - 97

    // Check if character was seen before
    if (firstIndex[charIndex] === -1) {
      // Record first occurrence index
      firstIndex[charIndex] = i
    } else {
      // Calculate length between first occurrence and current index excluding both ends
      const currentLength: number = i - firstIndex[charIndex] - 1

      // Update maximum length if current pair is longer
      maxLength = Math.max(maxLength, currentLength)
    }
  }

  // Return the longest length found, or -1 when no character repeats
  return maxLength
}
