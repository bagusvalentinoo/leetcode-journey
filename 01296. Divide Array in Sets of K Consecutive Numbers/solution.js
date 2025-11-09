/**
 * Problem: 1296. Divide Array in Sets of K Consecutive Numbers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 66 ms (Beats 100%)
 */

/**
 * Checks if the array can be divided into groups of size k
 *
 * @param {number[]} nums - Input array
 * @param {number} k - Group size
 *
 * @returns {boolean} - True if divisible, else false
 */
const isPossibleDivide = (nums, k) => {
  // Check if the input array is empty or not an array, return false if true
  if (nums.length === 0 || !Array.isArray(nums)) return false

  // Check if the array length is divisible by k, return false if not
  if (nums.length % k !== 0) return false

  // Create a map to count the frequency of each number in the array
  const numCount = new Map()

  // Populate the map with the frequency of each number in the array
  for (const num of nums) numCount.set(num, (numCount.get(num) || 0) + 1)

  // Iterate through each number in the array
  for (const num of nums) {
    // Skip the current number if its frequency is already zero
    if (numCount.get(nums) === 0) continue

    // Initialize the starting number for the group
    let start = num

    // Adjust the starting number to the smallest number in the group
    while (numCount.get(start - 1) > 0) start--

    // Process numbers starting from the adjusted starting number
    while (start <= num) {
      // Check if the current starting number has a frequency greater than zero
      if (numCount.get(start) > 0) {
        // Store the frequency of the current starting number
        const startFreq = numCount.get(start)

        // Iterate through the group of size k
        for (let i = 0; i < k; i++) {
          // Calculate the current number in the group
          const currentNum = start + i

          // Check if the frequency of the current number is less than startFreq
          if ((numCount.get(currentNum) || 0) < startFreq) return false

          // Decrease the frequency of the current number by startFreq
          numCount.set(currentNum, numCount.get(currentNum) - startFreq)
        }
      }

      // Move to the next starting number
      start++
    }
  }

  // Return true if all groups of size k are successfully formed
  return true
}
