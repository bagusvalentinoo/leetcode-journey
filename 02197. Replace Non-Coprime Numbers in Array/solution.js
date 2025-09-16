/**
 * Problem: 2197. Replace Non-Coprime Numbers in Array
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 29 ms (Beats 100%)
 */

/**
 * Returns the GCD of two numbers
 *
 * @param {number} a - First number
 * @param {number} b - Second number
 *
 * @returns {number} The GCD of a and b
 */
const gcd = (a, b) => {
  // Continue looping until the second number becomes zero
  while (b !== 0) {
    // Store the value of b in a temporary variable
    const temp = b

    // Update b to be the remainder of a divided by b
    b = a % b
    // Assign the previous value of b to a
    a = temp
  }

  // Return the GCD, which is now stored in a
  return a
}

/**
 * Merges adjacent non-coprime numbers in an array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number[]} - Resulting array
 */
const replaceNonCoprimes = (nums) => {
  // Initialize an empty array to store the resulting numbers after merging
  const result = []

  // Iterate through each number in the input array
  for (const num of nums) {
    // Add the current number to the result array
    result.push(num)

    // Continue merging while the last two numbers in result are not coprime
    while (result.length > 1) {
      // Get the last two numbers from the result array
      const lastNum = result[result.length - 1],
        secondLastNum = result[result.length - 2]

      // Calculate the GCD of the last two numbers
      const currentGcd = gcd(lastNum, secondLastNum)

      // If the GCD is greater than 1, the numbers are not coprime and should be merged
      if (currentGcd > 1) {
        // Remove the last two numbers from the result array
        result.pop()
        result.pop()

        // Calculate the LCM of the two numbers using GCD
        const lcm = Math.floor((lastNum / currentGcd) * secondLastNum)

        // Push the merged number (LCM) back to the result array
        result.push(lcm)
      }
      // If the numbers are coprime, stop merging
      else break
    }
  }

  // Return the final array after all possible merges
  return result
}
