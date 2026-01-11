/**
 * Problem: 85. Maximal Rectangle
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximalRectangle(matrix [][]byte) int {
    // Handle empty matrix
    if len(matrix) == 0 || len(matrix[0]) == 0 {
        return 0
    }
    
    rows := len(matrix)
    cols := len(matrix[0])
    
    // Array to store histogram heights for current row
    heights := make([]int, cols)
    maxArea := 0
    
    // Process each row to build histogram
    for i := 0; i < rows; i++ {
        // Update heights array for current row
        for j := 0; j < cols; j++ {
            if matrix[i][j] == '1' {
                heights[j]++ // Increment height
            } else {
                heights[j] = 0 // Reset height
            }
        }
        
        // Calculate maximum rectangle in current histogram
        area := largestRectangleInHistogram(heights)
        if area > maxArea {
            maxArea = area
        }
    }
    
    return maxArea
}

// Calculate largest rectangle area in histogram
func largestRectangleInHistogram(heights []int) int {
    stack := []int{} // Stack stores indices
    maxArea := 0
    
    // Process all bars
    for i := 0; i < len(heights); i++ {
        // Pop from stack while current height is smaller than stack top
        for len(stack) > 0 && heights[i] < heights[stack[len(stack)-1]] {
            // Get height of rectangle
            height := heights[stack[len(stack)-1]]
            stack = stack[:len(stack)-1]
            
            // Calculate width of rectangle
            width := i
            if len(stack) > 0 {
                width = i - stack[len(stack)-1] - 1
            }
            
            // Update maximum area
            area := height * width
            if area > maxArea {
                maxArea = area
            }
        }
        // Push current index to stack
        stack = append(stack, i)
    }
    
    // Process remaining bars in stack
    for len(stack) > 0 {
        // Get height of rectangle
        height := heights[stack[len(stack)-1]]
        stack = stack[:len(stack)-1]
        
        // Calculate width of rectangle
        width := len(heights)
        if len(stack) > 0 {
            width = len(heights) - stack[len(stack)-1] - 1
        }
        
        // Update maximum area
        area := height * width
        if area > maxArea {
            maxArea = area
        }
    }
    
    return maxArea
}
