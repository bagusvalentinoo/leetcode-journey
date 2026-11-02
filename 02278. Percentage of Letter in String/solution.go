/**
 * Problem: 2278. Percentage of Letter in String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func percentageLetter(s string, letter byte) int {
  // Count matching occurrences of the target letter
  count := 0

  // Iterate through characters of the string
  for i := 0; i < len(s); i++ {
    // Increment counter if current character equals target letter
    if s[i] == letter {
      count++
    }
  }

  // Calculate percentage rounded down via integer division
  return (count * 100) / len(s)
}
