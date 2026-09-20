/**
 * Problem: 1763. Longest Nice Substring
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds longest nice substring using divide and conquer
 *
 * @param s - Input string of uppercase and lowercase letters
 *
 * @returns Longest nice substring, earliest on ties
 */
const longestNiceSubstring = (s: string): string => {
  // Nice substring needs at least 2 chars for both cases
  if (s.length < 2) return ''

  // Collect all characters of current substring into a set
  const chars: Set<string> = new Set(s)

  // Find first character missing its opposite case counterpart
  for (let i = 0; i < s.length; i++) {
    // Check both lowercase and uppercase forms exist in set
    if (!chars.has(s[i].toLowerCase()) || !chars.has(s[i].toUpperCase())) {
      // Split on bad character since no nice substring can cross it
      const left: string = longestNiceSubstring(s.slice(0, i))
      // Solve right half after the bad character
      const right: string = longestNiceSubstring(s.slice(i + 1))

      // Return longer half, left wins ties for earliest occurrence
      return left.length >= right.length ? left : right
    }
  }

  // Whole substring is nice when every character has its counterpart
  return s
}
