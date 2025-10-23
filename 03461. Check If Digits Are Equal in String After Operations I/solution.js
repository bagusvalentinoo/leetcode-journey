/**
 * Problem: 3461. Check If Digits Are Equal in String After Operations I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if a string of digits reduces to two identical digits
 *
 * @param {string} s - Numeric string input
 *
 * @returns {boolean} - True if final two digits are identical, else false
 */
const hasSameDigits = (s) => {
  // Initialize the length of the input string
  let n = s.length

  // Create an empty array to store numeric values of the string
  const q = []

  // Loop through each character in the string
  for (let i = 0; i < n; i++)
    // Convert the character to an integer and push it into the array
    q.push(parseInt(s[i]))

  // Continue reducing the array until only two elements remain
  while (n > 2) {
    // Decrease the length counter as the array shrinks
    n--

    // Update each element in the array with the sum of adjacent elements modulo 10
    for (let i = 0; i < n; i++) q[i] = (q[i] + q[i + 1]) % 10
  }

  // Return true if the final two digits are identical, otherwise false
  return q[0] === q[1]
}
