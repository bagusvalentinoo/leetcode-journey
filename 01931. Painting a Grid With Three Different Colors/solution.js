/**
 * Problem: 1931. Painting a Grid With Three Different Colors
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 11 ms (Beats 100%)
 */

/**
 * Counts ways to color an m×n grid using 3 colors where no adjacent cells have the same color
 *
 * @param {number} m - Number of rows
 * @param {number} n - Number of columns
 *
 * @returns {number} - Number of valid colorings modulo 10^9 + 7
 */
const colorTheGrid = (m, n) => {
  // Modulo constant to prevent integer overflow
  const MOD = 1e9 + 7

  // Generate all valid color patterns for a single column
  const generateValidPatterns = (m) => {
    const validPatterns = []

    // DFS to generate all valid color combinations for a column
    const dfs = (position, previousColor, colorMask) => {
      if (position === m) {
        validPatterns.push(colorMask)

        return
      }

      for (let color = 0; color < 3; color++)
        if (color !== previousColor)
          dfs(position + 1, color, (colorMask << 2) | color)
    }

    dfs(0, -1, 0)

    return validPatterns
  }

  // Check if two adjacent column patterns are compatible (no same colors in adjacent positions)
  const areCompatible = (pattern1, pattern2, m) => {
    for (let i = 0; i < m; i++) {
      const color1 = (pattern1 >> (2 * i)) & 3,
        color2 = (pattern2 >> (2 * i)) & 3

      if (color1 === color2) return false
    }
    return true
  }

  // Generate all valid patterns for a single column
  const patterns = generateValidPatterns(m)
  const patternCount = patterns.length

  // Store compatible patterns for each pattern
  const compatiblePatterns = Array.from({ length: patternCount }, () => [])

  // Precompute all compatible pattern pairs
  for (let i = 0; i < patternCount; i++)
    for (let j = 0; j < patternCount; j++)
      if (areCompatible(patterns[i], patterns[j], m))
        compatiblePatterns[i].push(j)

  // Initialize dp array with first column (all patterns are valid)
  let dp = new Array(patternCount).fill(1)

  // Dynamic programming to calculate valid ways for each column
  for (let col = 1; col < n; col++) {
    const nextDp = new Array(patternCount).fill(0)

    // Calculate new dp values based on compatible patterns
    for (let i = 0; i < patternCount; i++)
      for (const j of compatiblePatterns[i])
        nextDp[j] = (nextDp[j] + dp[i]) % MOD

    dp = nextDp
  }

  // Sum up all possible pattern counts for the final column
  return dp.reduce((sum, val) => (sum + val) % MOD, 0)
}
