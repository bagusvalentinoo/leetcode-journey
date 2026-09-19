/**
 * Problem: 1736. Latest Time by Replacing Hidden Digits
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Replaces hidden digits to get the latest valid time
 *
 * @param time - Time string in "hh:mm" format with '?' placeholders
 *
 * @returns Latest valid time after replacing hidden digits
 */
const maximumTime = (time: string): string => {
  // Split time into mutable character array
  const chars: string[] = time.split('')

  // Fill first hour digit with largest valid value
  if (chars[0] === '?')
    chars[0] = chars[1] === '?' || chars[1] <= '3' ? '2' : '1'
  // Fill second hour digit with largest value allowed by first digit
  if (chars[1] === '?') chars[1] = chars[0] === '2' ? '3' : '9'
  // Fill tens of minutes with largest valid value
  if (chars[3] === '?') chars[3] = '5'
  // Fill ones of minutes with largest valid value
  if (chars[4] === '?') chars[4] = '9'

  // Join characters back into time string
  return chars.join('')
}
