/**
 * Problem: 3607. Power Grid Maintenance
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 205 ms (Beats 100%)
 */

/**
 * Process the queries on the given connections
 *
 * @param {number} c - Number of nodes
 * @param {number[][]} connections - Edges between nodes
 * @param {number[][]} queries - Queries to process
 *
 * @returns {number[]} - Results of the queries
 */
const processQueries = (c, connections, queries) => {
  // Initialize the parent array where each node is its own parent
  const parent = Array.from({ length: c + 1 }, (_, i) => i)

  // Initialize the size array to track the size of each component
  const size = new Array(c + 1).fill(1)

  // Define the find function to find the root of a node with path compression
  const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])))

  // Define the union function to merge two components
  const union = (a, b) => {
    a = find(a)
    b = find(b)

    // If both nodes are already in the same component, return
    if (a === b) return

    // Ensure the larger component becomes the parent
    if (size[a] < size[b]) [a, b] = [b, a]

    // Merge the components and update the size
    parent[b] = a
    size[a] += size[b]
  }

  // Process each connection and merge the respective components
  for (const [u, v] of connections) union(u, v)

  // Initialize an array to store members of each component
  const members = Array(c + 1)

  // Populate the members array with nodes grouped by their root
  for (let i = 1; i <= c; i++) {
    const r = find(i)

    // Create a new group if it doesn't exist
    if (!members[r]) members[r] = []

    // Add the current node to its respective group
    members[r].push(i)
  }

  // Initialize an array to track pointers for each component
  const ptr = new Array(c + 1).fill(0)

  // Initialize an array to track offline status of nodes
  const offline = new Array(c + 1).fill(false)

  // Initialize the result array to store query results
  const ans = []

  // Process each query in the queries array
  for (const [t, x] of queries) {
    // If the query type is 1, find the next available node
    if (t === 1) {
      // If the node is not offline, return it directly
      if (!offline[x]) ans.push(x)
      else {
        // Find the root of the component containing the node
        const r = find(x)

        // Get the list of members in the component
        const arr = members[r] || []

        // Retrieve the pointer for the current component
        let p = ptr[r] || 0

        // Skip over offline nodes in the component
        while (p < arr.length && offline[arr[p]]) p++

        // Update the pointer for the component
        ptr[r] = p

        // Add the next available node or -1 if none are available
        ans.push(p < arr.length ? arr[p] : -1)
      }
    }
    // If the query type is 2, mark the node as offline
    else offline[x] = true
  }

  // Return the results of the queries
  return ans
}
