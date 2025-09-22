/**
 * Problem: 3005. Count Elements With Maximum Frequency
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the sum of elements with the highest frequency
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Sum of most frequent elements
 */
const maxFrequencyElements = (nums) => {
  // Create a frequency array to count occurrences of each number (assuming numbers are in range 0-100)
  const frequency = new Uint8Array(101)

  // Initialize variables to track the highest frequency and the result sum
  let maxFrequency = 0,
    resultSum = 0

  // Iterate through each number in the input array
  for (const num of nums) {
    // Increment the frequency count for the current number
    const currentFrequency = ++frequency[num]

    // If the current frequency exceeds the previous max, update maxFrequency and reset resultSum
    if (currentFrequency > maxFrequency)
      (maxFrequency = currentFrequency), (resultSum = currentFrequency)
    // If the current frequency equals the max, add it to resultSum
    else if (currentFrequency === maxFrequency) resultSum += currentFrequency
  }

  // Return the sum of elements with the highest frequency
  return resultSum
}
