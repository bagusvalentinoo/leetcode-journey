/**
 * Problem: 1736. Latest Time by Replacing Hidden Digits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximumTime(time string) string {
  // Convert time string into mutable byte slice
  chars := []byte(time)

  // Fill first hour digit with largest valid value
  if chars[0] == '?' {
    chars[0] = '1'
    if chars[1] == '?' || chars[1] <= '3' {
      chars[0] = '2'
    }
  }

  // Fill second hour digit with largest value allowed by first digit
  if chars[1] == '?' {
    chars[1] = '9'
    if chars[0] == '2' {
      chars[1] = '3'
    }
  }

  // Fill tens of minutes with largest valid value
  if chars[3] == '?' {
    chars[3] = '5'
  }

  // Fill ones of minutes with largest valid value
  if chars[4] == '?' {
    chars[4] = '9'
  }

  // Return the latest valid time string
  return string(chars)
}
