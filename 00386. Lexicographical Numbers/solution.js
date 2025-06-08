/**
 * Problem: 386. Lexicographical Numbers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Returns numbers from 1 to n in lexicographical order
 *
 * @param {number} n - Upper limit
 *
 * @returns {number[]} - Numbers in lexicographical order
 */
const lexicalOrder = (n) => {
  // Array to store the lexicographically ordered numbers
  const result = []

  // Depth-first search function to generate numbers in lexicographical order
  const dfs = (currentNum) => {
    if (currentNum > n) return

    result.push(currentNum)

    // Try appending digits 0-9 to the current number
    for (let digit = 0; digit <= 9; digit++) {
      const nextNum = currentNum * 10 + digit

      // Stop if we exceed the upper limit
      if (nextNum > n) break

      dfs(nextNum)
    }
  }

  // Start DFS from single-digit numbers 1-9
  for (let startDigit = 1; startDigit <= 9; startDigit++) {
    // Stop if we exceed the upper limit
    if (startDigit > n) break

    dfs(startDigit)
  }

  return result
}
