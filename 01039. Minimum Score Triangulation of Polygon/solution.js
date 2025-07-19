/**
 * Problem: 1039. Minimum Score Triangulation of Polygon
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Finds the minimum score of triangulation of a convex polygon
 *
 * @param {number[]} values - Array of vertex values
 *
 * @returns {number} - The minimum triangulation score
 */
const minScoreTriangulation = (values) => {
  // Get the number of vertices in the polygon
  const n = values.length

  // Initialize memoization table with -1 to indicate uncomputed states
  // memo[i][j] stores the minimum triangulation score for vertices from i to j
  const memo = Array.from({ length: n }, () => Array(n).fill(-1))

  // Recursive function to find minimum triangulation score between vertices i and j
  const dfs = (i, j) => {
    // Base case: if only one edge between vertices, no triangulation needed
    if (i + 1 === j) return 0

    // Return cached result if already computed
    if (memo[i][j] !== -1) return memo[i][j]

    // Initialize result with infinity to find minimum
    let res = Infinity

    // Try every possible vertex k between i and j as the third vertex of triangle
    for (let k = i + 1; k < j; k++)
      // Calculate score: left subproblem + right subproblem + current triangle cost
      res = Math.min(
        res,
        dfs(i, k) + dfs(k, j) + values[i] * values[j] * values[k]
      )

    // Cache the computed result for future use
    memo[i][j] = res

    // Return the minimum triangulation score for this subproblem
    return res
  }

  // Start the triangulation from vertex 0 to vertex n-1 (entire polygon)
  return dfs(0, n - 1)
}
