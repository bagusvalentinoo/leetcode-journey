/**
 * Problem: 46. Permutations
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns all permutations of an array of numbers
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number[][]} - All permutations
 */
const permute = (nums) => {
  // Initialize the result array to store all permutations
  const permutations = []

  // Helper function to generate permutations recursively
  const generatePermutations = (index, arr, result) => {
    // If the current index reaches the end, push a copy of the array to result
    if (index === arr.length) {
      result.push([...arr])

      return
    }

    // Iterate through the array and swap elements to generate new permutations
    for (let i = index; i < arr.length; i++) {
      swapElements(i, index, arr) // Swap current element with the index
      generatePermutations(index + 1, arr, result) // Recurse for the next index
      swapElements(i, index, arr) // Swap back to restore original order
    }
  }

  // Swaps two elements in the array
  const swapElements = (a, b, arr) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  // Start generating permutations from index 0
  generatePermutations(0, nums, permutations)

  // Return the array containing all permutations
  return permutations
}
