/**
 * Problem: 1805. Number of Different Integers in a String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts distinct integers in string ignoring leading zeros
 *
 * @param word - String of digits and lowercase letters
 *
 * @returns Count of different integers
 */
const numDifferentIntegers = (word: string): number => {
  // Track normalized integers using hash set
  const seen: Set<string> = new Set()

  // Split word into digit blocks on non-digit characters
  const tokens: string[] = word.replace(/[^0-9]/g, ' ').trim().split(' ')

  // Process each digit block
  for (const token of tokens) {
    // Skip empty blocks from consecutive separators
    if (token === '') continue

    // Strip leading zeros keeping at least one digit
    const normalized: string = token.replace(/^0+/, '') || '0'

    // Mark normalized number as seen
    seen.add(normalized)
  }

  // Return the count of distinct integers
  return seen.size
}
