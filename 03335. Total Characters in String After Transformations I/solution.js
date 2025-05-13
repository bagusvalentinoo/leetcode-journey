/**
 * Problem: 3335. Total Characters in String After Transformations I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

// Cache for multiple calls to lengthAfterTransformations
const zGrowthCache = new Uint32Array(100_000 + 1)
let zGrowthCacheComputedUpTo = 0

// Base case: a single 'z' with 0 transforms has length 1
zGrowthCache[0] = 1

/**
 * Calculate total characters after applying t transformations to string s
 *
 * @param {string} s - Initial string
 * @param {number} t - Number of transformations
 *
 * @returns {number} - Length after transformations (modulo 10^9 + 7)
 */
const lengthAfterTransformations = (s, t) => {
  // Constants for modular arithmetic and character processing
  const MODULO = 1_000_000_007
  const ALPHABET_SIZE = 26
  const ALPHABET_MINUS_ONE = 26 - 1
  const CHAR_CODE_OFFSET = 97

  // Compute and cache the growth pattern of 'z' after transformations
  if (zGrowthCacheComputedUpTo < t) {
    for (let step = zGrowthCacheComputedUpTo + 1; step <= t; ++step) {
      // Base case: characters a-y take 2 steps to grow (becomes "z", then grows)
      if (step <= ALPHABET_MINUS_ONE) zGrowthCache[step] = 2
      else {
        // Recurrence relation: growth follows Fibonacci-like pattern after reaching 'z'
        const sum =
          zGrowthCache[step - ALPHABET_MINUS_ONE] +
          zGrowthCache[step - ALPHABET_SIZE]

        // Handle modular arithmetic to prevent overflow
        zGrowthCache[step] = sum >= MODULO ? sum - MODULO : sum
      }
    }

    zGrowthCacheComputedUpTo = t
  }

  // Count occurrences of each letter in the input string
  const letterCounts = new Uint32Array(26).fill(0)
  for (let i = 0, len = s.length; i < len; ++i)
    letterCounts[s.charCodeAt(i) - CHAR_CODE_OFFSET]++

  // Calculate total length by processing each letter's contribution
  let total = 0
  for (let code = 0; code < ALPHABET_SIZE; ++code) {
    const count = letterCounts[code]
    // Skip letters that don't appear in the string
    if (count === 0) continue

    // Calculate how each letter contributes to the final length
    const untilZ = ALPHABET_MINUS_ONE - code
    const remaining = t - untilZ
    const contribution = remaining > 0 ? zGrowthCache[remaining] : 1

    // Add this letter's total contribution to the result
    total += count * contribution
  }

  // Return final length with modulo applied
  return total % MODULO
}
