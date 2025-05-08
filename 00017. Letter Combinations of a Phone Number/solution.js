/**
 * Problem: 17. Letter Combinations of a Phone Number
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns all possible letter combinations for a string of digits (2-9)
 *
 * @param {string} digits - Input digits from 2-9
 *
 * @returns {string[]} - All possible letter combinations
 */
const letterCombinations = (digits) => {
  // Return empty array if no digits provided
  if (!digits.length) return []

  // Map each digit to its corresponding letters on a phone keypad
  const digitToChar = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  // Store all possible combinations
  const result = []

  // Recursive function to build combinations
  const backtrack = (index, path) => {
    // Base case: when we've processed all digits
    if (index === digits.length) {
      result.push(path)
      return
    }

    // Try each letter for the current digit
    for (const char of digitToChar[digits[index]])
      backtrack(index + 1, path + char)
  }

  // Start backtracking from first digit with empty path
  backtrack(0, '')

  return result
}
