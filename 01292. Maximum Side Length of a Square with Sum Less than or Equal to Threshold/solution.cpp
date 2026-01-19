/**
 * Problem: 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    // Finds maximum square side length where sum ≤ threshold
    int maxSideLength(vector<vector<int>>& mat, int threshold) {
        // Get matrix dimensions
        int m = mat.size(), n = mat[0].size();
        
        // Create prefix sum matrix with extra row/column
        vector<vector<int>> prefixSum(m + 1, vector<int>(n + 1, 0));
        
        // Build 2D prefix sum matrix
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // Calculate cumulative sum using inclusion-exclusion
                prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] -
                                  prefixSum[i - 1][j - 1] + mat[i - 1][j - 1];
            }
        }
        
        // Helper function to get sum of any submatrix in O(1)
        auto getSubmatrixSum = [&](int x1, int y1, int x2, int y2) {
            return prefixSum[x2][y2] - prefixSum[x1 - 1][y2] -
                   prefixSum[x2][y1 - 1] + prefixSum[x1 - 1][y1 - 1];
        };
        
        // Maximum possible square side limited by matrix dimensions
        int maxPossibleSide = min(m, n);
        
        // Track best square side found
        int bestSide = 0;
        
        // Try all possible starting positions
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // Try squares larger than current best
                for (int side = bestSide + 1; side <= maxPossibleSide; side++) {
                    // Check if square fits within matrix boundaries
                    int endRow = i + side - 1;
                    int endCol = j + side - 1;
                    
                    if (endRow > m || endCol > n) break;
                    
                    // Calculate sum of current square
                    int squareSum = getSubmatrixSum(i, j, endRow, endCol);
                    
                    // Update best side if sum ≤ threshold
                    if (squareSum <= threshold) {
                        bestSide = side;
                    } else {
                        break; // Larger squares will have larger sums
                    }
                }
            }
        }
        
        return bestSide;
    }
};
