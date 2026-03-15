/**
 * Problem: 1313. Decompress Run-Length Encoded List
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Decompresses run-length encoded list
 *
 * @param {number[]} nums - RLE encoded list [freq, val, freq, val, ...]
 *
 * @returns {number[]} Decompressed list
 */
const decompressRLElist = (nums) => {
  // Initialize result array to store decompressed values
  const result = []

  // Iterate through each frequency-value pair (step by 2)
  for (let i = 0; i <= nums.length - 1; i += 2)
    // Repeat value (nums[i + 1]) frequency times (nums[i])
    for (let j = 0; j <= nums[i] - 1; j++)
      // Push current value to result array
      result.push(nums[i + 1])

  // Return fully decompressed list
  return result
}
