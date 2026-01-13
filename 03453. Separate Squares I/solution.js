/**
 * Problem: 3453. Separate Squares I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 125 ms (Beats 100%)
 */

/**
 * Calculate area difference above and below a dividing line
 *
 * @param {number} line - The y-coordinate of the dividing line
 * @param {number[][]} squares - Array of squares [x, y, sideLength]
 *
 * @returns {number} - Difference between area above and below the line
 */
const calculateAreaDifference = (line, squares) => {
    let areaAbove = 0
    let areaBelow = 0
    const n = squares.length

    // Calculate areas for each square
    for (let i = 0; i < n; i++) {
        const x = squares[i][0]
        const y = squares[i][1]
        const side = squares[i][2]
        const totalArea = side * side

        // Square is completely above the line
        if (line <= y) {
            areaAbove += totalArea
        }
        // Square is completely below the line
        else if (line >= y + side) {
            areaBelow += totalArea
        }
        // Square is intersected by the line
        else {
            const aboveHeight = (y + side) - line
            const belowHeight = line - y
            areaAbove += side * aboveHeight
            areaBelow += side * belowHeight
        }
    }

    return areaAbove - areaBelow
}

/**
 * Find optimal dividing line using binary search
 *
 * @param {number[][]} squares - Array of squares [x, y, sideLength]
 *
 * @returns {number} - Y-coordinate of dividing line
 */
const separateSquares = (squares) => {
    // Binary search range (0 to 2 billion)
    let low = 0
    let high = 2e9

    // Perform 60 iterations for precision
    for (let i = 0; i < 60; i++) {
        const mid = (low + high) / 2.0
        const diff = calculateAreaDifference(mid, squares)

        // Adjust search range based on area difference
        if (diff > 0) low = mid
        else high = mid
    }

    return high
}
