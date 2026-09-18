/**
 * Problem: 1710. Maximum Units on a Truck
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Loads truck with highest-unit boxes first for maximum units
 *
 * @param boxTypes - Array of [boxCount, unitsPerBox] pairs
 * @param truckSize - Maximum boxes that fit on truck
 *
 * @returns Maximum total units loaded on truck
 */
const maximumUnits = (boxTypes: number[][], truckSize: number): number => {
  // Track total units loaded and maximum units per box
  let totalUnits: number = 0, maxUnits: number = -1

  // Find maximum units per box to size frequency array
  for (let boxIndex: number = 0; boxIndex < boxTypes.length; boxIndex++) {
    if (boxTypes[boxIndex][1] > maxUnits) maxUnits = boxTypes[boxIndex][1]
  }

  // Build frequency of box counts by units per box
  const unitFrequencies: number[] = new Array(maxUnits + 1).fill(0)

  // Accumulate box counts for each units per box value
  for (let boxIndex: number = 0; boxIndex < boxTypes.length; boxIndex++) unitFrequencies[boxTypes[boxIndex][1]] += boxTypes[boxIndex][0]

  // Take boxes greedily starting from highest unit value
  for (let units: number = maxUnits; units >= 1; units--) {
    // Stop when truck is full
    if (truckSize === 0) break

    // Take as many boxes of this unit value as fit
    const take: number = Math.min(unitFrequencies[units], truckSize)

    // Add units from taken boxes to total
    totalUnits += take * units
    // Reduce remaining truck capacity
    truckSize -= take
  }

  // Return the maximum total units loaded on truck
  return totalUnits
}
