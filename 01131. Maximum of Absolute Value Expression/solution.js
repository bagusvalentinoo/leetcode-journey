/**
 * Problem: 1131. Maximum of Absolute Value Expression
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the maximum absolute value expression for two arrays
 *
 * @param {number[]} arr1 - The first array of numbers
 * @param {number[]} arr2 - The second array of numbers
 *
 * @returns {number} - The maximum absolute value expression
 */
const maxAbsValExpr = (arr1, arr2) => {
  // Initialize variables to track the maximum and minimum values for each expression form
  let maxSumAddIndex = -Infinity, // For arr1[i] + arr2[i] + i
    minSumAddIndex = Infinity
  let maxSumSubIndex = -Infinity, // For arr1[i] + arr2[i] - i
    minSumSubIndex = Infinity
  let maxDiffAddIndex = -Infinity, // For arr1[i] - arr2[i] + i
    minDiffAddIndex = Infinity
  let maxDiffSubIndex = -Infinity, // For arr1[i] - arr2[i] - i
    minDiffSubIndex = Infinity

  // Iterate through each index of the input arrays
  for (let i = 0; i < arr1.length; i++) {
    // Calculate all four possible expressions for the current index
    const sumAddIndex = arr1[i] + arr2[i] + i,
      sumSubIndex = arr1[i] + arr2[i] - i,
      diffAddIndex = arr1[i] - arr2[i] + i,
      diffSubIndex = arr1[i] - arr2[i] - i

    // Update the maximum and minimum for arr1[i] + arr2[i] + i
    maxSumAddIndex = Math.max(maxSumAddIndex, sumAddIndex)
    minSumAddIndex = Math.min(minSumAddIndex, sumAddIndex)

    // Update the maximum and minimum for arr1[i] + arr2[i] - i
    maxSumSubIndex = Math.max(maxSumSubIndex, sumSubIndex)
    minSumSubIndex = Math.min(minSumSubIndex, sumSubIndex)

    // Update the maximum and minimum for arr1[i] - arr2[i] + i
    maxDiffAddIndex = Math.max(maxDiffAddIndex, diffAddIndex)
    minDiffAddIndex = Math.min(minDiffAddIndex, diffAddIndex)

    // Update the maximum and minimum for arr1[i] - arr2[i] - i
    maxDiffSubIndex = Math.max(maxDiffSubIndex, diffSubIndex)
    minDiffSubIndex = Math.min(minDiffSubIndex, diffSubIndex)
  }

  // Return the largest difference among all four expression forms
  return Math.max(
    maxSumAddIndex - minSumAddIndex,
    maxSumSubIndex - minSumSubIndex,
    maxDiffAddIndex - minDiffAddIndex,
    maxDiffSubIndex - minDiffSubIndex
  )
}
