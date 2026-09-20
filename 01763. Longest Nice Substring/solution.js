/**
 * Problem: 1763. Longest Nice Substring
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds longest nice substring using divide and conquer
 *
 * @param {string} s - Input string of uppercase and lowercase letters
 *
 * @returns {string} Longest nice substring, earliest on ties
 */
const longestNiceSubstring = (s) => {
  // Nice substring needs at least 2 chars for both cases
  if (s.length < 2) return ''

  // Collect all characters of current substring into a set
  const chars = new Set(s)

  // Scan for first character missing its opposite case counterpart
  for (let i = 0; i < s.length; i++) {
    // Store current character for opposite case check
    const ch = s[i]

    // Resolve opposite case character to check for nice property
    const opposite =
      ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()

    // Split on bad character since no nice substring can cross it
    if (!chars.has(opposite)) {
      // Solve left and right halves around the bad character
      const left = longestNiceSubstring(s.slice(0, i)),
        right = longestNiceSubstring(s.slice(i + 1))

      // Return longer half, left wins ties for earliest occurrence
      return left.length >= right.length ? left : right
    }
  }

  // Whole substring is nice when every character has its counterpart
  return s
}
