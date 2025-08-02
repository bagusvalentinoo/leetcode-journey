/**
 * Problem: 2561. Rearranging Fruits
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 54 ms (Beats 100%)
 */

/**
 * Calculate the minimum cost to make two baskets of fruits equal
 *
 * @param {number[]} basket1 - First basket of fruits
 * @param {number[]} basket2 - Second basket of fruits
 *
 * @returns {number} - Minimum cost to make the two baskets equal
 */
const minCost = (basket1, basket2) => {
  // Create a frequency map to track the difference in counts for each fruit
  const freq = new Map()

  // Increment count for each fruit in basket1
  for (const fruit of basket1) freq.set(fruit, (freq.get(fruit) || 0) + 1)
  // Decrement count for each fruit in basket2
  for (const fruit of basket2) freq.set(fruit, (freq.get(fruit) || 0) - 1)

  // Arrays to store fruits that need to be swapped from each basket
  const swapFromBasket1 = [],
    swapFromBasket2 = []

  // Track the minimum fruit value for cost calculation
  let minFruitValue = Infinity

  // Iterate over the frequency map to determine swap requirements
  for (const [fruit, diff] of freq.entries()) {
    // If the difference is odd, it's impossible to balance the baskets
    if (diff % 2 !== 0) return -1

    // Calculate the number of swaps needed for this fruit
    const swapCount = Math.abs(diff) / 2
    // Update the minimum fruit value
    minFruitValue = Math.min(minFruitValue, fruit)

    // If basket1 has excess fruits, add to swapFromBasket1
    if (diff > 0)
      for (let i = 0; i < swapCount; ++i) swapFromBasket1.push(fruit)
    // If basket2 has excess fruits, add to swapFromBasket2
    else if (diff < 0)
      for (let i = 0; i < swapCount; ++i) swapFromBasket2.push(fruit)
  }

  // If the number of swaps required from both baskets is not equal, return -1
  if (swapFromBasket1.length !== swapFromBasket2.length) return -1

  // Sort swapFromBasket1 in ascending order and swapFromBasket2 in descending order for optimal cost
  swapFromBasket1.sort((a, b) => a - b)
  swapFromBasket2.sort((a, b) => b - a)

  // Initialize result to accumulate the minimum cost
  let totalCost = 0

  // Calculate the minimum cost for each swap
  for (let i = 0; i < swapFromBasket1.length; ++i)
    totalCost += Math.min(
      2 * minFruitValue,
      Math.min(swapFromBasket1[i], swapFromBasket2[i])
    )

  // Return the total minimum cost
  return totalCost
}
