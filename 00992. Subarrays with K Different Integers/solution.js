/**
 * Problem: 992. Subarrays with K Different Integers
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Counts subarrays with exactly k distinct integers
 *
 * @param {number[]} nums - Input array
 * @param {number} k - Target distinct count
 *
 * @returns {number} - Count of valid subarrays
 */
const subarraysWithKDistinct = (nums, k) => {
  // Create frequency array for counting occurrences of each number
  const frequency = new Array(nums.length + 1).fill(0)

  // Initialize pointers and counters
  let left = 0,
    right = 0,
    result = 0,
    prefixCount = 0

  while (right < nums.length) {
    // Process current number at right pointer
    const currentNum = nums[right]

    // Increment frequency and decrement remaining distinct numbers if new number
    if (++frequency[currentNum] === 1) k--

    right++

    // If we have too many distinct numbers, adjust left pointer
    if (k < 0) {
      const leftNum = nums[left]

      frequency[leftNum]--
      left++
      k++

      prefixCount = 0
    }

    // If we have exactly k distinct numbers
    if (k === 0) {
      // Move left pointer while maintaining k distinct numbers
      while (frequency[nums[left]] > 1) {
        frequency[nums[left]]--
        left++
        prefixCount++
      }

      // Add valid subarrays to result
      result += prefixCount + 1
    }
  }

  return result
}
