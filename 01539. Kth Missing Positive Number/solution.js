/**
 * Problem: 1539. Kth Missing Positive Number
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the kth positive integer missing from the sorted array
 *
 * @param {number[]} arr - Sorted strictly increasing array of positive integers
 * @param {number} k - The k-th missing positive integer to find
 *
 * @returns {number} The k-th missing positive integer
 */
const findKthPositive = (arr, k) => {
  // Binary search boundaries over the array indices
  let left = 0,
    right = arr.length

  // Find the largest index where the count of missing numbers stays below k
  while (left < right) {
    // Middle index of the current search window
    const mid = Math.floor((left + right) / 2)

    // Number of positive integers missing before arr[mid]
    // equals arr[mid] minus the (mid + 1) numbers that should precede it
    if (arr[mid] - mid - 1 < k)
      // Not enough missing numbers yet, search the right half
      left = mid + 1
    else
      // At least k missing numbers, narrow the search to the left half
      right = mid
  }

  // The kth missing integer sits right after the first left elements
  return left + k
}
