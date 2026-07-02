/**
 * Problem: 883. Projection Area of 3D Shapes
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int projectionArea(vector<vector<int>> &grid)
  {
    // Initialize sums for top, front, and side projections
    int topArea = 0,
        frontArea = 0,
        sideArea = 0;

    // Get grid size (n x n)
    int size = grid.size();

    // Iterate through each cell in the grid
    for (int i = 0; i < size; i++)
    {
      // Track maximum heights for front and side projections
      int maxFront = 0,
          maxSide = 0;

      // Process each column in current row
      for (int j = 0; j < size; j++)
      {
        // Top projection: count non-zero cells
        if (grid[i][j] > 0)
          topArea++;

        // Front projection: maximum height in column j
        maxFront = max(maxFront, grid[j][i]);
        // Side projection: maximum height in row i
        maxSide = max(maxSide, grid[i][j]);
      }

      // Add column and row maximums to front and side areas
      frontArea += maxFront;
      sideArea += maxSide;
    }

    // Return total projection area (sum of all three projections)
    return topArea + frontArea + sideArea;
  }
};
