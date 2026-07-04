/**
 * Problem: 1464. Maximum Product of Two Elements in an Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates maximum product of two largest elements minus 1
 *
 * @param nums - Input array of integers
 *
 * @returns Maximum product of (max1-1)*(max2-1)
 */
const maxProduct = (nums: number[]): number => {
  // Initialize two largest values with minimum safe integer
  let largest: number = Number.MIN_SAFE_INTEGER,
    secondLargest: number = Number.MIN_SAFE_INTEGER

  // Iterate through each number in the array
  for (const currentNumber of nums) {
    // If current number is greater than or equal to largest
    if (currentNumber >= largest) {
      // Shift largest to second largest
      secondLargest = largest
      // Update largest with current number
      largest = currentNumber
    }
    // If current number is between largest and second largest
    else if (currentNumber > secondLargest)
      // Update second largest
      secondLargest = currentNumber
  }

  // Return product of (largest - 1) and (secondLargest - 1)
  return (largest - 1) * (secondLargest - 1)
}
