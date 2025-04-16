/**
 * Problem: 914. X of a Kind in a Deck of Cards
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if the deck can be partitioned into groups with the same integer
 *
 * @param {number[]} deck - The deck of cards
 *
 * @returns {boolean} - If all card groups have the same size > 1
 */
const hasGroupsSizeX = (deck) => {
  const m = {} // Map of card counts

  // Count the frequency of each card
  for (let i = 0; i < deck.length; i++) m[deck[i]] = (m[deck[i]] ?? 0) + 1

  // Helper function to compute the GCD of two numbers
  const gcd = (a, b) => {
    // Base case: if b is 0, return a
    if (b === 0) return a

    // Recursively compute the GCD
    return gcd(b, a % b)
  }

  // Helper function to compute the GCD of an array of numbers
  const gcdOfArray = (arr) => {
    // If the array is empty, return 0
    if (arr.length === 0) return 0

    // Compute the GCD of the array
    return arr.reduce((acc, num) => gcd(acc, num))
  }

  // Return true if the GCD of the array is greater than 1
  return gcdOfArray(Object.values(m)) > 1
}
