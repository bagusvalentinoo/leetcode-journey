/**
 * Problem: 1854. Maximum Population Year
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximumPopulation(logs [][]int) int {
  // Base year offset and total year range from 1950 to 2050
  baseYear, yearRange := 1950, 101

  // Initialize difference array for range updates
  difference := make([]int, yearRange)

  // Mark population changes for each person
  for _, log := range logs {
    // Increment count at birth year
    difference[log[0]-baseYear]++

    // Decrement count at death year (person not counted in death year)
    difference[log[1]-baseYear]--
  }

  // Track maximum population and earliest year achieving it
  maxPopulation, earliestYear, currentPopulation := 0, baseYear, 0

  // Scan years in order computing prefix sums
  for index := 0; index < yearRange; index++ {
    // Add net change for current year to running population
    currentPopulation += difference[index]

    // Update answer only on strictly greater population to keep earliest year
    if currentPopulation > maxPopulation {
      // Record new maximum population
      maxPopulation = currentPopulation

      // Record earliest year reaching this maximum
      earliestYear = baseYear + index
    }
  }

  // Return the earliest year with maximum population
  return earliestYear
}
