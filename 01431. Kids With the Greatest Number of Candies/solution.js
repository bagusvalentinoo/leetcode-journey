/**
 * Problem: 1431. Kids With the Greatest Number of Candies
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Kids who can have most candies after adding extra
 *
 * @param {number[]} candies - Candy counts
 * @param {number} extraCandies - Extra candies to add
 *
 * @returns {boolean[]} True if kid can have max candies
 */
const kidsWithCandies = (candies, extraCandies) => {
  // Find the maximum candy count among all kids
  const maxCandyCount = Math.max(...candies)

  // Check for each kid if adding extra candies reaches or exceeds the maximum
  return candies.map(
    (currentCandies) => currentCandies + extraCandies >= maxCandyCount
  )
}
