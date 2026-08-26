/**
 * Problem: 2904. Shortest and Lexicographically Smallest Beautiful String
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the shortest and lexicographically smallest beautiful substring
 *
 * @param {string} s - Binary string containing only '0' and '1'
 * @param {number} k - Required number of '1's in the beautiful substring
 *
 * @returns {string} The shortest lexicographically smallest beautiful substring
 */
const shortestBeautifulSubstring = (s, k) => {
  // Track the minimum length of a beautiful substring found so far
  let minimumLengthFound = Infinity
  // Store the best beautiful substring encountered
  let finalResultString = ''
  // Left boundary of the sliding window
  let leftPointer = 0
  // Count of '1's in the current window
  let currentOneCounter = 0

  // Expand the window by moving the right pointer
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    // Increment counter when a '1' enters the window
    if (s[rightPointer] === '1') currentOneCounter++

    // Shrink the window while we have exactly k ones
    while (currentOneCounter === k) {
      // Calculate current window length
      const currentWindowLen = rightPointer - leftPointer + 1
      // Extract the current substring
      const currentSubstringValue = s.substring(leftPointer, rightPointer + 1)

      // Update if this window is shorter than the best found
      if (currentWindowLen < minimumLengthFound) {
        minimumLengthFound = currentWindowLen
        finalResultString = currentSubstringValue
      } else if (currentWindowLen === minimumLengthFound) {
        // Same length but lexicographically smaller
        if (currentSubstringValue < finalResultString)
          finalResultString = currentSubstringValue
      }

      // Shrink from the left to find shorter windows
      if (s[leftPointer] === '1') currentOneCounter--

      // Move the left pointer to the right to continue searching
      leftPointer++
    }
  }

  // Return the best beautiful substring found
  return finalResultString
}
