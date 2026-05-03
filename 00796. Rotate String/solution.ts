/**
 * Problem: 796. Rotate String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if one string can be rotated to become another string
 *
 * @param s - The original string
 * @param goal - The target string
 *
 * @returns Whether s can be rotated to become goal
 */
const rotateString = (s: string, goal: string): boolean =>
  s.length === goal.length && (s + s).includes(goal)
