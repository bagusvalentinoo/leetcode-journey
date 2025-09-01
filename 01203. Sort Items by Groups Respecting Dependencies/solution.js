/**
 * Problem: 1203. Sort Items by Groups Respecting Dependencies
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 45 ms (Beats 100%)
 */

/**
 * Sorts items by group and dependency order
 *
 * @param {number} n - Number of items
 * @param {number} m - Number of groups
 * @param {number[]} group - Group assignments for items
 * @param {number[][]} beforeItems - Item dependencies
 *
 * @returns {number[]} - Sorted item indices
 */
const sortItems = (n, m, group, beforeItems) => {
  // Depth-first search helper for topological sorting
  const dfs = (
    sortedItems,
    dependencyGraph,
    itemIndegree,
    totalItems,
    currentItem
  ) => {
    // If current node is an item, add to result
    if (currentItem < totalItems) sortedItems.push(currentItem)

    // Mark current node as visited
    itemIndegree[currentItem] = -1

    // Traverse all neighbors (dependencies)
    for (const nextItem of dependencyGraph[currentItem] || []) {
      // Decrement indegree for neighbor
      itemIndegree[nextItem]--

      // If neighbor has no remaining dependencies, visit it
      if (itemIndegree[nextItem] === 0)
        dfs(sortedItems, dependencyGraph, itemIndegree, totalItems, nextItem)
    }
  }

  // Initialize graph to represent dependencies between items and groups
  const dependencyGraph = Array.from({ length: m + n }, () => [])
  // Initialize indegree array to track number of dependencies for each node
  const itemIndegree = Array(n + m).fill(0)

  // Build edges from group nodes to their items
  for (let itemIdx = 0; itemIdx < group.length; itemIdx++) {
    // Skip items not assigned to any group
    if (group[itemIdx] === -1) continue

    // Add edge from group node to item node
    dependencyGraph[n + group[itemIdx]].push(itemIdx)
    // Increment indegree for item node
    itemIndegree[itemIdx]++
  }

  // Build edges for item dependencies and group dependencies
  for (let itemIdx = 0; itemIdx < beforeItems.length; itemIdx++) {
    for (const dependency of beforeItems[itemIdx]) {
      // Determine source and target nodes based on group assignment
      const sourceNode =
        group[dependency] === -1 ? dependency : n + group[dependency]
      const targetNode = group[itemIdx] === -1 ? itemIdx : n + group[itemIdx]

      if (sourceNode === targetNode) {
        // If both items are in the same group, add edge between items
        dependencyGraph[dependency].push(itemIdx)
        itemIndegree[itemIdx]++
      } else {
        // If items are in different groups, add edge between group nodes
        dependencyGraph[sourceNode].push(targetNode)
        itemIndegree[targetNode]++
      }
    }
  }

  // Array to store sorted result
  const sortedItems = []

  // Start DFS from nodes with zero indegree
  for (let nodeIdx = 0; nodeIdx < n + m; nodeIdx++)
    if (itemIndegree[nodeIdx] === 0)
      dfs(sortedItems, dependencyGraph, itemIndegree, n, nodeIdx)

  // Return sorted items if all items are included, otherwise return empty array
  return sortedItems.length === n ? sortedItems : []
}
