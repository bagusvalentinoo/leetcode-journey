/**
 * Problem: 3637. Trionic Array I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if array has trionic pattern: strictly increasing → strictly decreasing → strictly increasing
 *
 * @param nums - Input array of integers
 *
 * @returns True if array follows trionic pattern
 */
const isTrionic = (nums: number[]): boolean => {
    // Array must have at least 4 elements for trionic pattern
    if (nums.length < 4) return false
    
    // Get array length
    const arrayLength = nums.length
    
    // Initialize pointer
    let pointer = 0
    
    // First segment: strictly increasing
    while (pointer + 1 < arrayLength && nums[pointer] < nums[pointer + 1]) pointer++
    
    // Check if we had at least one increasing step
    if (pointer === 0) return false
    const decreasingStart = pointer
    
    // Second segment: strictly decreasing
    while (pointer + 1 < arrayLength && nums[pointer + 1] < nums[pointer]) pointer++
    
    // Check if we had at least one decreasing step
    if (pointer === decreasingStart) return false
    const increasingStart = pointer
    
    // Third segment: strictly increasing
    while (pointer + 1 < arrayLength && nums[pointer] < nums[pointer + 1]) pointer++
    
    // Check if we had at least one increasing step and reached end
    if (pointer === increasingStart) return false
    
    // Return true if we processed all elements
    return pointer === arrayLength - 1
}