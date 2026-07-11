/**
 * Problem: 3898. Find the Degree of Each Vertex
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findDegrees(matrix [][]int) []int {
    // Initialize result slice with length equal to number of rows
    result := make([]int, len(matrix))
    
    // Iterate through each row in the matrix
    for i := range matrix {
        // Iterate through each element in the current row
        for j := range matrix[i] {
            // Add current element to the row sum
            result[i] += matrix[i][j]
        }
    }
    
    // Return slice containing sums of each row
    return result
}
