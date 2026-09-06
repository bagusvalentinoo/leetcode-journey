/**
 * Problem: 1598. Crawler Log Folder
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts folder depth after processing crawler log operations
 *
 * @param logs - Array of folder change operations
 *
 * @returns Minimum operations to return to main folder
 */
const minOperations = (logs: string[]): number => {
  // Track current depth from main folder
  let depth: number = 0

  // Process each log operation
  for (const log of logs) {
    // Stay in same folder: no depth change
    if (log === './') continue
    // Move to parent: decrement depth but never below main folder
    else if (log === '../') depth = Math.max(0, depth - 1)
    // Move to child folder: increment depth
    else depth++
  }

  // Return depth as operations needed to go back to main folder
  return depth
}
