/**
 * Problem: 32. Longest Valid Parentheses
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestValidParentheses(s string) int {
  // Cache string length for loop boundary
  n := len(s)
  // Tracks the maximum length of valid parentheses found
  res := 0
  // Stack to track positions, initialized with -1 to handle edge cases
  stack := make([]int, 0, n+1)
  stack = append(stack, -1)

  for i := 0; i < n; i++ {
    // Push opening parenthesis position to stack
    if s[i] == '(' {
      stack = append(stack, i)
    } else {
      // Pop for closing parenthesis
      stack = stack[:len(stack)-1]

      // If stack is empty, push current position as new reference point
      if len(stack) == 0 {
        stack = append(stack, i)
      } else {
        // Calculate length between current position and last position in stack
        length := i - stack[len(stack)-1]
        res = max(res, length)
      }
    }
  }

  return res
}
