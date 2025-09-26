/**
 * Problem: 1239. Maximum Length of a Concatenated String with Unique Characters
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Finds the maximum length of a concatenated string with unique characters
 *
 * @param {string[]} arr - Array of strings
 *
 * @returns {number} - Maximum length
 */
const maxLength = (arr) => {
  // Array to store bitmask representations of valid words (words with unique characters)
  const wordBitmasks = []

  // Iterate over each word in the input array
  for (const word of arr) {
    let bitmask = 0 // Bitmask to represent unique characters in the word
    let isUnique = true // Flag to check if the word has all unique characters

    // Iterate over each character in the word
    for (const char of word) {
      // Calculate the bit position for the character ('a' -> 0, 'b' -> 1, ..., 'z' -> 25)
      const charBit = 1 << (char.charCodeAt(0) - 97)

      // If the character is already set in the bitmask, the word has duplicate characters
      if (bitmask & charBit) {
        isUnique = false
        break // Exit the loop as the word is not valid
      }

      // Set the bit for the current character
      bitmask |= charBit
    }

    // If the word has all unique characters, add its bitmask to the array
    if (isUnique) wordBitmasks.push(bitmask)
  }

  // Variable to keep track of the maximum length found
  let maximumLength = 0

  // Backtracking function to explore all combinations of word bitmasks
  const backtrack = (startIndex, currentBitmask) => {
    // Update the maximum length using the count of set bits in currentBitmask
    maximumLength = Math.max(maximumLength, countSetBits(currentBitmask))

    // Try adding each remaining word bitmask if it doesn't overlap with currentBitmask
    for (let i = startIndex; i < wordBitmasks.length; i++)
      if ((currentBitmask & wordBitmasks[i]) === 0)
        backtrack(i + 1, currentBitmask | wordBitmasks[i])
  }

  // Counts the number of set bits (1s) in a number (bitmask)
  const countSetBits = (num) => {
    let count = 0

    // Count bits using bitwise operations
    while (num) {
      count += num & 1
      num >>= 1
    }

    return count
  }

  // Start backtracking from index 0 with an empty bitmask
  backtrack(0, 0)

  // Return the maximum length found
  return maximumLength
}
