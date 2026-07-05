/**
 * Problem: 1480. Running Sum of 1d Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func runningSum(nums []int) []int {
    // Initialize output slice with same length as input
    runningSumArray := make([]int, len(nums))
    
    // First element remains unchanged
    runningSumArray[0] = nums[0]
    
    // Calculate running sum for remaining elements
    for index := 1; index < len(nums); index++ {
        // Add current element to previous running sum
        runningSumArray[index] = runningSumArray[index-1] + nums[index]
    }
    
    // Return the running sum slice
    return runningSumArray
}
