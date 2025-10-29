/**
 * Problem: 1287. Element Appearing More Than 25% In Sorted Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the integer appearing more than 25% in a sorted array
 *
 * @param {number[]} arr - Sorted input array
 *
 * @returns {number} - The special integer
 */
const findSpecialInteger = (arr) => {
  // Calculate the size of the input array
  const size = arr.length

  // Determine the threshold for 25% of the array length
  const qtr = Math.floor(size / 4)

  // Initialize a counter to track occurrences of the current number
  let cnt = 1

  // Initialize the previous number to the first element of the array
  let p = arr[0]

  // Iterate through the array starting from the second element
  for (let i = 1; i < size; i++) {
    // If the current number matches the previous, increment the counter
    if (p === arr[i]) cnt++
    // Otherwise, reset the counter to 1 for the new number
    else cnt = 1

    // If the counter exceeds the threshold, return the current number
    if (cnt > qtr) return arr[i]

    // Update the previous number to the current number
    p = arr[i]
  }

  // Return the last number checked (should not reach here for valid input)
  return p
}
