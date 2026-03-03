/**
 * Problem: 1545. Find Kth Bit in Nth Binary String
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the k-th bit in the binary string S(n) where:
 * S(1) = "0"
 * S(n) = S(n-1) + "1" + reverse(invert(S(n-1)))
 *
 * @param {number} n - The sequence number
 * @param {number} k - The position to find (1-indexed)
 *
 * @returns {character} The k-th bit in S(n)
 */
const findKthBit = (n, k) => {
  // Base case: S(1) is "0"
  if (n === 1) return '0'

  // Length of S(n) = 2^n - 1
  const length = (1 << n) - 1

  // Middle position (1-indexed)
  const mid = Math.floor((length + 1) / 2)

  // If k is exactly the middle, it's always '1'
  if (k === mid) return '1'

  // If k is in the first half, look in S(n-1) at same position
  if (k < mid) return findKthBit(n - 1, k)

  // If k is in the second half:
  // 1. Find corresponding position in reversed inverted part
  // 2. Get that bit from S(n-1)
  const invertedBit = findKthBit(n - 1, length - k + 1)

  // 3. Invert the bit (0->1, 1->0)
  return invertedBit === '0' ? '1' : '0'
}
