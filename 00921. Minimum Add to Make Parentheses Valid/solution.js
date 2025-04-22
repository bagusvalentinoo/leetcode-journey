/**
 * Problem: 921. Minimum Add to Make Parentheses Valid
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Minimum moves to make parentheses string valid
 *
 * @param {string} s - Input string
 *
 * @returns {number} - Minimum moves required
 */
const minAddToMakeValid = (s) => {
  // Counter for open and close parentheses
  let open = 0
  let close = 0

  // Iterate through the string
  for (const char of s) {
    // If open parentheses, increment open counter
    if (char === '(') open++
    // If close parentheses and open counter > 0, decrement open counter
    else if (open > 0) open--
    // If no open parentheses, increment close counter
    else close++
  }

  // Return total moves required
  return open + close
}
