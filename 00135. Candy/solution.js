/**
 * Problem: 135. Candy
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum candies needed based on children's ratings
 *
 * @param {number[]} ratings - Ratings for each child
 *
 * @returns {number} - Minimum total candies required
 */
const candy = (ratings) => {
  // Number of children
  const n = ratings.length
  // Initialize with minimum 1 candy per child
  let totalCandies = n
  // Start from second child
  let currentIndex = 1

  while (currentIndex < n) {
    // If current rating equals previous, move to next child
    if (ratings[currentIndex] === ratings[currentIndex - 1]) {
      currentIndex++
      continue
    }

    // Track ascending sequence length
    let ascendingCount = 0

    // Process ascending ratings sequence
    while (
      currentIndex < n &&
      ratings[currentIndex] > ratings[currentIndex - 1]
    ) {
      ascendingCount++
      totalCandies += ascendingCount
      currentIndex++
    }

    // Return if we've processed all children
    if (currentIndex === n) return totalCandies

    // Track descending sequence length
    let descendingCount = 0

    // Process descending ratings sequence
    while (
      currentIndex < n &&
      ratings[currentIndex] < ratings[currentIndex - 1]
    ) {
      descendingCount++
      totalCandies += descendingCount
      currentIndex++
    }

    // Avoid double-counting the peak between ascending and descending sequences
    totalCandies -= Math.min(ascendingCount, descendingCount)
  }

  return totalCandies
}
