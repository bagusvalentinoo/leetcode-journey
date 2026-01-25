/**
 * Problem: 3507. Minimum Pair Removal to Sort Array I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumPairRemoval(nums []int) int {
    // Create copy of input array
    arr := append([]int{}, nums...)
    
    // Initialize operations counter
    ops := 0
    
    // Continue until array is sorted
    for !isSorted(arr) {
        // Initialize minimum sum
        minSum := int(1e9)
        
        // Initialize merge index
        idx := 0
        
        // Find pair with minimum sum
        for i := 0; i+1 < len(arr); i++ {
            // Check if current pair has smaller sum
            if arr[i]+arr[i+1] < minSum {
                // Update minimum sum
                minSum = arr[i] + arr[i+1]
                
                // Update merge index
                idx = i
            }
        }
        
        // Merge pair at found index
        arr[idx] = minSum
        
        // Remove second element of pair
        arr = append(arr[:idx+1], arr[idx+2:]...)
        
        // Increment operations counter
        ops++
    }
    
    // Return total operations performed
    return ops
}

func isSorted(arr []int) bool {
    // Check if array is non-decreasing
    for i := 1; i < len(arr); i++ {
        // Return false if violation found
        if arr[i] < arr[i-1] {
            return false
        }
    }
    
    // Return true if array is sorted
    return true
}
