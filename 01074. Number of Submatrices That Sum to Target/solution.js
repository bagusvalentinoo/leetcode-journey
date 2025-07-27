/**
 * Problem: 1074. Number of Submatrices That Sum to Target
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 103 ms (Beats 100%)
 */

/**
 * Returns the count of contiguous subarrays in arr that sum to target
 *
 * @param {number[]} arr - Input array
 * @param {number} target - Target sum
 *
 * @returns {number} - Count of matching subarrays
 */
const findSubarraysSumsT = (arr, target) => {
  // Initialize count to store the number of matching subarrays
  let count = 0

  // Iterate over all possible starting indices of subarrays
  for (let start = 0; start < arr.length; start++) {
    // Initialize sum for the current subarray starting at 'start'
    let sum = 0

    // Iterate over all possible ending indices for the current subarray
    for (let end = start; end < arr.length; end++) {
      // Add the current element to the running sum
      sum += arr[end]

      // If the running sum matches the target, increment count
      if (sum === target) count++
    }
  }

  // Return the total count of subarrays whose sum equals the target
  return count
}

/**
 * Counts submatrices in a matrix that sum to a target
 *
 * @param {number[][]} matrix - 2D number array
 * @param {number} target - Target sum
 *
 * @returns {number} - Count of matching submatrices
 */

const numSubmatrixSumTarget = (matrix, target) => {
  // Get the number of rows and columns in the matrix
  const rows = matrix.length,
    cols = matrix[0].length

  // Initialize count to store the number of matching submatrices
  let count = 0

  // Iterate over all possible pairs of top and bottom rows
  for (let top = 0; top < rows; top++) {
    // Initialize an array to store the sum of elements in each column between the current top and bottom rows
    const compressed = new Array(cols).fill(0)

    // Expand the bottom row from the current top row to the last row
    for (let bottom = top; bottom < rows; bottom++) {
      // Update the compressed array by adding elements from the current bottom row
      for (let col = 0; col < cols; col++) {
        compressed[col] += matrix[bottom][col]
      }

      // Count the number of contiguous subarrays in compressed that sum to target
      count += findSubarraysSumsT(compressed, target)
    }
  }

  // Return the total count of submatrices whose sum equals the target
  return count
}
