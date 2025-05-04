/**
 * Problem: 944. Delete Columns to Make Sorted
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 99.25%)
 */

/**
 * Counts columns that need deletion to maintain lexicographic order
 *
 * @param {string[]} strs - Array of equal-length strings
 *
 * @returns {number} - Number of columns to delete
 */
const minDeletionSize = (strs) => {
  // Return 0 if the input array is empty
  if (strs.length === 0) return 0

  let deleteCount = 0
  const wordLength = strs[0].length

  // Check each column for lexicographic order
  for (let col = 0; col < wordLength; col++) {
    // Compare each character with the one in the row above
    for (let row = 1; row < strs.length; row++) {
      // If character is smaller than the one above, column needs deletion
      if (strs[row][col] < strs[row - 1][col]) {
        deleteCount++
        break // Move to next column once we know this one needs deletion
      }
    }
  }

  return deleteCount
}
