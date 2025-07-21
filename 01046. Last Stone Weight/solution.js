/**
 * Problem: 1046. Last Stone Weight
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the weight of the last stone after smashing the two heaviest repeatedly
 *
 * @param {number[]} stones - Stone weights
 *
 * @returns {number} - Last stone weight or 0
 */
// Define a function to  compute the last remaining stone's weight
const lastStoneWeight = (stones) => {
  // Continue looping while there is more than one stone left
  while (stones.length > 1) {
    // Sort the stones array in descending order to get the heaviest stones first
    const sortedStones = stones.sort((a, b) => b - a)

    // Smash the two heaviest stones: subtract the second heaviest from the heaviest
    sortedStones[1] = sortedStones[0] - sortedStones[1]
    // Remove the heaviest stone from the array after smashing
    sortedStones.shift()
  }

  // Return the weight of the last remaining stone, or undefined if none left
  return stones[0]
}
