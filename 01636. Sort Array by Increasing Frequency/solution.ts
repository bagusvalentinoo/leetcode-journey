/**
 * Problem: 1636. Sort Array by Increasing Frequency
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sorts array by increasing frequency, ties by decreasing value
 *
 * @param nums - Input array of integers
 *
 * @returns Sorted array by frequency then value
 */
const frequencySort = (nums: number[]): number[] => {
  // Count frequency of each value
  const frequency: Map<number, number> = new Map()

  // Populate frequency map with occurrence counts
  for (const num of nums) frequency.set(num, (frequency.get(num) || 0) + 1)

  // Sort by frequency ascending, then by value descending for ties
  nums.sort((a: number, b: number) =>
    frequency.get(a) === frequency.get(b)
      ? b - a
      : frequency.get(a)! - frequency.get(b)!
  )

  // Return the sorted array
  return nums
}
