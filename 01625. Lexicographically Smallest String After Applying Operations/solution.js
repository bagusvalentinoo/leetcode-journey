/**
 * Problem: 1625. Lexicographically Smallest String After Applying Operations
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Get the smallest lexicographical string after operations
 *
 * @param {string} s - Input string
 * @param {number} a - Increment value
 * @param {number} b - Rotation value
 *
 * @returns {string} - Smallest string
 */
const findLexSmallestString = (s, a, b) => {
  // Get the length of the input string
  const n = s.length

  // Initialize the result with the original string
  let res = s

  // Concatenate the string with itself to simulate rotation
  s = s + s

  // Calculate the greatest common divisor (GCD) of b and n
  const g = gcd(b, n)

  // Iterate through all possible starting points based on the GCD
  for (let i = 0; i < n; i += g) {
    // Extract a substring of length n starting from index i
    const t = [...s.slice(i, i + n)]

    // Minimize the digits at odd indices using the add function
    add(t, n, a, 1)

    // If b is odd, minimize the digits at even indices as well
    if (b % 2 !== 0) add(t, n, a, 0)

    // Convert the modified array back to a string
    const tStr = t.join('')

    // Update the result if the new string is lexicographically smaller
    if (tStr < res) res = tStr
  }

  // Return the smallest lexicographical string found
  return res
}

/**
 * Minimize digits at specific positions
 *
 * @param {string[]} t - String as an array
 * @param {number} n - String length
 * @param {number} a - Increment value
 *
 * @param {number} start - Start index
 */
const add = (t, n, a, start) => {
  // Initialize the minimum value to the highest single digit (9+1=10)
  let minVal = 10

  // Initialize the number of times the increment operation is applied
  let times = 0

  // Iterate through all possible values (0 to 9) for the digit
  for (let i = 0; i < 10; i++) {
    // Calculate the new digit after applying the increment operation
    const added = (t[start].charCodeAt() - '0'.charCodeAt() + i * a) % 10

    // Update the minimum value and the number of times increment is applied
    if (added < minVal) {
      minVal = added
      times = i
    }
  }

  // Apply the increment operation to all digits at the specified positions
  for (let i = start; i < n; i += 2) {
    // Update the digit with the minimum value after applying the operation
    t[i] = String.fromCharCode(
      '0'.charCodeAt() +
        ((t[i].charCodeAt() - '0'.charCodeAt() + times * a) % 10)
    )
  }
}

/**
 * Find GCD of two numbers
 *
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 *
 * @returns {number} - GCD
 */
const gcd = (num1, num2) => {
  // Continue the loop until the second number becomes zero
  while (num2 !== 0) {
    // Store the value of the first number temporarily
    const temp = num1

    // Assign the second number to the first number
    num1 = num2

    // Update the second number to the remainder of the division
    num2 = temp % num2
  }

  // Return the first number as the GCD
  return num1
}
