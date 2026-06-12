/**
 * Problem: 1436. Destination City
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the destination city that is not a starting point
 *
 * @param paths - Array of [start, destination] pairs
 *
 * @returns The destination city with no outgoing path
 */
const destCity = (paths: string[][]): string => {
  // Set to store all starting cities
  const startingCities: Set<string> = new Set()

  // Add all starting cities to the set
  for (const path of paths) startingCities.add(path[0])

  // Check each destination to find one that is not a starting city
  for (const path of paths) {
    // Get destination city from current path
    const destination: string = path[1]

    // If destination is not in starting cities, it's the answer
    if (!startingCities.has(destination)) return destination
  }

  // Return empty string if no destination found
  return ''
}
