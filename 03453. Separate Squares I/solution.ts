/**
 * Problem: 3453. Separate Squares I
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 321 ms (Beats 100%)
 */

/**
 * Find dividing line that splits total area into two equal parts
 *
 * @param squares - Array of squares [x, y, sideLength]
 *
 * @returns - Y-coordinate of dividing line
 */
const separateSquares = (squares: number[][]): number => {
    let maxY = 0
    let totalArea = 0

    // Calculate total area and maximum y-coordinate
    for (const [x, y, side] of squares) {
        totalArea += side * side
        maxY = Math.max(maxY, y + side)
    }

    // Helper function to check if area below limit is at least half of total
    const checkAreaBelowLimit = (limitY: number): boolean => {
        let areaBelow = 0

        for (const [x, y, side] of squares) {
            // If square intersects or is below the limit line
            if (y < limitY) {
                // Calculate area of square portion below the limit
                const heightBelow = Math.min(limitY - y, side)
                areaBelow += side * heightBelow
            }
        }

        return areaBelow >= totalArea / 2
    }

    // Binary search for optimal dividing line
    let low = 0
    let high = maxY
    const epsilon = 1e-5

    while (Math.abs(high - low) > epsilon) {
        const mid = (high + low) / 2

        if (checkAreaBelowLimit(mid)) high = mid
        else low = mid
    }

    return high
}
