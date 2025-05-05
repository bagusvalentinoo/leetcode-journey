/**
 * Problem: 948. Bag of Tokens
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Calculates the maximum score achievable by playing tokens
 *
 * @param {number[]} tokens - Array of token values
 * @param {number} power - Initial power available
 *
 * @returns {number} - Maximum score achievable
 */
const bagOfTokensScore = (tokens, power) => {
  // Initialize pointers, score, and sort tokens in ascending order
  let low = 0,
    high = tokens.length - 1,
    score = 0

  // Sort tokens in ascending order
  // This allows us to play the lowest value token first
  tokens.sort((a, b) => a - b)

  // Use a two-pointer approach to maximize score
  while (low <= high)
    if (power >= tokens[low]) {
      // Play token face up to gain score
      score += 1
      power -= tokens[low]
      low += 1
    } else if (low < high && score > 0) {
      // Play token face down to regain power
      score -= 1
      power += tokens[high]
      high -= 1
    } else return score // Return score if no more moves are possible

  return score // Return final score after processing all tokens
}
