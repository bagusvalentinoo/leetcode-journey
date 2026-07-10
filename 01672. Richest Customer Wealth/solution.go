/**
 * Problem: 1672. Richest Customer Wealth
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximumWealth(accounts [][]int) int {
    // Initialize answer to track maximum wealth
    maxWealth := 0
    
    // Iterate through each customer
    for i := 0; i < len(accounts); i++ {
				// Calculate total wealth for the current customer
        totalWealth := 0

				// Iterate through each bank account of the current customer
        for _, money := range accounts[i] {
            totalWealth += money
        }
        
        // Update maximum wealth if current customer is richer
        if totalWealth > maxWealth {
            maxWealth = totalWealth
        }
    }
    
    // Return the maximum wealth found
    return maxWealth
}
