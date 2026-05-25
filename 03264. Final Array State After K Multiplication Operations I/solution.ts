/**
 * Problem: 3264. Final Array State After K Multiplication Operations I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Applies multiplier to the smallest element k times
 *
 * @param nums - Input array of integers
 * @param k - Number of operations to perform
 * @param multiplier - Value to multiply with smallest element
 *
 * @returns Final array after k operations
 */
const getFinalState = (
  nums: number[],
  k: number,
  multiplier: number
): number[] => {
  // Perform k operations
  while (k--) {
    // Assume first element is the smallest
    let smallestValue: number = nums[0]
    let smallestIndex: number = 0

    // Find the smallest element in the array
    for (
      let currentIndex: number = 0;
      currentIndex < nums.length;
      currentIndex++
    ) {
      // Update smallest if current element is smaller
      if (nums[currentIndex] < smallestValue) {
        smallestValue = nums[currentIndex]
        smallestIndex = currentIndex
      }
    }

    // Multiply the smallest element by multiplier
    nums[smallestIndex] *= multiplier
  }

  // Return the modified array
  return nums
}
