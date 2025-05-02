/**
 * Problem: 943. Find the Shortest Superstring
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 57 ms (Beats 100%)
 */

/**
 * Calculate the shortest superstring from an array of strings
 *
 * @param {string[]} words - Array of strings
 *
 * @returns {string} - Shortest superstring
 */
const shortestSuperstring = (words) => {
  // Store the number of words
  const n = words.length
  // Matrix to store overlap lengths between words
  const a = words.map(() => new Array(n).fill(0))

  // Calculate overlaps between all pairs of words
  for (let j = 0; j < n; ++j) {
    const wj = words[j]
    const lj = words[j].length
    // KMP pattern table for efficient string matching
    const p = new Array(lj + 1)
    let fb = 0

    // Build KMP pattern table
    for (let k = 1; k < lj; ++k) {
      p[k] = fb

      while (true) {
        if (wj[fb] === wj[k]) {
          ++fb
          break
        }
        if (fb === 0) break

        fb = p[fb]
      }
    }

    p[lj] = fb

    // Calculate overlap of other words ending with this word
    for (let i = 0; i < n; ++i) {
      if (i === j) continue

      const wi = words[i]
      const li = words[i].length

      fb = 0

      // Use KMP algorithm to find maximum overlap
      for (let k = 0; k < li; ++k) {
        while (true) {
          if (fb < lj && wi[k] === wj[fb]) {
            ++fb
            break
          }
          if (fb === 0) break

          fb = p[fb]
        }
      }

      a[i][j] = fb
    }
  }

  // Bitmask to represent visited words
  const mc = 1 << n
  // DP arrays for memoization
  const dp = words.map(() => new Array(mc).fill(-1))
  // Track next word in optimal path
  const dpn = words.map(() => new Array(mc).fill(n))

  // Recursive function to find max overlap path
  const f = (i, mask) => {
    let ans = dp[i][mask]

    if (ans < 0) {
      if (mask + 1 < mc) {
        let next = n

        // Try all possible next words
        for (let j = 0; j < n; ++j) {
          const bit = 1 << j

          if (mask & bit) continue

          const x = f(j, mask | bit) + a[i][j]

          // Update if better overlap found
          if (ans < x) {
            ans = x
            next = j
          }
        }

        dpn[i][mask] = next
      } else ans = 0

      dp[i][mask] = ans
    }

    return ans
  }

  // Find the best starting word
  let i0 = n
  let x0 = -1

  for (let i = 0; i < n; ++i) {
    const x = f(i, 1 << i, 0)

    if (x0 < x) {
      x0 = x
      i0 = i
    }
  }

  // Build the shortest superstring
  let ans = new String(words[i0])
  let mask = 1 << i0

  // Add remaining words with maximum overlap
  for (let i = 1; i < n; ++i) {
    const i1 = dpn[i0][mask]
    const d = a[i0][i1]

    ans += words[i1].slice(d)
    mask |= 1 << i1
    i0 = i1
  }

  return ans
}
