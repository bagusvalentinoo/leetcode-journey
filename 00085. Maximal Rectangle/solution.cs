/**
 * Problem: 85. Maximal Rectangle
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

public class Solution {
    public int MaximalRectangle(char[][] matrix) {
        // Get matrix dimensions
        int n = matrix.Length;
        int m = matrix[0].Length;
        
        // Heights array for histogram (with extra element for boundary)
        var heights = new int[m + 1];
        int maxArea = 0;
        
        // Process each row to build histogram
        for (int i = 0; i < n; i++) {
            // Update heights array for current row
            for (int j = 0; j < m; j++) {
                heights[j] = (matrix[i][j] == '1') ? heights[j] + 1 : 0;
            }
            // Calculate maximum rectangle in current histogram
            maxArea = Math.Max(maxArea, MaxRectangleInHistogram(heights));
        }
        
        return maxArea;
    }

    // Helper method to calculate maximum rectangle area in histogram
    public int MaxRectangleInHistogram(int[] heights) {
        // Use stackalloc for efficient stack allocation (Span<T>)
        Span<int> stack = stackalloc int[heights.Length + 1];
        int top = 0; // Stack pointer
        int maxArea = 0;
        
        // Process all bars including sentinel (-1 for last bar)
        for (int i = 0; i <= heights.Length; i++) {
            // Current height (use -1 as sentinel for last iteration)
            int currentHeight = (i == heights.Length) ? -1 : heights[i];
            
            // Pop from stack while current height is smaller than stack top
            while (top > 0 && currentHeight < heights[stack[top - 1]]) {
                // Get bar index from stack
                int mid = stack[--top];
                // Get left boundary index
                int left = (top == 0) ? -1 : stack[top - 1];
                // Calculate rectangle width
                int width = i - left - 1;
                // Update maximum area
                maxArea = Math.Max(maxArea, width * heights[mid]);
            }
            
            // Push current index to stack
            stack[top++] = i;
        }
        
        return maxArea;
    }
}
