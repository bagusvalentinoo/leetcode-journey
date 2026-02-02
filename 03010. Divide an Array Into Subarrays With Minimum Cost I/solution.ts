/**
 * Problem: 3010. Divide an Array Into Subarrays With Minimum Cost I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum cost to make array non-decreasing by changing smallest elements
 *
 * @param nums - Input array of integers
 *
 * @returns Minimum cost to make array non-decreasing
 */
const minimumCost = (nums: number[]): number => {
    // Get array length
    const arrayLength = nums.length
    
    // Initialize answer with maximum possible value
    let minCost = Infinity
    
    // Try all pairs of elements (excluding first element)
    for (let i = 1; i < arrayLength - 1; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            // Calculate cost for current pair
            minCost = Math.min(minCost, nums[0] + nums[i] + nums[j])
        }
    }
    
    // Return minimum cost found
    return minCost
}
