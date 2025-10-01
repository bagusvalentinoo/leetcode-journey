/**
 * Problem: 1518. Water Bottles
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates total bottles drunk given initial bottles and exchange rate
 *
 * @param {number} numBottles - Initial number of bottles
 * @param {number} numExchange - Bottles needed for one exchange
 *
 * @returns {number} - Total bottles drunk
 */
const numWaterBottles = (numBottles, numExchange) => {
  // Initialize total bottles drunk counter to zero
  let totalDrunkBottles = 0

  // Add initial bottles to total drunk count
  totalDrunkBottles += numBottles

  // Continue exchanging bottles while enough bottles are available
  while (numBottles >= numExchange) {
    // Calculate remaining bottles after exchange
    const remainingBottles = numBottles % numExchange
    // Calculate number of new bottles obtained from exchange
    const exchangedBottles = Math.floor(numBottles / numExchange)

    // Update current bottles count with exchanged and remaining bottles
    numBottles = exchangedBottles + remainingBottles
    // Add exchanged bottles to total drunk count
    totalDrunkBottles += exchangedBottles
  }

  // Return the total number of bottles drunk
  return totalDrunkBottles
}
