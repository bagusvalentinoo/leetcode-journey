/**
 * Problem: 969. Pancake Sorting
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Pancake sort implementation that returns flip indices
 *
 * @param {number[]} arr - Array to sort
 *
 * @returns {number[]} - Sequence of pancake flips
 */
const pancakeSort = (arr) => {
  const n = arr.length
  const result = []

  // Sort from largest to smallest element
  for (let i = n; i > 0; i--) {
    // Find the position of current max value
    const index = arr.indexOf(i)

    // Skip if element is already in correct position
    if (index === i - 1) continue

    // If max isn't at the beginning, flip to bring it to position 0
    if (index !== 0) {
      result.push(index + 1)
      arr = arr
        .slice(0, index + 1)
        .reverse()
        .concat(arr.slice(index + 1))
    }

    // Flip again to move max to its correct position
    result.push(i)
    arr = arr.slice(0, i).reverse().concat(arr.slice(i))
  }

  return result
}
