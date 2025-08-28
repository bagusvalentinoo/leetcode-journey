/**
 * Problem: 1184. Distance Between Bus Stops
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 28 ms (Beats 100%)
 */

/**
 * Returns shortest distance between two bus stops
 *
 * @param {number[]} distance - Distances between stops
 * @param {number} start - Starting stop index
 * @param {number} destination - Destination stop index
 *
 * @returns {number} - Shortest distance
 */
const distanceBetweenBusStops = (distance, start, destination) => {
  // Initialize variables to store distances in both directions
  let clockwiseDistance = 0, // Distance when moving from start to destination in clockwise direction
    counterClockwiseDistance = 0 // Distance when moving in counter-clockwise direction

  // Ensure start is less than destination for easier calculation in clockwise direction
  if (start > destination) {
    // Temporarily store start index
    const temp = start

    start = destination // Swap start and destination
    destination = temp // Assign original start to destination
  }

  // Calculate clockwise distance by summing distances between start and destination
  for (let i = start; i < destination; i++) clockwiseDistance += distance[i]

  // Initialize indices for counter-clockwise calculation
  let currentIdx = start, // Tracks current index in counter-clockwise traversal
    tempIdx = start // Temporary index for decrementing

  // Loop to calculate counter-clockwise distance until reaching destination or exceeding clockwise distance
  while (true) {
    tempIdx-- // Move to previous stop

    // Wrap around if index goes below zero
    if (tempIdx >= 0) currentIdx = tempIdx
    else currentIdx = distance.length + tempIdx // Wrap to end of array

    // Add distance for current segment
    counterClockwiseDistance += distance[currentIdx]

    // Break if reached destination or counter-clockwise distance exceeds clockwise
    if (
      currentIdx === destination ||
      counterClockwiseDistance > clockwiseDistance
    )
      break
  }

  // Return the shorter distance between clockwise and counter-clockwise
  return counterClockwiseDistance > clockwiseDistance
    ? clockwiseDistance
    : counterClockwiseDistance
}
