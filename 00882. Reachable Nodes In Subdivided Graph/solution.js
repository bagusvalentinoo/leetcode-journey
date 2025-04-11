/**
 * Problem: 882. Reachable Nodes In Subdivided Graph
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 146 ms (Beats 100%)
 */

/**
 * Finds the number of reachable nodes in the subdivided graph
 *
 * @param {number[][]} edges - Array of edges where edges[i] = [ui, vi, cnti]
 * @param {number} maxMoves - Maximum number of moves allowed
 * @param {number} n - Number of nodes in the original graph
 *
 * @returns {number} - The number of reachable nodes in the subdivided graph
 */
const reachableNodes = (edges, maxMoves, n) => {
  // Build graph
  const graph = new Map()

  // Add edges to graph
  for (const [u, v, cnt] of edges) {
    // Add nodes to graph if not exists
    if (!graph.has(u)) graph.set(u, [])
    if (!graph.has(v)) graph.set(v, [])

    // Add edge to graph
    graph.get(u).push([v, cnt])
    graph.get(v).push([u, cnt])
  }

  // Initialize node count
  let nodeCount = 0

  // Initialize priority queue
  const heap = new PriorityQueue((a, b) => a[1] - b[1])
  heap.enqueue([0, 0])

  // Initialize visited and edgeUtilization
  const visited = new Array(n).fill(false)
  const edgeUtilization = new Map()

  // Perform Dijkstra's algorithm
  while (!heap.isEmpty()) {
    // Get current node and moves
    const [node, currMoves] = heap.dequeue()

    // Skip if node is already visited
    if (visited[node]) continue

    // Mark node as visited
    visited[node] = true
    nodeCount++

    // Explore neighbors
    if (graph.has(node)) {
      for (const [nei, cnt] of graph.get(node)) {
        // Calculate full edge move
        const fullEdgeMove = currMoves + cnt + 1
        const movesAvailableFromCurrentNode =
          Math.min(fullEdgeMove, maxMoves) - currMoves

        let u = node,
          v = nei

        // Sort nodes to ensure consistent edge key
        if (u > v) [u, v] = [v, u]

        // Update edge utilization
        const key = `${u}:${v}`
        edgeUtilization.set(
          key,
          Math.min(
            cnt,
            (edgeUtilization.get(key) ?? 0) + movesAvailableFromCurrentNode
          )
        )

        // Add neighbor to heap if within max moves
        if (fullEdgeMove <= maxMoves) heap.enqueue([nei, fullEdgeMove])
      }
    }
  }

  // Add subnodes to node count
  for (const subNodeCount of edgeUtilization.values()) nodeCount += subNodeCount

  // Return total node count
  return nodeCount
}
