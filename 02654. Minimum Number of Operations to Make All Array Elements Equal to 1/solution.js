/**
 * Problem: 2654. Minimum Number of Operations to Make All Array Elements Equal to 1
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum operations to achieve GCD 1 in the array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Minimum operations or -1
 */
const minOperations = (nums) => {
  // Check if all elements in the array are 1
  if (nums.every((val) => val === 1)) return 0

  // Check if the array contains at least one 1
  if (nums.indexOf(1) >= 0)
    // Return the difference between array length and count of 1s
    return nums.length - nums.filter((val) => val === 1).length

  // Define a helper function to calculate the GCD of two numbers
  const gcd = (a, b) => {
    // Base case: if b is 0, return a
    if (!b) return a

    // Recursive call to calculate GCD
    return gcd(b, a % b)
  }

  // Outer loop to iterate through the array multiple times
  for (let j = 0; j < nums.length; j++) {
    // Inner loop to process pairs of elements in the array
    for (let i = 0; i < nums.length; i++) {
      // Check if the GCD of two consecutive elements is 1
      if (gcd(nums[i], nums[i + 1]) === 1)
        // Return the total operations needed
        return nums.length + j

      // Update the current element with the GCD of the pair
      nums[i] = gcd(nums[i], nums[i + 1])
    }
  }

  // Return -1 if it's not possible to achieve GCD 1
  return -1
}
