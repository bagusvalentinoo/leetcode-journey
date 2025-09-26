/**
 * Problem: 611. Valid Triangle Number
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 17 ms (Beats 100%)
 */

/**
 * Counts the number of triplets that can form a triangle
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {number} - Number of valid triplets
 */
const triangleNumber = (nums) => {
  // Sort the array in ascending order to simplify the triangle inequality check
  nums.sort((a, b) => a - b)

  // Initialize a counter to keep track of the number of valid triplets
  let count = 0

  // Store the length of the input array for reuse
  const n = nums.length

  // Iterate from the end of the array to the third element
  for (let i = n - 1; i > 1; i--) {
    // Initialize two pointers: left at the start, right just before i
    let left = 0,
      right = i - 1

    // Use two pointers to find valid pairs for the current i
    while (left < right) {
      // If the sum of nums[left] and nums[right] is greater than nums[i], it's a valid triplet
      if (nums[left] + nums[right] > nums[i]) {
        // All elements between left and right form valid triplets with nums[i]
        count += right - left
        // Move the right pointer to check for more pairs
        right--
      }
      // Otherwise, move the left pointer to increase the sum
      else left++
    }
  }

  // Return the total count of valid triplets
  return count
}
