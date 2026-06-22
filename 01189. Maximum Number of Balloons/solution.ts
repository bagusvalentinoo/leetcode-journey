/**
 * Problem: 1189. Maximum Number of Balloons
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the max number of "balloon" in text
 *
 * @param text - Input string
 *
 * @returns Max "balloon" count
 */
const maxNumberOfBalloons = (text: string): number => {
  // Helper to count occurrences of a character in text
  const countChar = (char: string): number => text.split(char).length - 1

  // Minimum of required letters
  // 'b', 'a', 'n' appear once in "balloon"
  // 'l' and 'o' appear twice, so divide by 2
  return Math.min(
    countChar('b'),
    countChar('a'),
    countChar('n'),
    Math.floor(countChar('l') / 2),
    Math.floor(countChar('o') / 2)
  )
}
