/**
 * Problem: 1878. Get Biggest Three Rhombus Sums in a Grid
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

// Global arrays for prefix sums along diagonals (size 150x51, with OFFSET for
// negative indices)
unsigned diag[150][51], antid[150][51];
const int OFFSET = 50;

class Solution {
public:
  // Calculates sum of rhombus centered at (i,j) with radius d
  static inline int rhombusSum(int i, int j, int d, vector<vector<int>> &grid) {
    // Base case: d=0 means single cell
    if (d == 0)
      return grid[i][j];

    // Define rhombus vertices
    const int left = j - d, right = j + d, top = i - d, bottom = i + d;

    // Diagonal indices for prefix sum lookups
    const int diagIndex1 =
        top - j + OFFSET; // For top-left to bottom-right diagonal
    const int diagIndex2 = i - left + OFFSET; // For another diagonal

    // Sum top edge and left edge using diagonal prefix sums
    int sum = diag[diagIndex1][right + 1] - diag[diagIndex1][j];
    sum += diag[diagIndex2][j + 1] - diag[diagIndex2][left];

    // Anti-diagonal indices for prefix sum lookups
    const int antiIndex1 = top + j;    // For top-right to bottom-left diagonal
    const int antiIndex2 = bottom + j; // For another anti-diagonal

    // Sum bottom edge and right edge using anti-diagonal prefix sums
    sum += antid[antiIndex1][i] - antid[antiIndex1][top + 1];
    sum += antid[antiIndex2][bottom] - antid[antiIndex2][i + 1];

    return sum;
  }

  static vector<int> getBiggestThree(vector<vector<int>> &grid) {
    const int rows = grid.size(), cols = grid[0].size();

    // Clear global arrays
    memset(diag, 0, sizeof(diag));
    memset(antid, 0, sizeof(antid));

    // Build prefix sums along diagonals and anti-diagonals
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        const int diagIndex = i - j + OFFSET; // Index for main diagonal
        const int antiIndex = i + j;          // Index for anti-diagonal
        const int cellValue = grid[i][j];

        // Prefix sum for main diagonal
        diag[diagIndex][j + 1] = diag[diagIndex][j] + cellValue;
        // Prefix sum for anti-diagonal
        antid[antiIndex][i + 1] = antid[antiIndex][i] + cellValue;
      }
    }

    // Maximum rhombus radius possible
    int maxRadius = min(rows, cols) / 2;

    // Initialize top 3 sums with -1 (meaning not set)
    vector<int> topSums(3, -1);

    // Try all possible rhombus radii
    for (int radius = 0; radius <= maxRadius; radius++) {
      // Iterate through all possible centers that can fit rhombus of this
      // radius
      for (int centerRow = radius; centerRow < rows - radius; centerRow++) {
        for (int centerCol = radius; centerCol < cols - radius; centerCol++) {
          // Calculate rhombus sum for current center and radius
          const int rhombusTotal =
              rhombusSum(centerRow, centerCol, radius, grid);

          // Skip if this sum is already in our top 3
          if (rhombusTotal == topSums[0] || rhombusTotal == topSums[1] ||
              rhombusTotal == topSums[2])
            continue;

          // Update top 3 sums if current sum is larger
          if (rhombusTotal > topSums[0]) {
            topSums[2] = topSums[1];
            topSums[1] = exchange(topSums[0], rhombusTotal);
          } else if (rhombusTotal > topSums[1]) {
            topSums[2] = exchange(topSums[1], rhombusTotal);
          } else if (rhombusTotal > topSums[2]) {
            topSums[2] = rhombusTotal;
          }
        }
      }
    }

    // Remove trailing -1 values (unset positions)
    for (int i = 2; i >= 0; i--) {
      if (topSums[i] == -1)
        topSums.pop_back();
    }

    // Return the array containing the top distinct positive sums
    return topSums;
  }
};
