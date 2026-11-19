/**
 * Problem: 2011. Final Value of Variable After Performing Operations
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculate the value after performing all operations
 *
 * @param operations - Operations to perform
 *
 * @returns Final value of X
 */
const finalValueAfterOperations = (operations: string[]): number => {
  // Start X at its specified initial value
  let value: number = 0

  // Adjust X according to each operation's middle character
  for (const operation of operations) value += operation[1] === '+' ? 1 : -1

  // Return the final value of X
  return value
}
