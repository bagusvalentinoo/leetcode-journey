/**
 * Problem: 1250. Check If It Is a Good Array
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if the GCD of the array is 1
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {boolean} - True if GCD is 1, else false
 */
const isGoodArray = (nums) => {
  // Helper function to compute the greatest common divisor (GCD) of two numbers
  const gcd = (a, b) => {
    // Loop until the remainder is zero
    while (b !== 0) {
      // Store the value of b temporarily
      const temp = b

      // Update b to the remainder of a divided by b
      b = a % b
      // Assign temp (previous b) to a for next iteration
      a = temp
    }

    // Return the final GCD value
    return a
  }

  // Return false if the input array is empty
  if (nums.length === 0) return false

  // Initialize the GCD value with the first element of the array
  let currentGcd = nums[0]

  // Iterate through the rest of the array to compute the overall GCD
  for (let i = 1; i < nums.length; i++) {
    // Update the GCD with the next element
    currentGcd = gcd(currentGcd, nums[i])

    // If at any point the GCD becomes 1, return true immediately
    if (currentGcd === 1) return true
  }

  // Return true if the final GCD is 1, otherwise false
  return currentGcd === 1
}
