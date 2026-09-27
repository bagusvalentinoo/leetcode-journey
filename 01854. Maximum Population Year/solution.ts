/**
 * Problem: 1854. Maximum Population Year
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds earliest year with maximum population using difference array
 *
 * @param logs - Array of [birth, death] year pairs
 *
 * @returns Earliest year with maximum population
 */
const maximumPopulation = (logs: number[][]): number => {
  // Base year offset and total year range from 1950 to 2050
  const baseYear: number = 1950,
    yearRange: number = 101

  // Initialize difference array for range updates
  const difference: number[] = new Array(yearRange).fill(0)

  // Mark population changes for each person
  for (const log of logs) {
    // Increment count at birth year
    difference[log[0] - baseYear]++

    // Decrement count at death year (person not counted in death year)
    difference[log[1] - baseYear]--
  }

  // Track maximum population and earliest year achieving it
  let maxPopulation: number = 0,
    earliestYear: number = baseYear,
    currentPopulation: number = 0

  // Scan years in order computing prefix sums
  for (let index: number = 0; index < yearRange; index++) {
    // Add net change for current year to running population
    currentPopulation += difference[index]

    // Update answer only on strictly greater population to keep earliest year
    if (currentPopulation > maxPopulation) {
      // Record new maximum population
      maxPopulation = currentPopulation

      // Record earliest year reaching this maximum
      earliestYear = baseYear + index
    }
  }

  // Return the earliest year with maximum population
  return earliestYear
}
