/**
 * Problem: 3010. Divide an Array Into Subarrays With Minimum Cost I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumCost(nums []int) int {
    // Get array length
    arrayLength := len(nums)
    
    // Initialize answer with maximum possible value
    minCost := int(^uint(0) >> 1) // Maximum int value
    
    // Try all pairs of elements (excluding first element)
    for i := 1; i < arrayLength-1; i++ {
        for j := i + 1; j < arrayLength; j++ {
            // Calculate cost for current pair
            currentCost := nums[0] + nums[i] + nums[j]
            
            if currentCost < minCost {
                minCost = currentCost
            }
        }
    }
    
    // Return minimum cost found
    return minCost
}
