/**
 * Problem: 2040. Kth Smallest Product of Two Sorted Arrays
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 132 ms (Beats 100%)
 */

/**
 * Finds the kth smallest product from all possible products of two sorted arrays
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @param {number} k - Position (1-indexed) of the target product
 *
 * @returns {number} - The kth smallest product
 */
const kthSmallestProduct = (nums1, nums2, k) => {
  // Get lengths of both arrays
  const nums1Length = nums1.length,
    nums2Length = nums2.length

  // Find first non-negative index in each array
  let firstNonNegativeInNums1 = 0,
    firstNonNegativeInNums2 = 0

  while (
    firstNonNegativeInNums1 < nums1Length &&
    nums1[firstNonNegativeInNums1] < 0
  )
    firstNonNegativeInNums1++
  while (
    firstNonNegativeInNums2 < nums2Length &&
    nums2[firstNonNegativeInNums2] < 0
  )
    firstNonNegativeInNums2++

  // Initialize binary search bounds
  let leftBound = -1e10,
    rightBound = 1e10

  // Binary search for kth smallest product
  while (leftBound <= rightBound) {
    const midValue = Math.floor((leftBound + rightBound) / 2)

    let count = 0
    // Count products <= midValue from negative * negative pairs
    let index1 = 0,
      index2 = firstNonNegativeInNums2 - 1

    while (index1 < firstNonNegativeInNums1 && index2 >= 0) {
      if (nums1[index1] * nums2[index2] > midValue) index1++
      else {
        count += firstNonNegativeInNums1 - index1
        index2--
      }
    }

    // Count products <= midValue from positive * positive pairs
    index1 = firstNonNegativeInNums1
    index2 = nums2Length - 1

    while (index1 < nums1Length && index2 >= firstNonNegativeInNums2) {
      if (nums1[index1] * nums2[index2] > midValue) index2--
      else {
        count += index2 - firstNonNegativeInNums2 + 1
        index1++
      }
    }

    // Count products <= midValue from negative * positive pairs
    index1 = 0
    index2 = firstNonNegativeInNums2

    while (index1 < firstNonNegativeInNums1 && index2 < nums2Length) {
      if (nums1[index1] * nums2[index2] > midValue) index2++
      else {
        count += nums2Length - index2
        index1++
      }
    }

    // Count products <= midValue from positive * negative pairs
    index1 = firstNonNegativeInNums1
    index2 = 0

    while (index1 < nums1Length && index2 < firstNonNegativeInNums2) {
      if (nums1[index1] * nums2[index2] > midValue) index1++
      else {
        count += nums1Length - index1
        index2++
      }
    }

    // Adjust search bounds based on count
    if (count < k) leftBound = amidValue + 1
    else rightBound = midValue - 1
  }

  return leftBound
}
