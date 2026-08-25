/**
 * Problem: 1337. The K Weakest Rows in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> kWeakestRows(vector<vector<int>> &mat, int k) {
    // Get matrix dimensions
    int rows = mat.size(), cols = mat[0].size();

    // Count soldiers in each row using binary search
    vector<int> soldierCounts(rows);

    for (int i = 0; i < rows; i++) {

      // Binary search boundaries: left at start, right at end
      int left = 0, right = cols;

      // Find first 0 (boundary between soldiers and civilians)
      while (left < right) {

        // Calculate mid index
        int mid = (left + right) >> 1;

        // If mid is 0, search left half
        if (mat[i][mid] == 0)
          right = mid;
        // If mid is 1, search right half
        else
          left = mid + 1;
      }

      // Store soldier count (position of first 0)
      soldierCounts[i] = left;
    }

    // Create index array [0, 1, 2, ..., rows-1]
    vector<int> indices(rows);

    // Populate indices with row numbers
    iota(indices.begin(), indices.end(), 0);

    // Sort by soldier count then by index for ties
    sort(indices.begin(), indices.end(), [&](int a, int b) {
      return soldierCounts[a] != soldierCounts[b]
                 ? soldierCounts[a] < soldierCounts[b]
                 : a < b;
    });

    // Resize to first k indices (weakest rows)
    indices.resize(k);

    // Return k weakest row indices
    return indices;
  }
};
