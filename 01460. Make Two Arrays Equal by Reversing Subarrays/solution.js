/**
 * Problem: 1460. Make Two Arrays Equal by Reversing Subarrays
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if two arrays can be made equal by reversing subarrays
 *
 * @param {number[]} target - Target array
 * @param {number[]} arr - Array to compare
 *
 * @returns {boolean} True if arrays can be equal
 */
const canBeEqual = (target, arr) => {
  // Frequency array for numbers 0-1000
  const targetFrequency = new Array(1001).fill(0)

  // Count occurrences of each number in target array
  for (const num of target) targetFrequency[num]++

  // Verify each number in arr has matching frequency in target
  for (const num of arr) {
    // If number not found in target or frequency exhausted, arrays differ
    if (targetFrequency[num] === 0) return false

    // Decrement frequency for this number
    targetFrequency[num]--
  }

  // All elements matched successfully
  return true
}
