/**
 * Problem: 1053. Previous Permutation With One Swap
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the previous permutation of the array with one swap
 *
 * @param {number[]} arr - Input array
 *
 * @returns {number[]} - Array after at most one swap
 */
const prevPermOpt1 = (arr) => {
  // Iterate from the end of the array to the beginning
  for (let i = arr.length - 1; i > 0; i--) {
    // Get the current value and the previous value
    const currentValue = arr[i]
    const previousValue = arr[i - 1]

    // Continue if the current value is not less than the previous value
    if (currentValue >= previousValue) continue

    // Initialize swap index and max value for tracking the best swap candidate
    let swapIndex = -1
    let maxSwapValue = 0

    // Search for the largest value less than previousValue to swap
    for (let j = i; j < arr.length; j++) {
      const candidateValue = arr[j]

      // Skip if candidateValue is not greater than maxSwapValue or not less than previousValue
      if (candidateValue <= maxSwapValue || candidateValue >= previousValue)
        continue

      // Update swapIndex and maxSwapValue with the current candidate
      swapIndex = j
      maxSwapValue = candidateValue
    }

    // Swap previousValue with the best candidate found
    ;[arr[i - 1], arr[swapIndex]] = [arr[swapIndex], arr[i - 1]]

    // Only one swap allowed, so break after swapping
    break
  }

  // Return the modified array
  return arr
}
