/**
 * Problem: 1307. Verbal Arithmetic Puzzle
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Solves cryptarithmetic puzzle where words sum to result
 *
 * @param {string[]} words - Array of words to sum
 * @param {string} result - Result word
 *
 * @returns {boolean} True if puzzle is solvable
 */
const isSolvable = (words, result) => {
  // Combine all words and result into a single array
  const allWords = [...words, result]

  // Get unique letters from all words and result
  const letters = [...new Set(allWords.join(''))]

  // If more than 10 unique letters, impossible (only digits 0-9)
  if (letters.length > 10) return false

  // Set to store letters that cannot be zero (first letters of each word)
  const nonZero = new Set()

  // Mark first letters of each word as non-zero
  for (const word of allWords) {
    if (word.length > 1) nonZero.add(word[0])
  }

  // Map to store coefficient for each letter (based on position value)
  const coefficient = new Map()

  // Initialize coefficient for each letter to 0
  for (const char of letters) coefficient.set(char, 0)

  // Calculate coefficients from words (positive contribution)
  for (const word of words) {
    // Start with multiplier 1 for units place
    let multiplier = 1

    // Process from rightmost digit to leftmost
    for (let i = word.length - 1; i >= 0; i--) {
      // Add current multiplier to letter's coefficient
      coefficient.set(word[i], coefficient.get(word[i]) + multiplier)

      // Move to next place value (tens, hundreds, etc.)
      multiplier *= 10
    }
  }

  // Subtract coefficients from result (negative contribution)
  {
    let multiplier = 1

    // Process from rightmost digit to leftmost
    for (let i = result.length - 1; i >= 0; i--) {
      // Subtract current multiplier from letter's coefficient
      coefficient.set(result[i], coefficient.get(result[i]) - multiplier)

      // Move to next place value
      multiplier *= 10
    }
  }

  // Sort letters by absolute coefficient for better pruning
  // Larger coefficients first to reduce branching
  letters.sort(
    (a, b) => Math.abs(coefficient.get(b)) - Math.abs(coefficient.get(a))
  )

  // Number of unique letters
  const letterCount = letters.length

  // Array of coefficients in same order as sorted letters
  const coeffArray = letters.map((char) => coefficient.get(char))

  // Precompute suffix sums for pruning bounds
  const suffixMax = new Array(letterCount + 1).fill(0),
    suffixMin = new Array(letterCount + 1).fill(0)

  // Calculate suffix bounds from right to left
  for (let i = letterCount - 1; i >= 0; i--) {
    // Current coefficient value
    const currentCoeff = coeffArray[i]

    if (currentCoeff > 0) {
      // Positive coefficient: max when digit is 9, min when digit is 0
      suffixMax[i] = suffixMax[i + 1] + currentCoeff * 9
      suffixMin[i] = suffixMin[i + 1]
    } else {
      // Negative coefficient: max when digit is 0, min when digit is 9
      suffixMax[i] = suffixMax[i + 1]
      suffixMin[i] = suffixMin[i + 1] + currentCoeff * 9
    }
  }

  // Track used digits (0-9) to ensure uniqueness
  const usedDigits = new Array(10).fill(false)

  // Recursive backtracking to assign digits to letters
  const backtrack = (index, currentSum) => {
    // Base case: all letters assigned, sum must be zero
    if (index === letterCount) return currentSum === 0

    // Pruning: impossible to reach zero with remaining letters
    if (currentSum + suffixMin[index] > 0 || currentSum + suffixMax[index] < 0)
      return false

    // Current letter to assign
    const currentChar = letters[index]

    // Coefficient for current letter
    const currentCoeff = coeffArray[index]

    // Starting digit (0 unless letter is leading and cannot be zero)
    const startDigit = nonZero.has(currentChar) ? 1 : 0

    // Try all possible digits for current letter
    for (let digit = startDigit; digit <= 9; digit++) {
      // Skip if digit already used
      if (usedDigits[digit]) continue

      // Mark digit as used
      usedDigits[digit] = true

      // Recurse with updated sum
      if (backtrack(index + 1, currentSum + currentCoeff * digit)) return true

      // Backtrack: unmark digit
      usedDigits[digit] = false
    }

    // No valid digit found for current letter
    return false
  }

  // Start backtracking from first letter with sum 0
  return backtrack(0, 0)
}
