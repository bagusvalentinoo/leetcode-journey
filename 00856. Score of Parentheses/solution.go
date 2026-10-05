/**
 * Problem: 856. Score of Parentheses
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func scoreOfParentheses(s string) int {
  // Total score accumulated from each primitive pair and current nesting depth
  answer, depth := 0, 0

  // Iterate through each character in the string
  for i := 0; i < len(s); i++ {
    // If opening bracket, go one level deeper
    if s[i] == '(' {
      depth++
    } else {
      // Decrease depth as current pair is closed
      depth--

      // If previous char was opening, found primitive () contributing 2^depth
      if s[i-1] == '(' {
        answer += 1 << depth
      }
    }
  }

  // Return the total computed score
  return answer
}
