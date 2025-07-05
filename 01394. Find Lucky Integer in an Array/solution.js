/**
 * Problem: 1394. Find Lucky Integer in an Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the largest lucky number in an array
 *
 * @param {number[]} numbers - Array of integers
 *
 * @returns {number} - Largest lucky number or -1 if none exists
 */
const findLucky = (numbers) => {
  // Create a map to store frequency count of each number
  const frequencyMap = new Map()

  // Count frequency of each number in the array
  for (const num of numbers)
    frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1)

  // Initialize result to -1 (no lucky number found)
  let largestLucky = -1

  // Find the largest lucky number (number equals its frequency)
  for (const [num, count] of frequencyMap)
    if (num === count && num > largestLucky) largestLucky = num

  return largestLucky
}
