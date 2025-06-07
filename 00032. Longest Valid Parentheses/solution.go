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
  // Stack to track positions, initialized with -1 to handle edge cases
  positionStack := []int{-1}
  // Tracks the maximum length of valid parentheses found
  maxLength := 0

  for index := 0; index < len(s); index++ {
    // Push opening parenthesis position to stack
    if s[index] == '(' {
      positionStack = append(positionStack, index)
    } else {
      // Pop for closing parenthesis
      positionStack = positionStack[:len(positionStack)-1]

      // If stack is empty, push current position as new reference point
      if len(positionStack) == 0 {
        positionStack = append(positionStack, index)
      } else {
        // Calculate length between current position and last position in stack
        maxLength = max(maxLength, index-positionStack[len(positionStack)-1])
      }
    }
  }

  return maxLength
}