/**
 * Problem: 85. Maximal Rectangle
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Find the largest rectangle containing only 1's in a binary matrix
 *
 * @param {character[][]} matrix - Binary matrix with '0' and '1'
 *g
 * @returns {number} - Area of the largest rectangle
 */
const maximalRectangle = (matrix) => {
    // Handle empty matrix case
    if (matrix.length === 0) return 0

    const cols = matrix[0].length
    // Array to store histogram heights for current row
    const heights = new Array(cols).fill(0)
    let maxArea = 0

    // Process each row to build histogram
    for (let i = 0; i < matrix.length; i++) {
        // Update heights array for current row
        for (let j = 0; j < cols; j++) {
            // Increment height if cell is '1', reset to 0 if '0'
            heights[j] = matrix[i][j] === "1" ? heights[j] + 1 : 0
        }

        // Use monotonic stack to find largest rectangle in histogram
        const stack = []
        // Process all columns including one extra for boundary
        for (let k = 0; k <= cols; k++) {
            // Height for current column (0 for boundary column)
            const height = k === cols ? 0 : heights[k]

            // Pop from stack while current height is smaller than stack top
            while (stack.length && height < heights[stack[stack.length - 1]]) {
                // Get height of the rectangle
                const rectHeight = heights[stack.pop()]
                // Calculate width of the rectangle
                const width = stack.length ? k - stack[stack.length - 1] - 1 : k
                // Update maximum area
                maxArea = Math.max(maxArea, rectHeight * width)
            }

            // Push current column index to stack
            stack.push(k)
        }
    }

    return maxArea
}
