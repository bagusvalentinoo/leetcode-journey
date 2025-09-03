/**
 * Problem: 1207. Unique Number of Occurrences
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if all element frequencies are unique
 *
 * @param {number[]} arr - Input array
 *
 * @returns {boolean} - True if all frequencies are unique
 */
const uniqueOccurrences = (arr) => {
  // Sort the input array in ascending order to group identical elements together
  arr.sort((a, b) => a - b)

  // Initialize an array to store the frequency of each unique element
  const frequencies = []

  // Iterate through the sorted array to count occurrences of each unique element
  for (let i = 0; i < arr.length; i++) {
    // Initialize count for the current element
    let count = 1

    // Count consecutive duplicates of the current element
    while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
      count++
      i++
    }

    // Store the frequency count for the current unique element
    frequencies.push(count)
  }

  // Sort the frequencies array to easily check for duplicate frequencies
  frequencies.sort((a, b) => a - b)

  // Check if any two consecutive frequencies are equal (not unique)
  for (let i = 1; i < frequencies.length; i++) {
    if (frequencies[i] === frequencies[i - 1]) return false
  }

  // All frequencies are unique, return true
  return true
}
