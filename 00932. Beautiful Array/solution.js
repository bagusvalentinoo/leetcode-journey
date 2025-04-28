/**
 * Problem: 932. Beautiful Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Generates a beautiful array of length n
 *
 * @param {number} n - Length of the array
 *
 * @returns {number[]} - A beautiful array
 */
const beautifulArray = (n) => {
  // Initialize the result array with the first element as 1
  let res = [1]

  // Continue generating the array until its length is n
  while (res.length < n) {
    // Create a temporary array to hold the next elements
    const temp = []

    // Add odd numbers to the temporary array
    for (const x of res) if (x * 2 - 1 <= n) temp.push(x * 2 - 1)
    // Add even numbers to the temporary array
    for (const x of res) if (x * 2 <= n) temp.push(x * 2)

    // Update the result array with the temporary array
    res = temp
  }

  // Return the final beautiful array
  return res
}
