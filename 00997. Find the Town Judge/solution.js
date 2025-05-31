/**
 * Problem: 997. Find the Town Judge
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the town judge based on trust relationships
 *
 * @param {number} n - The number of people in the town
 * @param {number[][]} trust - Array of trust relationships
 *
 * @returns {number} - The label of the town judge or -1 if not found
 */
const findJudge = (n, trust) => {
  // Array to track trust balance for each person (1-indexed)
  const trustBalance = new Array(n + 1).fill(0)

  // Process all trust relationships
  for (let i = 0; i < trust.length; i++) {
    const personWhoTrusts = trust[i][0],
      personTrusted = trust[i][1]

    // Decrease balance for person who trusts others
    trustBalance[personWhoTrusts]--
    // Increase balance for person who is trusted
    trustBalance[personTrusted]++
  }

  // Find person trusted by everyone else but trusts no one
  for (let i = 1; i <= n; i++) if (trustBalance[i] === n - 1) return i

  // No judge found
  return -1
}
