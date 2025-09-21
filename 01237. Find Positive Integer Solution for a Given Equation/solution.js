/**
 * Problem: 1237. Find Positive Integer Solution for a Given Equation
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 32 ms (Beats 100%)
 */

/**
 * Finds all positive integer pairs (x, y) such that customfunction.f(x, y) == z
 *
 * @param {CustomFunction} customfunction - Function with method f(x, y)
 * @param {number} z - Target value
 *
 * @returns {number[][]} - Array of valid (x, y) pairs
 */
const findSolution = (customfunction, z) => {
  // Initialize an array to store the valid (x, y) pairs
  const pairs = []
  // Start with x at 1 and y at z (since both x and y are positive integers)
  let x = 1,
    y = z

  // Loop while x is less than or equal to z and y is greater than or equal to 1
  while (x <= z && y >= 1) {
    // Call the custom function with current x and y values
    const value = customfunction.f(x, y)

    //
    // If the function result equals z, store the pair and move to next possible pair
    if (customfunction.f(x, y) === z) {
      pairs.push([x, y])
      x++
      y--
    }
    //
    // If the function result is less than z, increment x to increase the result
    else if (value < z) x++
    //
    // If the function result is greater than z, decrement y to decrease the result
    else y--
  }

  // Return the array of valid pairs
  return pairs
}
