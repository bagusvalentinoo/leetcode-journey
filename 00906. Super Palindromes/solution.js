/**
 * Problem: 906. Super Palindromes
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Find superpalindromes in range
 *
 * @param {number} left - Left bound
 * @param {number} right - Right bound
 *
 * @returns {number} - Number of superpalindromes in range
 */
const superpalindromesInRange = (left, right) => {
  // Initialize answer
  let ans = 9 >= left && 9 <= right ? 1 : 0

  /**
   * Check if a string is a palindrome
   *
   * @param {string} str - String to check
   *
   * @returns {boolean} - True if string is a palindrome, false otherwise
   */
  const isPal = (str) => {
    // Check if a string is a palindrome
    for (let i = 0, j = str.length - 1; i < j; i++, j--)
      if (str.charAt(i) !== str.charAt(j)) return false

    // Return true if string is a palindrome
    return true
  }

  // Iterate over possible digit lengths
  for (let dig = 1; dig < 10; dig++) {
    const isOdd = dig % 2 && dig !== 1 // Check if digit length is odd
    const innerLen = (dig >> 1) - 1 // Inner length of palindrome
    const midPos = dig >> 1 // Middle position of palindrome

    // Initialize limits for inner and middle
    let innerLim = Math.max(1, 2 ** innerLen),
      midLim = isOdd ? 3 : 1

    // Iterate over possible edges
    for (let edge = 1; edge < 3; edge++) {
      const pal = new Uint8Array(dig) // Initialize palindrome array

      ;(pal[0] = edge), (pal[dig - 1] = edge) // Set edge values

      // Adjust limits for inner and middle
      if (edge === 2) (innerLim = 1), (midLim = Math.min(midLim, 2))

      // Iterate over possible inner values
      for (let inner = 0; inner < innerLim; inner++) {
        // Set inner values
        if (inner > 0) {
          const innerStr = inner.toString(2).padStart(innerLen, '0')

          // Set inner values in palindrome array
          for (let i = 0; i < innerLen; i++)
            (pal[1 + i] = innerStr[i]), (pal[dig - 2 - i] = innerStr[i])
        }

        // Iterate over possible middle values
        for (let mid = 0; mid < midLim; mid++) {
          // Set middle value
          if (isOdd) pal[midPos] = mid

          // Calculate palindrome and square
          const palin = ~~pal.join(''),
            square = BigInt(palin) * BigInt(palin)

          // Check if square is within range and is a palindrome
          if (square > right) return ans
          if (square >= left && isPal(square.toString())) ans++
        }
      }
    }
  }

  return ans
}
