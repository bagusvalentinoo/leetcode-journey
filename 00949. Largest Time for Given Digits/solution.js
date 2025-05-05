/**
 * Problem: 949. Largest Time for Given Digits
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the latest valid 24-hour time from 4 digits or an empty string if none
 *
 * @param {number[]} arr - Array of 4 digits
 *
 * @returns {string} - Time in "HH:MM" format or empty string
 */
const largestTimeFromDigits = (arr) => {
  // Sort digits in ascending order
  arr.sort((a, b) => a - b)

  const result = []

  // Generate all permutations of the digits and filter valid times
  const permutation = (path, used) => {
    if (path.length === arr.length) {
      // Check if the current permutation forms a valid time
      if (path[2] <= 5 && path[3] <= 9)
        if (
          (path[0] === 0 && path[1] <= 9) ||
          (path[0] === 1 && path[1] <= 9) ||
          (path[0] === 2 && path[1] <= 3)
        )
          result.push([...path])

      return
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue

      // Mark the digit as used and add it to the current path
      used[i] = true

      path.push(arr[i])

      // Recursively generate permutations
      permutation(path, used)

      // Backtrack to explore other permutations
      path.pop()

      used[i] = false
    }
  }

  // Start generating permutations with an empty path
  permutation([], [])

  // Get the latest valid time from the results
  const latest = result[result.length - 1]

  // Return the formatted time or an empty string if no valid time exists
  return latest ? `${latest[0]}${latest[1]}:${latest[2]}${latest[3]}` : ''
}
