/**
 * Problem: 2411. Smallest Subarrays With Maximum Bitwise OR
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 32 ms (Beats 100%)
 */

/**
 * Returns lengths of smallest subarrays starting at each index
 *
 * @param {number[]} nums - Array of non-negative integers
 *
 * @returns {number[]} - Lengths for each index
 */
const smallestSubarrays = (nums) => {
  // Get the length of the input array
  const n = nums.length

  // Initialize the answer array with 1s (default length for each index)
  const answer = new Array(n).fill(1),
    // Track the last occurrence of each bit (0-29) in the array
    last = new Array(30).fill(-1)

  // Iterate backwards through the array
  for (let i = n - 1; i >= 0; --i) {
    // For each bit position (0-29), check if it's set in nums[i]
    for (let bit = 0; bit < 30; ++bit)
      if (nums[i] & (1 << bit))
        // Update the last occurrence of this bit
        last[bit] = i

    // Initialize max_last to current index
    let max_last = i

    // Find the farthest index where any bit is set
    for (let bit = 0; bit < 30; ++bit)
      if (last[bit] > max_last) max_last = last[bit]

    // Set the answer for index i as the length of the smallest subarray
    answer[i] = max_last - i + 1
  }

  // Return the array of lengths
  return answer
}
