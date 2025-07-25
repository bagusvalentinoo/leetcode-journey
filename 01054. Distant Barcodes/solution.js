/**
 * Problem: 1054. Distant Barcodes
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Rearranges barcodes so no two adjacent elements are the same
 *
 * @param {number[]} barcodes - Array of barcodes
 *
 * @returns {number[]} - Rearranged array
 */
const rearrangeBarcodes = (barcodes) => {
  // If barcodes is null/undefined or has 2 or fewer elements, return as is (no rearrangement needed)
  if (!barcodes || barcodes.length <= 2) return barcodes

  // Call rearrangeOnce to rearrange the barcodes array in-place, starting with the first pass
  rearrangeOnce(barcodes, true)

  // Return the rearranged barcodes array
  return barcodes
}

/**
 * Rearranges barcodes in one pass to avoid adjacent duplicates
 *
 * @param {number[]} barcodes - Barcodes array
 * @param {boolean} isFirstPass - True if first pass
 *
 * @returns {void}
 */
const rearrangeOnce = (barcodes, isFirstPass) => {
  // Flag to track if any swaps have occurred during this pass
  let swapped = false

  // Iterate through the barcodes array starting from the second element
  for (let i = 1; i < barcodes.length; i++) {
    // Check if the current barcode is the same as the previous one (adjacent duplicate)
    if (barcodes[i] === barcodes[i - 1]) {
      // Set swapped to true since a swap will be performed
      swapped = true
      // Find an index with a different value to swap with the current duplicate
      const swapIndex = findIndexToSwap(barcodes, i)
      // Swap the current duplicate with the found index to avoid adjacent duplicates
      swap(barcodes, i, swapIndex)
    }
  }

  // If this is the first pass and any swaps occurred, perform another pass to ensure no adjacent duplicates remain
  if (isFirstPass && swapped) rearrangeOnce(barcodes, false)
}

/**
 * Finds an index with a different value to swap with index i
 *
 * @param {number[]} barcodes - The barcodes array
 * @param {number} i - Index of duplicate
 *
 * @returns {number} - Index to swap
 *
 * @throws {Error} - If no different value found
 */
const findIndexToSwap = (barcodes, i) => {
  // Loop through the array starting from the next index after i to find a different value
  for (let j = i + 1; j < barcodes.length; j++)
    // If a different value is found, return its index for swapping
    if (barcodes[j] !== barcodes[i]) return j

  // If not found ahead, loop from the start of the array up to index i
  for (let j = 0; j < i; j++)
    // If a different value is found, return its index for swapping
    if (barcodes[j] !== barcodes[i]) return j

  // If no different value is found in the array, throw an error
  throw new Error(`No different value found for ${barcodes[i]}`)
}

/**
 * Swap two elements in an array
 *
 * @param {any[]} arr - The array
 * @param {number} a - First index
 * @param {number} b - Second index
 *
 * @returns {void}
 */
const swap = (arr, a, b) => {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
}
