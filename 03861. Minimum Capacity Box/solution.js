/**
 * Problem: 3861. Minimum Capacity Box
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum index with capacity >= itemSize
 *
 * @param {number[]} capacity - Array of capacities
 * @param {number} itemSize - Size of item to fit
 *
 * @returns {number} Minimum index or -1 if not found
 */
const minimumIndex = (capacity, itemSize) => {
  // Filter capacities that are large enough, then find the smallest one
  const smallestValidCapacity = Math.min(
    ...capacity.filter((x) => x >= itemSize)
  )
  // Get the index of that smallest valid capacity
  const resultIndex = capacity.indexOf(smallestValidCapacity)

  // Return the index if found, otherwise return -1
  return resultIndex !== undefined ? resultIndex : -1
}
