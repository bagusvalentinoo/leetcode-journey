/**
 * Problem: 5. Longest Palindromic Substring
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Finds the longest palindromic substring in a given string
 *
 * @param {string} s - The input string
 *
 * @returns {string} - The longest palindromic substring
 */
const longestPalindrome = (s) => {
  // If the string is empty or has one character, return it
  if (s.length === 1 || s.length === 0) return s

  // Initialize start and end of longest palindromic substring
  let start = 0,
    end = 0

  // Helper function to check palindromes
  const checkPalindrome = (arr, index) => {
    // If we have checked all characters, return
    if (index === arr.length) return

    // Initialize variables for left and right pointers
    const n = arr.length
    let left = index,
      right = index

    // Expand the palindromic substring
    while (right < n - 1 && arr[right] === arr[right + 1]) right++

    index = right // Move to the next character

    // Expand the palindromic substring
    while (left > 0 && right < n - 1 && arr[right + 1] === arr[left - 1]) {
      right++
      left--
    }

    // If the current palindromic substring is longer, update start and end
    if (right - left > end - start) {
      start = left
      end = right
    }

    checkPalindrome(arr, index + 1) // Move to the next character

    // Return the original array
    return arr
  }

  // Check palindromes
  checkPalindrome(s.split(''), 0)

  // Return the longest palindromic substring
  return s.substring(start, end + 1)
}
