/**
 * Problem: 871. Minimum Number of Refueling Stops
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%), Memory - 57.66 MB (50.00%)
 */

/**
 * Find maximum fuel capacity within reachable distance.
 *
 * @param {number} distance - Reachable distance
 * @param {number[][]} stations - Gas stations [position, fuel]
 *
 * @returns {number|null} - Maximum fuel capacity or null
 */
const getMax = (distance, stations) => {
  let index = null
  let capacity = 0

  // Find the station with the maximum fuel capacity within the reachable range
  for (let i = 0; i < stations.length; i++)
    if (distance >= stations[i][0])
      if (stations[i][1] > capacity) {
        // Check if the station is within the reachable range
        // Check if the station has a larger capacity
        index = i
        capacity = stations[i][1]
      }

  // If a valid station is found, remove it from the list and return its fuel capacity
  if (index !== null) {
    const temp = stations.splice(index, 1)[0]

    return temp[1]
  }

  return null
}

/**
 * Minimum refueling stops to reach target.
 *
 * @param {number} target - Distance to destination
 * @param {number} startFuel - Initial fuel
 * @param {number[][]} stations - Gas stations [position, fuel]
 *
 * @returns {number} - Minimum refueling stops or -1 if unreachable
 */
const minRefuelStops = (target, startFuel, stations) => {
  // If the car has enough fuel to reach the target directly
  if (startFuel >= target) return 0

  // If no gas stations are available and the car cannot reach the target
  if (startFuel < target && stations.length === 0) return -1

  let numberOfFueling = 0
  let currentFuel = startFuel
  let counter = stations.length

  // Iterate until we either reach the target or exhaust all stations
  while (counter >= 0 && currentFuel < target) {
    // Try to find the maximum fuel capacity within the reachable range
    if (currentFuel < target) {
      const foundCapacity = getMax(currentFuel, stations)

      // If a valid station is found, refuel
      if (foundCapacity !== null) {
        currentFuel += foundCapacity
        numberOfFueling++
      } else break // No more stations available
    }

    counter--
  }

  // Return the result based on whether the target is reachable
  return currentFuel >= target ? numberOfFueling : -1
}
