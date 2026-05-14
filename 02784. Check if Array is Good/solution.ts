/**
 * Problem: 2784. Check if Array is Good
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if array contains 1..n-1 and n appears twice
 *
 * @param nums - Input array
 *
 * @returns True if condition met
 */
const isGood = (nums: number[]): boolean => {
  // Get the maximum number (n) which is length - 1
  const maxNumber: number = nums.length - 1

  // Create a Set from the array for O(1) lookups
  for (
    let uniqueSet: Set<number> = new Set(nums), number: number = 1;
    number < maxNumber;
    number++
  ) {
    // Check if current number exists in the array
    if (!uniqueSet.has(number)) return false
  }

  // Check if the maximum number appears exactly twice
  return nums.indexOf(maxNumber) !== nums.lastIndexOf(maxNumber)
}
