/**
 * Problem: 1844. Replace All Digits with Characters
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func replaceDigits(s string) string {
  // Convert string to mutable byte array
  chars := []byte(s)

  // Store string length for loop boundary
  n := len(chars)

  // Process every odd index to replace digits
  for i := 1; i < n; i += 2 {
    // Shift previous character forward by digit value
    chars[i] = chars[i-1] + chars[i] - '0'
  }

  // Return the string after replacing all digits
  return string(chars)
}
