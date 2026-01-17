/**
 * Problem: 2943. Maximize Area of Square Hole in Grid
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximizeSquareHoleArea(n int, m int, hBars []int, vBars []int) int {
    // Helper function to find longest consecutive sequence length + 1
    longestConsecutive := func(arr []int) int {
        // Sort array to detect consecutive sequences
        sort.Ints(arr)

        // Track best and current consecutive lengths
        best, current := 1, 1

        // Find longest consecutive sequence
        for i := 1; i < len(arr); i++ {
            // If current number is consecutive to previous
            if arr[i] == arr[i-1]+1 {
                current++
            } else {
                current = 1 // Reset if sequence breaks
            }

            // Update best length if current is longer
            if current > best {
                best = current
            }
        }

        // Return length + 1 (gap count = consecutive bars + 1)
        return best + 1
    }

    // Calculate longest consecutive sequences in both dimensions
    horizontalLength := longestConsecutive(hBars)
    verticalLength := longestConsecutive(vBars)

    // Square side is limited by smaller dimension
    maxSquareSide := horizontalLength
    if verticalLength < horizontalLength {
        maxSquareSide = verticalLength
    }

    // Return maximum square area
    return maxSquareSide * maxSquareSide
}
