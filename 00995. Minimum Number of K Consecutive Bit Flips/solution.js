/**
 * Problem: 995. Minimum Number of K Consecutive Bit Flips
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Minimum number of k-bit flips to make all elements 1
 *
 * @param {number[]} nums - Binary array
 * @param {number} k - Subarray length to flip
 *
 * @returns {number} - Minimum flips or -1 if impossible
 */
const minKBitFlips = (nums, k) => {
  // Get array length
  const { length } = nums
  // Track current flip status (0 or 1)
  let flipStatus = 0
  // Count of flip operations performed
  let flipCount = 0

  for (let i = 0; i < length; i++) {
    // Reset flip status if we're past k elements and the element k positions back was flipped
    if (i >= k && nums[i - k] > 1) {
      flipStatus ^= 1
      nums[i - k] -= 2
    }
    // If current element needs to be flipped
    if (nums[i] === flipStatus) {
      // Check if flip is possible (enough elements remaining)
      if (i + k > length) return -1

      flipStatus ^= 1
      flipCount++
      // Mark this element as flipped using value > 1
      nums[i] += 2
    }
  }

  return flipCount
}
