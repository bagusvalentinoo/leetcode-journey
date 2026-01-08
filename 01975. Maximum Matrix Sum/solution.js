/**
 * Problem: 1975. Maximum Matrix Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Calculate the maximum possible sum after flipping any number of signs
 *
 * @param {number[][]} matrix - 2D array of integers
 *
 * @returns {number} - Maximum possible sum after optimal flips
 */
const maxMatrixSum = (matrix) => {
    // Initialize total sum of absolute values
    let absoluteSum = 0
    // Count of negative numbers in the matrix
    let negativeCount = 0
    // Track minimum absolute value for optimal flip decision
    let minAbsolute = Infinity

    // Iterate through all elements in the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            const value = matrix[i][j]
            // Add absolute value to total sum
            absoluteSum += Math.abs(value)
            // Count negative numbers
            if (value < 0) negativeCount++
            // Update minimum absolute value
            minAbsolute = Math.min(minAbsolute, Math.abs(value))
        }
    }

    // If negative count is odd, subtract twice the minimum absolute value
    // (flip one number to negative to make total negative count even)
    if (negativeCount % 2 === 1) {
        absoluteSum -= 2 * minAbsolute
    }

    return absoluteSum
}
