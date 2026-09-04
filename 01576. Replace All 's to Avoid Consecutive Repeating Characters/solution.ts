/**
 * Problem: 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Replaces each '?' to avoid consecutive repeating characters
 *
 * @param s - Input string containing '?' characters
 *
 * @returns Modified string with no consecutive repeating characters
 */
const modifyString = (s: string): string => {
  // Convert string to mutable array for in-place replacement
  const chars: string[] = s.split('')

  // Iterate through each position
  for (let i = 0; i < chars.length; i++) {
    // Process only '?' placeholders
    if (chars[i] !== '?') continue

    // Try candidate letters a, b, c to find valid replacement
    for (let code = 97; code <= 99; code++) {
      // Candidate character from a to c
      const candidate: string = String.fromCharCode(code)

      // Check left neighbor is different (already replaced if it was '?')
      const leftOk: boolean = i === 0 || chars[i - 1] !== candidate

      // Check right neighbor is different (skip if right is '?' placeholder)
      const rightOk: boolean =
        i === chars.length - 1 || chars[i + 1] !== candidate

      // Pick first candidate satisfying both neighbors
      if (leftOk && rightOk) {
        // Assign valid replacement
        chars[i] = candidate
        break
      }
    }
  }

  // Join array back to string
  return chars.join('')
}
