/**
 * Problem: 2210. Count Hills and Valleys in an Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the number of hills and valleys in an array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Count of hills and valleys
 */
const countHillValley = (nums) => {
  // Initialize the counter for hills and valleys
  let hillValleyCount = 0,
    // Track the index of the last distinct element to the left
    lastDistinctIndex = 0

  // Iterate through the array, skipping the first and last elements
  for (let currentIndex = 1; currentIndex < nums.length - 1; currentIndex++) {
    // Check if the current element is different from the next element
    if (nums[currentIndex] !== nums[currentIndex + 1]) {
      // Determine if the current element is a hill or valley
      if (
        (nums[currentIndex] > nums[lastDistinctIndex] &&
          nums[currentIndex] > nums[currentIndex + 1]) ||
        (nums[currentIndex] < nums[lastDistinctIndex] &&
          nums[currentIndex] < nums[currentIndex + 1])
      )
        // Increment the counter if a hill or valley is found
        hillValleyCount++

      // Update the last distinct index to the current index
      lastDistinctIndex = currentIndex
    }
  }

  // Return the total count of hills and valleys
  return hillValleyCount
}
