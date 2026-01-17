/**
 * Problem: 2943. Maximize Area of Square Hole in Grid
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates maximum square area achievable by removing bars
 *
 * @param n - Number of horizontal gaps (unused)
 * @param m - Number of vertical gaps (unused)
 * @param hBars - Horizontal bars to remove
 * @param vBars - Vertical bars to remove
 *
 * @returns Maximum square area achievable
 */
const maximizeSquareHoleArea = (
    n: number,
    m: number,
    hBars: number[],
    vBars: number[]
): number => {
    // Helper function: finds longest consecutive sequence length in sorted array
    const longestConsecutive = (arr: number[]): number => {
        // Handle empty array case
        if (!arr.length) return 0

        // Sort array for consecutive number detection
        arr.sort((a, b) => a - b)

        let maxLength = 1  // Track maximum consecutive sequence length
        let currentLength = 1  // Track current consecutive sequence length

        // Traverse sorted array to find longest consecutive sequence
        for (let i = 1; i < arr.length; i++) {
            // Check if current number is consecutive to previous
            if (arr[i] === arr[i - 1] + 1) currentLength++
            else currentLength = 1  // Reset sequence if gap exists

            // Update maximum length if current sequence is longer
            maxLength = Math.max(maxLength, currentLength)
        }

        return maxLength
    }

    // Find longest consecutive bars in both dimensions
    const maxHorizontal = longestConsecutive(hBars)
    const maxVertical = longestConsecutive(vBars)

    // Calculate maximum square side (consecutive bars + 1)
    const maxSquareSide = Math.min(maxHorizontal, maxVertical) + 1

    // Return maximum square area
    return maxSquareSide * maxSquareSide
}
