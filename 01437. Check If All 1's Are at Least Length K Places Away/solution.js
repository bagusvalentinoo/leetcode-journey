/**
 * Problem: 1437. Check If All 1's Are at Least Length K Places Away
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if all 1s in the binary array are at least k apart
 *
 * @param {number[]} nums - Binary array
 * @param {number} k - Minimum gap between 1s
 *
 * @returns {boolean} - True if all 1s are at least k apart
 */
const kLengthApart = (nums, k) => {
  // Initialize a variable to store the index of the last occurrence of 1
  let lastOccured = -1

  // Iterate through the binary array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element is 1
    if (nums[i] === 1) {
      // If a previous 1 has been encountered
      if (lastOccured !== -1) {
        // Calculate the gap between the current and previous 1
        const gap = i - lastOccured - 1

        // If the gap is less than k, return false
        if (gap < k) return false
      }

      // Update the index of the last occurrence of 1
      lastOccured = i
    }
  }

  // If all 1s are at least k apart, return true
  return true
}
