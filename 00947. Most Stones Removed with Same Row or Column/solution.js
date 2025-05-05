/**
 * Problem: 947. Most Stones Removed with Same Row or Column
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

/**
 * Returns the maximum stones that can be removed
 *
 * @param {number[][]} stones - Stone coordinates
 *
 * @returns {number} - Maximum removable stones
 */
const removeStones = (stones) => {
  // Initialize variables for the number of stones, UnionSet, and maps for rows and columns
  const n = stones.length
  const unionSet = new UnionSet(n)
  const rows = new Map()
  const cols = new Map()

  // Iterate through stones to union stones in the same row or column
  for (let i = 0; i < n; i++) {
    const [x, y] = stones[i]

    // Union stones in the same row
    if (!rows.has(x)) rows.set(x, i)
    else unionSet.union(i, rows.get(x))

    // Union stones in the same column
    if (!cols.has(y)) cols.set(y, i)
    else unionSet.union(i, cols.get(y))
  }

  // Return the maximum number of removable stones
  return n - unionSet.sets
}

/**
 * UnionSet class to manage disjoint sets
 */
class UnionSet {
  /**
   * Creates a UnionSet instance
   *
   * @param {number} n - Number of sets
   */
  constructor(n) {
    // Initialize the number of disjoint sets
    this.sets = n
    // Create an array where each element is its own parent
    this.father = Array.from({ length: n }, (_, i) => i)
  }

  /**
   * Finds the representative of the set that contains a
   *
   * @param {number} a - Element to find
   *
   * @returns {number} - Representative of the set
   */
  find(a) {
    // Path compression: make the parent of 'a' point to its root to flatten the tree
    if (a !== this.father[a]) this.father[a] = this.find(this.father[a])

    // Return the root representative of 'a'
    return this.father[a]
  }

  /**
   * Creates a UnionSet instance
   *
   * @param {number} a - Element to find
   * @param {number} b - Element to union
   *
   * @returns {void}
   */
  union(a, b) {
    // Find the root representatives of both elements
    const fa = this.find(a)
    const fb = this.find(b)

    // If they are already in the same set, do nothing
    if (fa === fb) return

    // Merge the sets by making one root point to the other
    this.father[fa] = fb

    // Decrease the count of disjoint sets
    this.sets--
  }
}
