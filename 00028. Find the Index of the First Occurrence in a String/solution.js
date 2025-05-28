/**
 * Problem: 28. Find the Index of the First Occurrence in a String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the first occurrence of a substring in a string
 *
 * @param {string} haystack - String to search in
 * @param {string} needle - Substring to find
 *
 * @returns {number} - Index of first occurrence or -1 if not found
 */
const strStr = (haystack, needle) => {
  // Loop through haystack until there's not enough characters left to match needle
  for (
    let startIndex = 0;
    startIndex <= haystack.length - needle.length;
    startIndex++
  )
    // Check if substring at current position matches needle
    if (haystack.substring(startIndex, startIndex + needle.length) === needle)
      return startIndex

  // Return -1 if needle is not found in haystack
  return -1
}
