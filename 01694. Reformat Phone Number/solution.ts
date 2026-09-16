/**
 * Problem: 1694. Reformat Phone Number
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reformat phone number into blocks of 3, splitting final 4 into 2 plus 2
 *
 * @param number - Phone number with digits, spaces and dashes
 *
 * @returns Dash-separated blocks with no block of length 1
 */
const reformatNumber = (number: string): string => {
  // Collect only digit characters, skipping spaces and dashes
  let digits: string = ''

  // Scan each character of the input
  for (const ch of number) if (ch >= '0' && ch <= '9') digits += ch

  // Total count of digits to group
  const totalDigits: number = digits.length

  // Store formatted blocks before joining
  const blocks: string[] = []

  // Current read position inside digits
  let index: number = 0

  // Take blocks of 3 while more than 4 digits remain
  while (totalDigits - index > 4) {
    // Take the next block of 3 digits
    blocks.push(digits.slice(index, index + 3))

    // Advance past the consumed block
    index += 3
  }

  // Count digits left for the final grouping
  const remaining: number = totalDigits - index

  // Four remaining digits split into two blocks of 2
  if (remaining === 4) {
    // Take the first pair of the final four
    blocks.push(digits.slice(index, index + 2))

    // Take the second pair of the final four
    blocks.push(digits.slice(index + 2, index + 4))
  }
  // Two or three remaining digits form one final block
  else blocks.push(digits.slice(index))

  // Join blocks with dashes
  return blocks.join('-')
}
