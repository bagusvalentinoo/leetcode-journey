/**
 * Problem: 15. 3Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 20 ms (Beats 99.93%)
 */

/**
 * Finds all unique triplets in the array that sum to zero.
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number[][]} - Triplets summing to zero
 */
const threeSum = (nums) => {
  // Initialize result array to store triplets
  const res = []

  // Sort the array to simplify finding triplets
  nums.sort((a, b) => a - b)

  // Iterate through the array to find triplets
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1 // Left pointer
    let r = nums.length - 1 // Right pointer

    // Break if the current number is greater than zero
    if (nums[i] > 0) break
    // Skip duplicate numbers to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // Use two pointers to find valid triplets
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]

      // Adjust pointers based on the sum
      if (sum > 0) r--
      else if (sum < 0) l++
      else {
        // Add the triplet to the result
        res.push([nums[i], nums[l], nums[r]])

        // Skip duplicate numbers for left and right pointers
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--

        // Move both pointers inward
        r--
        l++
      }
    }
  }

  // Return the result array containing all triplets
  return res
}
