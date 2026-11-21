/**
 * Problem: 2108. Find First Palindromic String in the Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the first palindromic string in the array
 *
 * @param {string[]} words - Strings to search
 *
 * @returns {string} First palindromic string or an empty string
 */
const firstPalindrome = (words) => {
  // Check each word in its original order
  for (const word of words) {
    // Compare characters from both ends toward the center
    let left = 0,
      right = word.length - 1

    while (left < right && word[left] === word[right]) {
      left++
      right--
    }

    // Return the first word whose characters all match
    if (left >= right) return word
  }

  // Return an empty string when no palindrome exists
  return ""
}
