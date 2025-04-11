/**
 * Problem: 881. Boats to Save People
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Rescue all people with minimum boats
 *
 * @param {number[]} people - People weights
 * @param {number} limit - Max weight per boat
 *
 * @returns {number} - Minimum boats required
 */
const numRescueBoats = (people, limit) => {
  // Bucket sort weights
  const buckets = new Array(limit + 1).fill(0)

  // Count weights
  for (const p of people) buckets[p]++

  // Two-pointer approach
  let start = 0,
    end = limit,
    boats = 0

  // Balance boats
  while (start <= end) {
    // Move `start` to the next valid weight
    while (start <= end && buckets[start] <= 0) start++
    // Move `end` to the next valid weight
    while (start <= end && buckets[end] <= 0) end--

    // If no one is left to board, exit
    if (buckets[start] <= 0 && buckets[end] <= 0) break

    // One boat used
    boats++

    // Pair lightest with heaviest if possible
    if (start + end <= limit) buckets[start]--

    // Always take the heaviest person
    buckets[end]--
  }

  // Return minimum boats required
  return boats
}
