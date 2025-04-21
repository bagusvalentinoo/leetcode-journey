/**
 * Problem: 4. Median of Two Sorted Arrays
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 99.49%)
 */

/**
 * Finds the median of two sorted arrays
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 *
 * @returns {number} - Median of the two sorted arrays
 */
const findMedianSortedArrays = (nums1, nums2) => {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

  // Length of the smaller and larger array
  const m = nums1.length
  const n = nums2.length

  // Binary search bounds
  let low = 0,
    high = m

  // Binary search to find the partition
  while (low <= high) {
    // Partition of the smaller and larger array
    const i = Math.floor((low + high) / 2)
    const j = Math.floor((m + n + 1) / 2) - i

    // Maximum element of the left partition
    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1]
    const minRightA = i === m ? Infinity : nums1[i]

    // Maximum element of the left partition
    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1]
    const minRightB = j === n ? Infinity : nums2[j]

    // If the partition is valid
    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      // If the total number of elements is even
      if ((m + n) % 2 === 0)
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        )

      // If the total number of elements is odd
      return Math.max(maxLeftA, maxLeftB)
    }
    // Adjust the partition
    else if (maxLeftA > minRightB) high = i - 1
    else low = i + 1
  }
}
