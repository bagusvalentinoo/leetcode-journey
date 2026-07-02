/**
 * Problem: 883. Projection Area of 3D Shapes
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func projectionArea(grid [][]int) int {
    // Initialize sums for top, front, and side projections
    topArea, frontArea, sideArea:= 0, 0, 0
    
    // Get grid size (n x n)
    size := len(grid)
    
    // Iterate through each cell in the grid
    for i := 0; i < size; i++ {
        // Track maximum heights for front and side projections
        maxFront, maxSide := 0, 0
        
        // Process each column in current row
        for j := 0; j < size; j++ {
            // Top projection: count non-zero cells
            if grid[i][j] > 0 {
                topArea++
            }
            // Front projection: maximum height in column j
            if grid[j][i] > maxFront {
                maxFront = grid[j][i]
            }
            // Side projection: maximum height in row i
            if grid[i][j] > maxSide {
                maxSide = grid[i][j]
            }
        }
        
        // Add column and row maximums to front and side areas
        frontArea += maxFront
        sideArea += maxSide
    }
    
    // Return total projection area (sum of all three projections)
    return topArea + frontArea + sideArea
}
