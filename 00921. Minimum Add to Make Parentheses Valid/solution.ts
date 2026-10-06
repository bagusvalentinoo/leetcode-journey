/**
 * Problem: 921. Minimum Add to Make Parentheses Valid
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Minimum moves to make parentheses string valid
 *
 * @param s - Input string
 *
 * @returns Minimum moves required
 */
const minAddToMakeValid = (s: string): number => {
  // Counter for unmatched open and close parentheses
  let open: number = 0,
    close: number = 0

  // Iterate through each character in the string
  for (const char of s) {
    // If open parenthesis, increment open counter
    if (char === '(') open++
    // If close parenthesis and open available, match it
    else if (open > 0) open--
    // If no open available, need an open insertion
    else close++
  }

  // Return total insertions for unmatched opens and closes
  return open + close
}
