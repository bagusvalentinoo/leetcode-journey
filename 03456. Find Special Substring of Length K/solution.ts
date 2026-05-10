/**
 * Problem: 3456. Find Special Substring of Length K
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if there's a substring of length k with all identical characters
 *
 * @param s - Input string
 * @param k - Length of substring to check
 *
 * @returns True if such substring exists
 */
const hasSpecialSubstring = (s: string, k: number): boolean =>
  // Split string into groups of consecutive identical characters
  s
    .match(/(.)(\1*)/g)!
    // Check if any group has length exactly k
    .some((group) => group.length === k)
