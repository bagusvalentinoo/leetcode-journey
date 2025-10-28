/**
 * Problem: 3354. Make Array Elements Equal to Zero
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 39 ms (Beats 100%)
 */

/**
 * Counts valid selections in the array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Count of valid selections
 */
const countValidSelections = (nums) => {
  // Get the length of the input array
  const n = nums.length

  // Initialize the answer counter to store valid selections
  let ans = 0

  // Calculate the total sum of the array elements
  const sum = nums.reduce((a, b) => a + b, 0)

  // Initialize left and right sums for tracking
  let left = 0,
    right = sum

  // Iterate through each element in the array
  for (let i = 0; i < n; i++) {
    // Check if the current element is zero
    if (nums[i] === 0) {
      // Check if the difference between left and right is valid
      if (left - right >= 0 && left - right <= 1) ans++
      // Check the reverse difference for validity
      if (right - left >= 0 && right - left <= 1) ans++
    } else {
      // Update the left sum by adding the current element
      left += nums[i]
      // Update the right sum by subtracting the current element
      right -= nums[i]
    }
  }

  // Return the total count of valid selections
  return ans
}
