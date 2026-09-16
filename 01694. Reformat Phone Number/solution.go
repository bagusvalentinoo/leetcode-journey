/**
 * Problem: 1694. Reformat Phone Number
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reformatNumber(number string) string {
  // Collect only digit characters, skipping spaces and dashes
  digits := make([]byte, 0, len(number))

  // Scan each character of the input
  for i := 0; i < len(number); i++ {
    if number[i] >= '0' && number[i] <= '9' {
      digits = append(digits, number[i])
    }
  }

  // Total count of digits to group
  totalDigits := len(digits)

  // Store formatted blocks before joining
  blocks := make([]string, 0)

  // Current read position inside digits
  index := 0

  // Take blocks of 3 while more than 4 digits remain
  for totalDigits-index > 4 {
    // Take the next block of 3 digits
    blocks = append(blocks, string(digits[index:index+3]))

    // Advance past the consumed block
    index += 3
  }

  // Count digits left for the final grouping
  remaining := totalDigits - index

  // Four remaining digits split into two blocks of 2
  if remaining == 4 {
    // Take the first pair of the final four
    blocks = append(blocks, string(digits[index:index+2]))

    // Take the second pair of the final four
    blocks = append(blocks, string(digits[index+2:index+4]))
  } else {
    // Two or three remaining digits form one final block
    blocks = append(blocks, string(digits[index:]))
  }

  // Join blocks with dashes
  answer := blocks[0]

  // Append separator plus each subsequent block
  for i := 1; i < len(blocks); i++ {
    answer += "-" + blocks[i]
  }

  // Return the dash-separated phone number
  return answer
}
