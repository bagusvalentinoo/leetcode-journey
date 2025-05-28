/**
 * Problem: 990. Satisfiability of Equality Equations
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if the given equations are satisfiable
 *
 * @param {string[]} equations - Array of equations like "a==b" or "a!=b"
 *
 * @returns {boolean} - Whether all equations can be satisfied simultaneously
 */
const equationsPossible = (equations) => {
  // Create array where each index represents a letter, initialized with its own index as parent
  const parents = Array.from({ length: 26 }, (_, i) => i)
  // Track size of each set for union by rank optimization
  const rankSizes = Array.from({ length: 26 }).fill(1)

  // Find the root parent of a node with path compression
  const find = (x) => (x !== parents[x] ? (parents[x] = find(parents[x])) : x)

  // Union two sets by rank for efficiency
  const union = (x, y) => {
    // Find root nodes for both elements
    const rootX = find(x),
      rootY = find(y)

    // If both elements are already in the same set, no need to union
    if (rootX === rootY) return

    // Union by rank: attach smaller tree to the root of larger tree
    if (rankSizes[rootX] > rankSizes[rootY]) {
      parents[rootY] = rootX
      rankSizes[rootX] += rankSizes[rootY]

      return
    }

    // If rootY's tree is larger or equal, attach rootX's tree to rootY
    parents[rootX] = rootY
    rankSizes[rootY] += rankSizes[rootX]
  }

  // ASCII code for 'a' to convert letters to indices
  const asciiA = 'a'.charCodeAt(0)

  // First pass: process equality constraints
  for (const eq of equations)
    if (eq[1] === '=')
      union(eq.charCodeAt(0) - asciiA, eq.charCodeAt(3) - asciiA)

  // Second pass: check inequality constraints
  for (const equation of equations)
    if (equation[1] === '!') {
      // Get character codes and convert to 0-25 range
      const charIndexLeft = equation.charCodeAt(0) - asciiA,
        charIndexRight = equation.charCodeAt(3) - asciiA

      // If both variables are in the same set, the inequality can't be satisfied
      if (find(charIndexLeft) === find(charIndexRight)) return false
    }

  return true
}
