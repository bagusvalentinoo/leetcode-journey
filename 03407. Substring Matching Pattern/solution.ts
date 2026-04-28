/**
 * Problem: 3407. Substring Matching Pattern
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if string matches pattern with a single wildcard '*'
 *
 * @param s - Input string to search in
 * @param p - Pattern containing exactly one '*'
 *
 * @returns True if pattern matches
 */
const hasMatch = (s: string, p: string): boolean => {
  // Find the position of the wildcard '*' in the pattern
  const wildcardIndex: number = p.indexOf('*')

  // Extract the prefix part before and after the wildcard
  const prefixPattern: string = p.substring(0, wildcardIndex),
    suffixPattern: string = p.substring(wildcardIndex + 1)

  // Find the first occurrence of prefix in the string
  const prefixMatchIndex: number = s.indexOf(prefixPattern)

  // If prefix not found, pattern cannot match
  if (prefixMatchIndex === -1) return false

  // Get the remaining string after the matched prefix
  const remainingString: string = s.substring(
    prefixMatchIndex + prefixPattern.length
  )

  // Check if suffix exists in the remaining string
  const suffixMatchIndex: number = remainingString.indexOf(suffixPattern)

  // Return true if suffix is found, false otherwise
  return suffixMatchIndex !== -1
}
