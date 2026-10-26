/**
 * Problem: 2124. Check if All A's Appears Before All B's
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks whether all 'a' characters appear before all 'b' characters
 *
 * @param s - String containing only 'a' and 'b' characters
 *
 * @returns True when no 'b' appears before an 'a'
 */
const checkString = (s: string): boolean => !s.includes('ba')
