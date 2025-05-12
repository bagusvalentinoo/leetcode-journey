/**
 * Problem: 959. Regions Cut By Slashes
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

/**
 * Count the number of regions in a grid of slashes and backslashes
 *
 * @param {string[]} grid - A 2D grid of strings
 *
 * @returns {number} - The number of regions in the grid
 */
const regionsBySlashes = (grid) => {
  // Size of grid and calculate total grid points (includes perimeter points)
  const n = grid.length
  const pointsPerSide = n + 1
  const totalPoints = pointsPerSide * pointsPerSide
  // Initialize union-find array where -1 means root node
  const parentArr = new Array(totalPoints).fill(-1)

  // Connect all border points to form the outer boundary (region 0)
  for (let i = 0; i < pointsPerSide; i++) {
    for (let j = 0; j < pointsPerSide; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === pointsPerSide - 1 ||
        j === pointsPerSide - 1
      ) {
        const point = i * pointsPerSide + j
        parentArr[point] = 0
      }
    }
  }

  // Start with 1 region (outer boundary) and set point 0 as root
  let regions = 1
  parentArr[0] = -1

  // Process each cell in the grid
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // For '/' slash, connect top-right with bottom-left points
      if (grid[i][j] === '/') {
        const topRight = i * pointsPerSide + (j + 1)
        const bottomLeft = (i + 1) * pointsPerSide + j
        regions += union(topRight, bottomLeft, parentArr)
        // For '\' backslash, connect top-left with bottom-right points
      } else if (grid[i][j] === '\\') {
        const topLeft = i * pointsPerSide + j
        const bottomRight = (i + 1) * pointsPerSide + (j + 1)
        regions += union(topLeft, bottomRight, parentArr)
      }
    }
  }

  return regions
}

/**
 * Find the root node in the union-find structure
 *
 * @param {number[]} parentArr - The union-find array
 * @param {number} node - The node to find the root of
 *
 * @returns {number} - The root node
 */
const find = (parentArr, node) => {
  // If node is root (value -1), return itself
  if (parentArr[node] === -1) return node

  // Path compression: update parent to root and return root
  return (parentArr[node] = find(parentArr, parentArr[node]))
}

/**
 * Union two nodes in the union-find structure
 *
 * @param {number} node1 - First node
 * @param {number} node2 - Second node
 * @param {number[]} parentArr - Union-find array
 *
 * @returns {number} - 1 if nodes were in same set, 0 otherwise
 */
const union = (node1, node2, parentArr) => {
  // Find the root parents of both nodes
  const p1 = find(parentArr, node1),
    p2 = find(parentArr, node2)

  // If nodes already share a parent, a cycle is detected (new region found)
  if (p1 === p2) return 1

  // Merge the second tree into the first tree
  parentArr[p2] = p1

  // No new region formed
  return 0
}
