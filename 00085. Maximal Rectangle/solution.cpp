/**
 * Problem: 85. Maximal Rectangle
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    // Helper function to find largest rectangle in histogram
    int largestRectangleInHistogram(vector<int>& heights) {
        int maxArea = 0;
        stack<int> st; // Stack stores indices of histogram bars
        
        int n = heights.size();
        
        // Process all bars
        for (int i = 0; i < n; i++) {
            // Pop from stack while current height is smaller than stack top
            while (!st.empty() && heights[st.top()] > heights[i]) {
                int currentIndex = st.top(); // Index of bar to process
                st.pop();
                
                int nextSmaller = i; // Right boundary (next smaller element)
                int prevSmaller = st.empty() ? -1 : st.top(); // Left boundary
                
                // Calculate rectangle area: height * width
                int width = nextSmaller - prevSmaller - 1;
                maxArea = max(maxArea, heights[currentIndex] * width);
            }
            st.push(i);
        }
        
        // Process remaining bars in stack (with no smaller element to the right)
        while (!st.empty()) {
            int currentIndex = st.top();
            st.pop();
            
            int nextSmaller = n; // Right boundary (end of array)
            int prevSmaller = st.empty() ? -1 : st.top(); // Left boundary
            
            // Calculate rectangle area
            int width = nextSmaller - prevSmaller - 1;
            maxArea = max(maxArea, heights[currentIndex] * width);
        }
        
        return maxArea;
    }
    
    int maximalRectangle(vector<vector<char>>& matrix) {
        // Handle empty matrix
        if (matrix.empty()) return 0;
        
        int n = matrix.size(); // Number of rows
        int m = matrix[0].size(); // Number of columns
        
        // Prefix sum array for histogram heights
        vector<vector<int>> prefixSum(n, vector<int>(m, 0));
        
        // Calculate histogram heights for each column
        for (int j = 0; j < m; j++) {
            int currentHeight = 0;
            for (int i = 0; i < n; i++) {
                // Increment height if '1', reset to 0 if '0'
                if (matrix[i][j] == '1') {
                    currentHeight += 1;
                } else {
                    currentHeight = 0;
                }
                prefixSum[i][j] = currentHeight;
            }
        }
        
        // Find maximum rectangle across all histograms
        int maxArea = 0;
        for (int i = 0; i < n; i++) {
            maxArea = max(maxArea, largestRectangleInHistogram(prefixSum[i]));
        }
        
        return maxArea;
    }
};
