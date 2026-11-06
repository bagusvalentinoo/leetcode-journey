/**
 * Problem: 2215. Find the Difference of Two Arrays
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds distinct integers unique to each array using hash sets
 *
 * @param nums1 - First input array of integers
 * @param nums2 - Second input array of integers
 *
 * @returns Two lists of distinct integers unique to each array
 */
const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  // Offset to shift negative values into valid array indices
  const OFFSET: number = 1000

  // Bitmask array covering the full value range [-1000, 1000]
  const seen: Uint8Array = new Uint8Array(2001)

  // Mark each element from nums1 with bit 0
  for (let i: number = 0; i < nums1.length; i++)
    seen[nums1[i] + OFFSET] |= 1

  // Mark each element from nums2 with bit 1
  for (let i: number = 0; i < nums2.length; i++)
    seen[nums2[i] + OFFSET] |= 2

  // Collect distinct elements unique to each array
  const diff1: number[] = [], diff2: number[] = []

  // Scan bitmask to separate values by presence
  for (let i: number = 0; i < 2001; i++) {
    const val: number = seen[i]

    // Value appears only in nums1
    if (val === 1) diff1.push(i - OFFSET)
    // Value appears only in nums2
    else if (val === 2) diff2.push(i - OFFSET)
  }

  // Return both difference lists
  return [diff1, diff2]
}
