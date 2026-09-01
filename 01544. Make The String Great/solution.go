/**
 * Problem: 1544. Make The String Great
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func makeGood(s string) string {
  // Repeatedly scan for adjacent letters of opposite case
  for i := 1; i < len(s); i++ {
    // Same letter in opposite case differs by 32 in ASCII code
    // (e.g., 'a' = 97 and 'A' = 65, 'z' = 122 and 'Z' = 90)
    if s[i-1] == s[i]-32 || s[i-1]-32 == s[i] {
      // Bad pair found, remove both letters and restart the scan
      s = s[:i-1] + s[i+1:]
      i = 0
    }
  }

  // Return the remaining characters as the final string
  return s
}
