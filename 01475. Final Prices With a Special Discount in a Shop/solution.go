/**
 * Problem: 1475. Final Prices With a Special Discount in a Shop
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func finalPrices(prices []int) []int {
    // Flag to track if any discount is applicable
    hasDiscount := false
    
    // Check if there exists any pair where discount can be applied
    for i := 0; i < len(prices); i++ {
        // If current price is greater than or equal to next price
        if i+1 < len(prices) && prices[i] >= prices[i+1] {
            // Mark that discount is possible
            hasDiscount = true
            
            // Exit loop since we found at least one discount opportunity
            break
        }
    }
    
    // Only apply discounts if there's at least one applicable discount
    if hasDiscount {
        // Iterate through each item in the prices array
        for i := 0; i < len(prices); i++ {
            // Check all subsequent items for a smaller or equal price
            for j := i + 1; j < len(prices); j++ {
                // If we find a price that is less than or equal to current price
                if prices[j] <= prices[i] {
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
