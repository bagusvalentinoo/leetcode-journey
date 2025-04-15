/**
 * Problem: 2179. Count Good Triplets in an Array
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 29 ms (Beats 100%)
 */

/**
 * Represents a Fenwick Tree (also known as a Binary Indexed Tree)
 */
class FenwickTree {
  /**
   * Initializes a new instance of the FenwickTree class
   *
   * @param {number} size - The size of the FenwickTree
   */
  constructor(size) {
    // Initialize the FenwickTree with a given size
    this.tree = new Array(size + 1).fill(0)
  }

  /**
   * Updates the FenwickTree with a given delta
   *
   * @param {number} index - The index to update
   * @param {number} delta - The delta to add
   */
  update(index, delta) {
    index++ // Convert 0-based index to 1-based index

    // Update the FenwickTree with a given delta
    while (index < this.tree.length) {
      this.tree[index] += delta // Update the FenwickTree with a given delta
      index += index & -index // Move to the next index
    }
  }

  /**
   * Queries the FenwickTree for a given index
   *
   * @param {number} index - The index to query
   *
   * @returns {number} - The value at the given index
   */
  query(index) {
    index++ // Convert 0-based index to 1-based index
    let res = 0

    // Query the FenwickTree for a given index
    while (index > 0) {
      res += this.tree[index] // Add the value at the given index
      index -= index & -index // Move to the previous index
    }

    return res
  }
}

/**
 * Finds the number of good triplets in two arrays
 *
 * @param {number[]} nums1 - The first array
 * @param {number[]} nums2 - The second array
 *
 * @returns {number} - The number of good triplets
 */
const goodTriplets = (nums1, nums2) => {
  const n = nums1.length // Get the length of the arrays
  // Map the second array to the first array
  const pos2 = new Array(n),
    reversedIndexMapping = new Array(n)

  // Map the second array to the first array
  for (let i = 0; i < n; i++) pos2[nums2[i]] = i

  // Map the first array to the second array
  for (let i = 0; i < n; i++) reversedIndexMapping[pos2[nums1[i]]] = i

  // Initialize the FenwickTree
  const tree = new FenwickTree(n)
  let res = 0

  for (let value = 0; value < n; value++) {
    const pos = reversedIndexMapping[value] // Get the position of the current value
    const left = tree.query(pos) // Get the number of elements less than the current value

    tree.update(pos, 1) // Update the FenwickTree with the current value

    const right = n - 1 - pos - (value - left) // Get the number of elements greater than the current value

    res += left * right // Add the number of good triplets
  }

  return res
}
