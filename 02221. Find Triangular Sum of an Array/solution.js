/**
 * Problem: 2221. Find Triangular Sum of an Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

/**
 * Calculates the triangular sum of an array
 *
 * @param {number[]} nums - Input array of digits
 *
 * @returns {number} - Triangular sum
 */
const triangularSum = (nums) => {
  // Get the length of the input array
  const n = nums.length

  // Initialize the result to store the triangular sum
  let result = 0

  // Initialize the binomial coefficient as BigInt for precision
  let binomialCoefficient = 1n

  // Iterate through each element in the array
  for (let index = 0; index < n; index++) {
    // Update the result using the current binomial coefficient and array value
    result =
      (result +
        Number(((binomialCoefficient % 10n) * BigInt(nums[index])) % 10n)) %
      10

    // Update the binomial coefficient for the next iteration
    binomialCoefficient =
      (binomialCoefficient * BigInt(n - 1 - index)) / BigInt(index + 1)
  }

  // Return the final triangular sum
  return result
}
