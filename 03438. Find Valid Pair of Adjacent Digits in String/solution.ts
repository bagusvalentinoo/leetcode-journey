/**
 * Problem: 3438. Find Valid Pair of Adjacent Digits in String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds first adjacent pair where frequency equals digit value
 *
 * @param s - Input string of digits
 *
 * @returns First valid pair or empty string
 */
const findValidPair = (s: string): string => {
  // Build frequency map of each digit in the string
  const frequencyMap: Map<string, number> = s.split('').reduce(
    (freqMap, currentChar) => {
      // Increment count for current digit
      freqMap.set(currentChar, (freqMap.get(currentChar) || 0) + 1)

      // Return map for next iteration
      return freqMap
    },
    // Initialize with empty Map
    new Map<string, number>()
  )

  // Iterate through adjacent pairs in the string
  for (let index: number = 0; index < s.length - 1; index++) {
    // First character of the pair
    const firstChar: string = s[index]
    // Second character of the pair
    const secondChar: string = s[index + 1]

    // Check if characters are different and frequencies match their digit values
    if (
      firstChar !== secondChar &&
      frequencyMap.get(firstChar) === Number(firstChar) &&
      frequencyMap.get(secondChar) === Number(secondChar)
    )
      // Return the valid pair as a string
      return firstChar + secondChar
  }

  // No valid pair found
  return ''
}
