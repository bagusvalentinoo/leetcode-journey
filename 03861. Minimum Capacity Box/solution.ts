/**
 * Problem: 3861. Minimum Capacity Box
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum index with capacity >= itemSize
 *
 * @param capacity - Array of capacities
 * @param itemSize - Size of item to fit
 *
 * @returns Minimum index or -1 if not found
 */
const minimumIndex = (capacity: number[], itemSize: number): number => {
  // Filter capacities that are large enough, then find the smallest one
  const smallestValidCapacity = Math.min(
    ...capacity.filter((x) => x >= itemSize)
  )
  // Get the index of that smallest valid capacity
  const resultIndex = capacity.indexOf(smallestValidCapacity)

  // Return the index if found, otherwise return -1
  return resultIndex !== -1 ? resultIndex : -1
}
