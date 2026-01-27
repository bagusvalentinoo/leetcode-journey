/**
 * Problem: 1200. Minimum Absolute Difference
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 16 ms (Beats 100%)
 */

/**
 * Find all pairs of distinct integers with the minimum absolute difference
 *
 * @param arr - Distinct integers
 *
 * @returns Pairs with minimum absolute difference
 */
const minimumAbsDifference = (arr: number[]): number[][] => {
    // Convert input array to Int32Array for performance and sort in ascending order
    const sorted = new Int32Array(arr).sort()
    
    // Initialize result array to store pairs with minimum absolute difference
    let res: number[][] = []
    
    // Initialize min to Infinity to track the minimum absolute difference found
    let min = Infinity
    
    // Iterate through the sorted array starting from the second element
    for (let i = 1; i < sorted.length; i++) {
        // Calculate the absolute difference between current and previous element
        const d = sorted[i] - sorted[i - 1]
        
        // If current difference is greater than min, skip to next iteration
        if (d > min) continue
        
        // If current difference is less than min, reset result array
        if (d < min) res = []
        
        // Add the current pair to the result array
        res.push([sorted[i - 1], sorted[i]])
        
        // Update min with the current difference
        min = d
    }
    
    // Return the array of pairs with minimum absolute difference
    return res
}
