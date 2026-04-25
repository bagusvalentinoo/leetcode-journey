/**
 * Problem: 3467. Transform Array by Parity
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Replaces evens with 0, odds with 1 and sorts
 *
 * @param nums - Input array
 *
 * @returns Sorted array of 0s and 1s
 */
const transformArray = (nums: number[]): number[] => {
  // Get the length of the input array
  let arrayLength = nums.length

  // Initialize result array filled with zeros
  let result = new Array(arrayLength).fill(0)

  // Pointer for placing ones from the end
  let pointer = arrayLength - 1

  // Iterate through the array from right to left
  while (--arrayLength >= 0) {
    // If current number is odd
    if (nums[arrayLength] % 2) {
      // Place 1 at the current pointer position
      result[pointer] = 1
      // Move pointer left
      pointer--
    }
  }

  // Return the transformed array (0s first, then 1s)
  return result
}
