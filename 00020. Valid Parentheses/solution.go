/**
 * Problem: 20. Valid Parentheses
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isValid(s string) bool {
  // Create an empty stack to track opening brackets
  stack := make([]rune, 0)
  // Map closing brackets to their corresponding opening brackets
  bracketMap := map[rune]rune{')': '(', ']': '[', '}': '{'}

  // Iterate through each character in the string
  for _, char := range s {
    // If character is an opening bracket, push to stack
    if _, isCloser := bracketMap[char]; !isCloser {
      stack = append(stack, char)
    } else if len(stack) == 0 || stack[len(stack)-1] != bracketMap[char] {
      // If stack is empty or top does not match, string is invalid
      return false
    } else {
      // Remove the matched opening bracket from stack
      stack = stack[:len(stack)-1]
    }
  }

  // Valid only if all brackets were properly closed (stack is empty)
  return len(stack) == 0
}
