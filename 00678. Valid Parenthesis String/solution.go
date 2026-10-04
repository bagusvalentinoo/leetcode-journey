/**
 * Problem: 678. Valid Parenthesis String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkValidString(s string) bool {
  // Minimum and Maximum possible open parentheses balance
  low, high := 0, 0

  // Process each character
  for _, c := range s {
    // Open parenthesis increases both bounds
    if c == '(' {
      low, high = low+1, high+1
    } else if c == ')' {
      // Close parenthesis decreases both bounds
      low, high = low-1, high-1
    } else {
      // Star can be '(', ')' or empty: decrease low, increase high
      low, high = low-1, high+1
    }

    // Too many closing parentheses in every interpretation
    if high < 0 {
      return false
    }
    // Clamp low to zero since negative balance means treating stars as empty
    if low < 0 {
      low = 0
    }
  }

  // Valid only if zero balance is reachable
  return low == 0
}
