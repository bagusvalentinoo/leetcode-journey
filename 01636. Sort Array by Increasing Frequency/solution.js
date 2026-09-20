/**
 * Problem: 1636. Sort Array by Increasing Frequency
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sorts array by increasing frequency, ties by decreasing value
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number[]} Sorted array by frequency then value
 */
const frequencySort = (nums) => {
  // Count frequency of each value
  const frequency = new Map()

  // Populate frequency map with occurrence counts
  for (const num of nums) frequency.set(num, (frequency.get(num) || 0) + 1)

  // Sort by frequency ascending, then by value descending for ties and Return the sorted array
  return nums.sort((a, b) =>
    frequency.get(a) === frequency.get(b)
      ? b - a
      : frequency.get(a) - frequency.get(b)
  )
}
