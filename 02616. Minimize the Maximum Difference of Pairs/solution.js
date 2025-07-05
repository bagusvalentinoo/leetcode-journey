/**
 * Problem: 2616. Minimize the Maximum Difference of Pairs
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Minimizes the maximum difference among p pairs from a sorted array
 *
 * @param {number[]} nums - Array of integers
 * @param {number} p - Number of pairs to find
 *
 * @returns {number} - The minimized maximum difference
 */
const minimizeMax = (nums, p) => {
  // Get the length of the input array
  const arrayLength = nums.length

  // Return 0 if no pairs needed or array too small
  if (p === 0 || arrayLength < 2) return 0

  // Create and sort a copy of the array for efficient processing
  const sortedNumbers = Uint32Array.from(nums)
  sortedNumbers.sort()

  // Calculate the last valid index for pairs
  const lastIndex = arrayLength - 1
  // Pre-calculate differences between adjacent elements
  const differences = new Uint32Array(lastIndex)

  // Fill the differences array with adjacent element differences
  for (let i = 0; i < lastIndex; i++)
    differences[i] = sortedNumbers[i + 1] - sortedNumbers[i]

  // Initialize binary search bounds
  let left = 0
  let right = sortedNumbers[arrayLength - 1] - sortedNumbers[0]

  // Binary search for the minimum possible maximum difference
  while (left < right) {
    // Calculate middle point avoiding overflow
    const mid = (left + right) >>> 1

    // Count how many valid pairs can be formed with current limit
    let pairCount = 0

    // Greedy approach: try to form pairs with differences <= mid
    for (let i = 0; i < lastIndex && pairCount < p; ) {
      // If current difference is within limit, form a pair
      if (differences[i] <= mid) {
        pairCount++
        i += 2 // Skip next element as it's already paired
      }
      // Otherwise, move to next element
      else i += 1
    }

    // Adjust search bounds based on whether we found enough pairs
    if (pairCount >= p) right = mid
    // Need larger limit to form enough pairs
    else left = mid + 1
  }

  return left
}
