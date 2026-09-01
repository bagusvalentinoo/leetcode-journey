/**
 * Problem: 1556. Thousand Separator
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func thousandSeparator(n int) string {
  // Convert integer to string for digit-by-digit processing
  numString := strconv.Itoa(n)

  // Build the formatted result incrementally
  var result strings.Builder

  // Iterate through each digit from left to right
  for i := 0; i < len(numString); i++ {
    // Insert a dot before the digit whenever the remaining digits form complete groups of three
    if i > 0 && (len(numString)-i)%3 == 0 {
      result.WriteByte('.')
    }

    // Append the current digit to the result
    result.WriteByte(numString[i])
  }

  // Return the string with thousand separators inserted
  return result.String()
}
