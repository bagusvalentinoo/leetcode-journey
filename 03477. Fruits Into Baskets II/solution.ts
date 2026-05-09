/**
 * Problem: 3477. Fruits Into Baskets II
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of fruits that cannot be placed in any basket
 *
 * @param fruits - Array of fruit sizes
 * @param baskets - Array of basket sizes
 *
 * @returns Number of unplaced fruits
 */
const numOfUnplacedFruits = (fruits: number[], baskets: number[]): number => {
  // Initialize a counter for unplaced fruits
  let unplaced: number = 0

  // Iterate over each fruit in the fruits array
  for (let i: number = 0; i < fruits.length; i++) {
    // Flag to check if the current fruit is placed in any basket
    let isPlaced: boolean = false

    // Iterate over each basket to try to place the current fruit
    for (let j: number = 0; j < baskets.length; j++) {
      // Check if the current basket can hold the current fruit
      if (fruits[i] <= baskets[j]) {
        // Mark the basket as used by setting its size to -1
        baskets[j] = -1
        // Set the flag to true since the fruit is placed
        isPlaced = true

        // Exit the basket loop since the fruit is placed
        break
      }
    }

    // If the fruit was not placed in any basket, increment the unplaced counter
    if (!isPlaced) unplaced++
  }

  // Return the total number of unplaced fruits
  return unplaced
}
