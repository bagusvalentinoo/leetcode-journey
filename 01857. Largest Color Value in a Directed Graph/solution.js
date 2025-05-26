/**
 * Problem: 1857. Largest Color Value in a Directed Graph
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 409 ms (Beats 100%)
 */

/**
 * Finds the largest color value in a valid path or returns -1 if the graph has a cycle
 *
 * @param {string} colors - Node colors
 * @param {number[][]} edges - Directed edges
 *
 * @returns {number} - Largest color value or -1 for cycle
 */
const largestPathValue = (colors, edges) => {
  // Create adjacency list representation of the graph
  const adjacencyList = new Map()
  // Track number of incoming edges for each node
  const inDegreeCount = new Array(colors.length).fill(0)

  // Build the graph and count incoming edges
  for (const [source, destination] of edges) {
    if (!adjacencyList.has(source)) adjacencyList.set(source, [destination])
    else adjacencyList.get(source).push(destination)

    inDegreeCount[destination]++
  }

  // Initialize queue with nodes having no incoming edges
  const queue = []
  for (let i = 0; i < colors.length; i++)
    if (inDegreeCount[i] === 0) queue.push(i)

  // Track visited nodes count and maximum color frequency
  let visitedCount = 0,
    maxColorFrequency = 0

  // Track color frequencies for each node (26 lowercase letters)
  const colorFrequencies = Array.from({ length: colors.length }, () =>
    new Array(26).fill(0)
  )

  // Process nodes in topological order
  while (queue.length > 0) {
    const currentNode = queue.shift()
    const neighbors = adjacencyList.get(currentNode) || []
    const colorIndex = colors.charCodeAt(currentNode) - 97

    // Update color count for current node
    colorFrequencies[currentNode][colorIndex]++
    maxColorFrequency = Math.max(
      maxColorFrequency,
      colorFrequencies[currentNode][colorIndex]
    )
    visitedCount++

    // Process all neighbors
    for (const neighbor of neighbors) {
      // Propagate color frequencies to neighbors
      for (let c = 0; c < 26; c++)
        colorFrequencies[neighbor][c] = Math.max(
          colorFrequencies[neighbor][c],
          colorFrequencies[currentNode][c]
        )

      inDegreeCount[neighbor]--

      // Add to queue when all dependencies are processed
      if (inDegreeCount[neighbor] === 0) queue.push(neighbor)
    }
  }

  // Return -1 if cycle detected (not all nodes processed), otherwise max color frequency
  return visitedCount === colors.length ? maxColorFrequency : -1
}
