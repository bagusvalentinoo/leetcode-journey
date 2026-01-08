/**
 * Problem: 1975. Maximum Matrix Sum
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculate the maximum possible sum after flipping any number of signs
 *
 * @param matrix - 2D array of integers
 *
 * @returns - Maximum possible sum after optimal flips
 */
const maxMatrixSum = (matrix: number[][]): number => {
     // Sum of absolute values of all elements
    let totalSum = 0
    // Minimum absolute value in the matrix
    let minAbs = Infinity
    // Count of negative numbers
    let negativeCount = 0

    // Iterate through all elements in the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const val = matrix[i][j]
            
            // Count negative numbers
            if (val < 0) negativeCount++

            // Add absolute value to total sum
            totalSum += Math.abs(val)
            // Update minimum absolute value
            minAbs = Math.min(minAbs, Math.abs(val))
        }
    }

    // If even number of negatives, we can make all values positive
    if (negativeCount % 2 === 0) return totalSum

    // If odd number of negatives, subtract twice the minimum absolute value
    // (flip the smallest absolute value to negative to minimize loss)
    return totalSum - 2 * minAbs
}
