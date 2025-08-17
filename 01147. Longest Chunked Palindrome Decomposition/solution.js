/**
 * Problem: 1147. Longest Chunked Palindrome Decomposition
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the max number of matching chunks from both ends of a string
 *
 * @param {string} text - The string to decompose
 *
 * @returns {number} - Number of matching chunks
 */
const longestDecomposition = (text) => {
  // Initialize the count of matching chunks
  let count = 0

  // Initialize pointers for left and right ends of the string
  let left = 0
  let right = text.length - 1

  // Initialize strings to build chunks from both ends
  let leftChunk = ''
  let rightChunk = ''

  // Loop until the left pointer crosses the right pointer
  while (left < right) {
    // Append current character from the left to leftChunk
    leftChunk += text[left++]

    // Prepend current character from the right to rightChunk
    rightChunk = text[right--] + rightChunk

    // If both chunks are equal, increment count by 2 and reset chunks
    if (leftChunk === rightChunk) {
      count += 2
      leftChunk = ''
      rightChunk = ''
    }
  }

  // If there is a remaining chunk or a middle character, increment count by 1
  if (leftChunk || left === right) count++

  // Return the total count of matching chunks
  return count
}
