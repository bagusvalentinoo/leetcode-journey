/**
 * Problem: 1094. Car Pooling
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if trips fit within car capacity
 *
 * @param {number[][]} trips - Each trip as [passengers, from, to]
 * @param {number} capacity - Car's max capacity
 *
 * @returns {boolean} - True if possible, else false
 */
const carPooling = (trips, capacity) => {
  // Sort trips by start location for processing pickups
  const sortedByStart = [...trips].sort((a, b) => a[1] - b[1])
  // Sort trips by end location for processing drop-offs
  const sortedByEnd = [...trips].sort((a, b) => a[2] - b[2])

  // Track the current number of passengers in the car
  let currentPassengerCount = 0

  // Use two pointers to process pickups and drop-offs
  for (
    let pickupIdx = 0, dropoffIdx = 0;
    pickupIdx < trips.length;
    pickupIdx++
  ) {
    // Drop off passengers whose trip has ended before the current pickup
    while (sortedByStart[pickupIdx][1] >= sortedByEnd[dropoffIdx][2]) {
      currentPassengerCount -= sortedByEnd[dropoffIdx][0] // Remove passengers
      dropoffIdx++ // Move to next drop-off
    }

    // Pick up passengers for the current trip
    currentPassengerCount += sortedByStart[pickupIdx][0]

    // If capacity exceeded, return false
    if (currentPassengerCount > capacity) return false
  }

  // All trips processed without exceeding capacity
  return true
}
