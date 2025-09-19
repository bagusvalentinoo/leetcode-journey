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
 * @returns {number} - The GCD of a and b
 */
const gcd = (a, b) => {
  // Continue looping until the first number becomes zero
  while (a !== 0) {
    // Store the current value of 'a' in a temporary variable
    const temp = a

    // Update 'a' to be the remainder of 'b' divided by 'a'
    a = b % a
    // Assign the previous value of 'a' to 'b'
    b = temp
  }

  // Return the GCD, which is stored in 'b'
  return b
}

/**
 * Merges adjacent non-coprime numbers in an array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number[]} - Resulting array
 */
const replaceNonCoprimes = (nums) => {
  // Initialize left pointer to 0 and right pointer to 1
  let l = 0,
    r = 1

  // Loop through the array while the right pointer is within bounds
  while (r < nums.length) {
    // Assign the current values at left and right pointers to variables 'a' and 'b'
    const a = nums[l],
      b = nums[r]

    // Calculate the greatest common divisor (GCD) of 'a' and 'b'
    const g = gcd(a, b)
    // If GCD is greater than 1, the numbers are not coprime
    if (g > 1) {
      // Calculate the least common multiple (LCM) of 'a' and 'b'
      const lcm = (a / g) * b

      // If left pointer is at the start of the array
      if (l < 1) {
        // Replace the value at left pointer with the LCM
        nums[l] = lcm
        // Move the right pointer to the next element
        ++r
      } else {
        // Replace the value at right pointer with the LCM
        nums[r] = lcm
        // Move the left pointer one step back to check for further merging
        --l
      }
    }
    //
    // If numbers are coprime, move both pointers forward and copy the value at right to the next left position
    else nums[++l] = nums[r++]
  }

  // Resize the array to contain only the merged elements
  nums.length = l + 1

  // Return the resulting array
  return nums
}
