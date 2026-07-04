/**
 * Problem: 1464. Maximum Product of Two Elements in an Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxProduct(nums []int) int {
    // Initialize two largest values with minimum integer value
    largest := int(^uint(0) >> 1) // Max int
    largest = -largest - 1        // Min int
    secondLargest := largest
    
    // Iterate through each number in the array
    for _, currentNumber := range nums {
        // If current number is greater than or equal to largest
        if currentNumber >= largest {
            // Shift largest to second largest
            secondLargest = largest
            // Update largest with current number
            largest = currentNumber
        } else if currentNumber > secondLargest {
            // If current number is between largest and second largest
            
            // Update second largest
            secondLargest = currentNumber
        }
    }
    
    // Return product of (largest - 1) and (secondLargest - 1)
    return (largest - 1) * (secondLargest - 1)
}
