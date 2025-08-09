/**
 * Problem: 1129. Shortest Path with Alternating Colors
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

// Graph representation constants
const GRAPH_TYPE = {
  RED: 1,
  BLUE: 2
}

/**
 * Builds the graph representation from the given red and blue edges
 *
 * @param {number} n - Number of nodes
 * @param {number[][]} red - Red edges as [from, to]
 * @param {number[][]} blue - Blue edges as [from, to]
 *
 * @returns {object} - Graph representation
 */
const buildGraph = (n, red, blue) => {
  // Initialize an empty object to represent the graph
  const graph = {}

  // For each node, initialize its adjacency lists for both RED and BLUE edges
  for (let i = 0; i < n; i++)
    graph[i] = { [GRAPH_TYPE.RED]: [], [GRAPH_TYPE.BLUE]: [] }

  // Populate the adjacency list for RED edges
  red.forEach(([from, to]) => graph[from][GRAPH_TYPE.RED].push(to))

  // Populate the adjacency list for BLUE edges
  blue.forEach(([from, to]) => graph[from][GRAPH_TYPE.BLUE].push(to))

  // Return the constructed graph representation
  return graph
}

/**
 * Returns shortest alternating paths from node 0 to all nodes
 *
 * @param {number} n - Number of nodes
 * @param {number[][]} redEdges - Red edges as [from, to]
 * @param {number[][]} blueEdges - Blue edges as [from, to]
 *
 * @returns {number[]} - Shortest alternating path lengths from node 0, or -1 if unreachable
 */
const shortestAlternatingPaths = (n, redEdges, blueEdges) => {
  // Build the graph using the provided red and blue edges
  const graph = buildGraph(n, redEdges, blueEdges)

  // Initialize the answers array with -1, indicating unreachable nodes by default
  const answers = new Array(n).fill(-1)

  // Initialize the BFS queue with two starting points: node 0 via a red edge and node 0 via a blue edge
  const queue = [
    [0, GRAPH_TYPE.RED],
    [0, GRAPH_TYPE.BLUE]
  ]

  // Track visited nodes for each color to prevent revisiting the same node with the same color
  const visited = { [GRAPH_TYPE.RED]: new Set(), [GRAPH_TYPE.BLUE]: new Set() }

  // Initialize the path length counter
  let pathLength = 0

  // Perform BFS traversal
  while (queue.length) {
    // Store the current level size to process nodes level by level
    const currentLevelSize = queue.length

    // Iterate through all nodes at the current BFS level
    for (let i = 0; i < currentLevelSize; i++) {
      // Dequeue the current node and the color of the edge used to reach it
      const [currentNode, currentColor] = queue.shift()

      // If this node hasn't been reached before, record the shortest path length
      if (answers[currentNode] === -1) answers[currentNode] = pathLength

      // Get the neighbors connected by the current color
      const neighbors = graph[currentNode][currentColor]

      // Alternate the color for the next step
      const nextColor =
        currentColor === GRAPH_TYPE.RED ? GRAPH_TYPE.BLUE : GRAPH_TYPE.RED

      // Explore all neighbors that haven't been visited with the alternate color
      neighbors.forEach((neighbor) => {
        if (!visited[nextColor].has(neighbor)) {
          visited[nextColor].add(neighbor)
          queue.push([neighbor, nextColor])
        }
      })
    }

    // Increment the path length after processing the current level
    pathLength++
  }

  // Return the array of shortest alternating path lengths
  return answers
}
