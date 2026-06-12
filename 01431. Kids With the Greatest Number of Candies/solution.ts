/**
 * Problem: 1431. Kids With the Greatest Number of Candies
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Kids who can have most candies after adding extra
 *
 * @param candies - Candy counts
 * @param extraCandies - Extra candies to add
 *
 * @returns True if kid can have max candies
 */
const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  // Find the maximum candy count among all kids
  const maxCandyCount: number = Math.max(...candies)

  // Check for each kid if adding extra candies reaches or exceeds the maximum
  return candies.map(
    (currentCandies: number) => currentCandies + extraCandies >= maxCandyCount
  )
}
