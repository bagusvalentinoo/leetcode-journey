/**
 * Problem: 1342. Number of Steps to Reduce a Number to Zero
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts steps to reduce number to zero (even: divide by 2, odd: subtract 1)
 *
 * @param num - Input integer
 *
 * @returns Number of steps required
 */
const numberOfSteps = (num: number): number => {
  // Counter for number of steps taken
  let stepCount: number = 0

  // Continue until number becomes zero
  while (num > 0) {
    // If number is even, divide by 2
    if (num % 2 === 0) num = Math.floor(num / 2)
    // If number is odd, subtract 1
    else num -= 1

    // Increment step counter
    stepCount++
  }

  // Return total steps taken
  return stepCount
}
