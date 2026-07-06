/**
 * Problem: 1475. Final Prices With a Special Discount in a Shop
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Applies discount from next smaller or equal price
 *
 * @param prices - Item prices
 *
 * @returns Discounted prices
 */
const finalPrices = (prices: number[]): number[] => {
  // Flag to track if any discount is applicable
  let hasDiscount: boolean = false

  // Check if there exists any pair where discount can be applied
  for (let i: number = 0; i < prices.length; i++) {
    // If current price is greater than or equal to next price
    if (prices[i] >= prices[i + 1]) {
      // Mark that discount is possible
      hasDiscount = true

      // Exit loop since we found at least one discount opportunity
      break
    }
  }

  // Only apply discounts if there's at least one applicable discount
  if (hasDiscount) {
    // Iterate through each item in the prices array
    for (let i: number = 0; i < prices.length; i++) {
      // Check all subsequent items for a smaller or equal price
      for (let j: number = i + 1; j < prices.length; j++) {
        // If we find a price that is less than or equal to current price
        if (prices[j] <= prices[i]) {
          // Apply discount by subtracting the found price
          prices[i] = prices[i] - prices[j]

          // Exit inner loop once discount is applied
          break
        }
      }
    }
  }

  // Return the modified prices array with discounts applied
  return prices
}
