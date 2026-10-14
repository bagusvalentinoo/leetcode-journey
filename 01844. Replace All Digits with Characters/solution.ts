/**
 * Problem: 1844. Replace All Digits with Characters
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Replaces digits at odd indices with shifted characters
 *
 * @param s - String with letters at even indices and digits at odd indices
 *
 * @returns String after replacing all digits
 */
const replaceDigits = (s: string): string => {
  // Convert string to mutable character array
  const chars: string[] = [...s]

  // Store string length for loop boundary
  const n: number = chars.length

  // Process every odd index to replace digits
  for (let i: number = 1; i < n; i += 2)
    // Shift previous character forward by digit value
    chars[i] = String.fromCharCode(
      chars[i - 1].charCodeAt(0) + Number(chars[i])
    )

  // Return the joined string after replacing all digits
  return chars.join('')
}
