/**
 * Problem: 3487. Maximum Unique Subarray Sum After Deletion
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the sum of unique positive numbers in the array
 *
 * @param nums - Input array
 *
 * @returns Sum or maximum value
 */
const maxSum = (nums: number[]): number => {
  // Check if all numbers in the array are negative
  if (nums.every((x) => x < 0)) return Math.max(...nums)

  // Create a Set to store unique values from the input array
  const uniqueNumsSet: Set<number> = new Set(nums)

  // Convert the Set to an array and filter out only positive numbers
  const positiveUniqueNums: number[] = Array.from(
    uniqueNumsSet.values()
  ).filter((x) => x > 0)

  // Calculate and return the sum of the filtered positive unique numbers
  return positiveUniqueNums.reduce((total, item) => total + item, 0)
}
