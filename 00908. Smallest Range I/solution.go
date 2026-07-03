/**
 * Problem: 908. Smallest Range I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestRangeI(nums []int, k int) int {
    // Find maximum and minimum values in the array
    maxValue, minValue := nums[0], nums[0]

    // Iterate through the array to find the actual maximum and minimum values
    for _, num := range nums {
        // Update maximum value if current num is larger
        if num > maxValue {
            maxValue = num
        }
        // Update minimum value if current num is smaller
        if num < minValue {
            minValue = num
        }
    }
    
    // Calculate adjusted values after applying ±k operation
    adjustedMax, adjustedMin := maxValue - k, minValue + k

    // If the adjusted minimum is greater than or equal to the adjusted maximum, return 0
    if adjustedMin >= adjustedMax {
        return 0
    }

    // Return the difference between the adjusted maximum and minimum values
    return adjustedMax - adjustedMin
}
