/**
 * Problem: 1044. Longest Duplicate Substring
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 267 ms (Beats 100%)
 */

/**
 * Returns the longest duplicated substring in a string
 *
 * @param {string} s - Input string
 *
 * @returns {string} - Longest duplicated substring, or empty string if none
 */
const longestDupSubstring = (s) => {
  // Get the length of the input string
  const n = s.length

  // Function to build the suffix array for the string
  const buildSuffixArray = (s) => {
    const n = s.length

    // Create an array of [suffix, index] pairs for all suffixes
    let suffixes = new Array(n).fill(0).map((_, i) => [s.substring(i), i])

    // Sort the suffixes lexicographically
    suffixes.sort((a, b) => (a[0] < b[0] ? -1 : 1))

    // Extract only the indices from the sorted suffixes
    suffixes = suffixes.map((t) => t[1])

    // Return the suffix array (array of starting indices)
    return suffixes
  }

  // Function to build the Longest Common Prefix (LCP) array
  const buildLCP = (s, sa) => {
    const n = s.length

    // Initialize rank and lcp arrays
    const rank = new Array(n).fill(0)
    const lcp = new Array(n).fill(0)

    // Build the rank array: rank[i] is the rank of suffix starting at i
    for (let i = 0; i < n; i++) rank[sa[i]] = i

    let k = 0 // Length of current LCP

    // Compute the LCP values
    for (let i = 0; i < n; i++) {
      if (rank[i] === n - 1) {
        k = 0 // Last suffix has no next suffix to compare
        continue
      }

      const j = sa[rank[i] + 1] // Index of next suffix in sorted order

      // Compare characters to find LCP length
      while (i + k < n && j + k < n && s[i + k] === s[j + k]) k++

      lcp[rank[i]] = k // Store LCP length

      if (k > 0) k-- // Prepare for next iteration
    }

    // Return the LCP array
    return lcp
  }

  // Build the suffix array for the input string
  const sa = buildSuffixArray(s)
  // Build the LCP array using the suffix array
  const lcp = buildLCP(s, sa)

  // Initialize variables to track the maximum LCP length and its starting index
  let maxLen = 0,
    startIdx = 0

  // Iterate through the LCP array to find the maximum value and its index
  for (let i = 0; i < n; i++) {
    if (lcp[i] > maxLen) {
      maxLen = lcp[i]
      startIdx = sa[i]
    }
  }

  // Return the longest duplicated substring, or empty string if none found
  return s.substring(startIdx, startIdx + maxLen)
}
