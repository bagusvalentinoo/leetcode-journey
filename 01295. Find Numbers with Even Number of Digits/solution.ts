/**
 * Problem: 1295. Find Numbers with Even Number of Digits
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts numbers with even number of digits in an array
 *
 * @param nums - Input array of integers
 *
 * @returns Count of numbers with even digits
 */
const findNumbers = (nums: number[]): number =>
  nums.reduce((acc: number, curr: number) => {
    // Initialize digits to 0 and x to the current number
    let digits = 0
    let x = curr

    // Count the number of digits in the current number
    while (x >= 1) {
      // Divide x by 10 to remove the last digit
      x = x / 10
      // Increment digits count
      digits++
    }

    // If the number of digits is even, increment the accumulator
    if (curr !== 0 && digits % 2 === 0) acc += 1

    // Return the accumulator
    return acc
  }, 0)
