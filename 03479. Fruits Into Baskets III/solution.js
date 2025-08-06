/**
 * Problem: 3479. Fruits Into Baskets III
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 84 ms (Beats 100%)
 */

/**
 * Counts fruits that cannot be placed in baskets
 *
 * @param {number[]} fruits - Fruit weights
 * @param {number[]} baskets - Basket capacities
 *
 * @returns {number} - Number of unplaceable fruits
 */
const numOfUnplacedFruits = (fruits, baskets) => {
  // Get the number of baskets
  const basketCount = baskets.length

  // Find the next power of 2 greater than or equal to basketCount for segment tree
  let segmentTreeSize = 1
  while (segmentTreeSize <= basketCount) segmentTreeSize <<= 1

  // Initialize segment tree array with size 2 * segmentTreeSize (internal + leaf nodes)
  const segmentTree = new Array(segmentTreeSize << 1).fill(0)

  // Copy basket capacities to leaf nodes of segment tree (starting at index segmentTreeSize)
  for (let i = 0; i < basketCount; i++)
    segmentTree[segmentTreeSize + i] = baskets[i]

  // Build segment tree by calculating maximum values for internal nodes (bottom-up)
  for (let i = segmentTreeSize - 1; i > 0; i--)
    segmentTree[i] = Math.max(segmentTree[2 * i], segmentTree[2 * i + 1])

  // Counter for fruits that cannot be placed in any basket
  let unplacedFruitsCount = 0

  // Process each fruit to find a suitable basket
  for (const fruitWeight of fruits) {
    // Start from root of segment tree
    let currentIndex = 1

    // Check if any basket can hold this fruit (root contains maximum capacity)
    if (segmentTree[currentIndex] < fruitWeight) {
      unplacedFruitsCount++
      continue
    }

    // Traverse down the tree to find a suitable basket
    while (currentIndex < segmentTreeSize) {
      // Go to left child if it can hold the fruit
      if (segmentTree[2 * currentIndex] >= fruitWeight) {
        currentIndex = 2 * currentIndex
      } else {
        // Otherwise go to right child
        currentIndex = 2 * currentIndex + 1
      }
    }

    // Mark the selected basket as used by setting its capacity to -1
    segmentTree[currentIndex] = -1

    // Update segment tree by propagating changes upward to maintain max property
    while (currentIndex > 1) {
      currentIndex >>= 1
      segmentTree[currentIndex] = Math.max(
        segmentTree[2 * currentIndex],
        segmentTree[2 * currentIndex + 1]
      )
    }
  }

  // Return the count of fruits that couldn't be placed
  return unplacedFruitsCount
}
