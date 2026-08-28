/**
 * Problem: 1409. Queries on a Permutation With Key
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find position of each query in permutation, then move to front
 *
 * @param queries - Queries to process
 * @param m - Permutation size
 *
 * @returns Positions before each move
 */
const processQueries = (queries: number[], m: number): number[] => {
  // Initialize permutation with values 1 to m
  const permutation: number[] = []

  // Populate permutation array with consecutive integers from 1 to m
  for (let i = 1; i <= m; i++) permutation.push(i)

  // Store results for each query
  const answer: number[] = []

  // Process each query
  for (const query of queries) {
    // Find current position of query element
    const index: number = permutation.indexOf(query)

    // Record the index as result
    answer.push(index)

    // Remove query from its current position
    permutation.splice(index, 1)
    // Move it to the front
    permutation.unshift(query)
  }

  // Return the array containing positions of each queried element before moving to front
  return answer
}
