/**
 * Problem: 1160. Find Words That Can Be Formed by Characters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Returns true if word can be formed from given letter counts
 *
 * @param {string} word - Word to check
 * @param {number[]} counts - Available counts for 'a'-'z'
 *
 * @returns {boolean} - True if the word can be formed, false otherwise
 */
const canForm = (word, counts) => {
  // Initialize an array to store the frequency of each character in the word
  const wordCounts = new Array(26).fill(0)

  // Iterate over each character in the word
  for (const char of word) {
    // Calculate the index for the character ('a' = 0, 'b' = 1, ..., 'z' = 25)
    const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0)
    // Increment the count for this character in wordCounts
    wordCounts[charIndex]++

    // If the count exceeds the available count in counts, the word cannot be formed
    if (wordCounts[charIndex] > counts[charIndex]) return false
  }

  // If all character counts are within the available limits, the word can be formed
  return true
}

/**
 * Returns total length of words that can be formed from given characters
 *
 * @param {string[]} words - Words to check
 * @param {string} chars - Available characters
 *
 * @returns {number} - Sum of lengths of formable words
 */
const countCharacters = (words, chars) => {
  // Initialize an array to store the frequency of each character in chars ('a'-'z')
  const charCounts = new Array(26).fill(0)

  // Count the frequency of each character in chars
  for (const char of chars) {
    // Calculate the index for the character ('a' = 0, ..., 'z' = 25)
    const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0)
    // Increment the count for this character in charCounts
    charCounts[charIndex]++
  }

  // Initialize a variable to keep track of the total length of formable words
  let totalLength = 0

  // Iterate over each word in words array
  for (const word of words) {
    // If the word can be formed using the available characters, add its length to totalLength
    if (canForm(word, charCounts)) totalLength += word.length
  }

  // Return the total length of all formable words
  return totalLength
}
