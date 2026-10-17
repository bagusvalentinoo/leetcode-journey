/**
 * Problem: 2032. Two Out of Three
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find distinct values that occur in at least two input arrays
 *
 * @param nums1 - First array of integers
 * @param nums2 - Second array of integers
 * @param nums3 - Third array of integers
 *
 * @returns Values present in at least two arrays
 */
const twoOutOfThree = (
  nums1: number[],
  nums2: number[],
  nums3: number[]
): number[] => {
  // Count the distinct input arrays that contain each value
  const count: Uint8Array = new Uint8Array(101)
  // Record the most recent input array that contained each value
  const lastSeenIn: Uint8Array = new Uint8Array(101).fill(-1)
  // Store values found in at least two input arrays
  const answer: number[] = []

  // Process each input array and its index
  ;[nums1, nums2, nums3].forEach((nums, arrayIndex) => {
    // Process each value in the current input array
    for (const number of nums) {
      // Skip values already counted for the current input array
      if (lastSeenIn[number] === arrayIndex) continue

      // Mark the value as seen in the current input array
      lastSeenIn[number] = arrayIndex
      // Count the current input array for the value
      count[number]++

      // Record values as soon as they appear in a second input array
      if (count[number] === 2) answer.push(number)
    }
  })

  // Return all values that occur in at least two input arrays
  return answer
}
