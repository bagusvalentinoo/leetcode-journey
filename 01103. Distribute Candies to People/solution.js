/**
 * Problem: 1103. Distribute Candies to People
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Distributes candies among people in order
 *
 * @param {number} candies Total candies
 * @param {number} num_people Number of people
 *
 * @returns {number[]} - Candies per person
 */
const distributeCandies = (candies, num_people) => {
  // Initialize an array to store the candies distributed to each person, filled with 0s
  const result = new Array(num_people).fill(0)

  // Variable to track the number of candies to give in the current turn, starting from 1
  let give = 1
  // Variable to track the current turn (used for indexing people)
  let i = 0

  // Loop until all candies are distributed
  while (candies > 0) {
    // Determine the number of candies to give this turn (cannot exceed remaining candies)
    const current = Math.min(give, candies)

    // Add the candies to the current person's total (using modulo for cyclic distribution)
    result[i % num_people] += current
    // Subtract the given candies from the total remaining
    candies -= current
    // Increment the number of candies to give in the next turn
    give++
    // Move to the next turn/person
    i++
  }

  // Return the final distribution of candies among people
  return result
}
