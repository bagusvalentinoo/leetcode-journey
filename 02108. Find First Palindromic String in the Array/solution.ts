/**
 * Problem: 2108. Find First Palindromic String in the Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the first palindromic string in the array
 *
 * @param words - Strings to search
 *
 * @returns First palindromic string or an empty string
 */
const firstPalindrome = (words: string[]): string => {
  // Check each word in its original order
  for (const word of words) {
    // Compare characters from both ends toward the center
    let left: number = 0,
      right: number = word.length - 1

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
