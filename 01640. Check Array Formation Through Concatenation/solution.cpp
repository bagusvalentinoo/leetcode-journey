/**
 * Problem: 1640. Check Array Formation Through Concatenation
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool canFormArray(vector<int> &arr, vector<vector<int>> &pieces) {
    // Map first element of each piece to its index
    unordered_map<int, int> pieceMap;

    // Populate map using first value as key since all integers are distinct
    for (int i = 0; i < (int)pieces.size(); i++)
      pieceMap[pieces[i][0]] = i;

    // Track current position in arr
    int index = 0;

    // Walk through arr matching whole pieces
    while (index < (int)arr.size()) {
      // Look up the piece that must start at current position
      auto it = pieceMap.find(arr[index]);

      // No piece starts here so arr cannot be formed
      if (it == pieceMap.end())
        return false;

      // Get the matching piece
      vector<int> &piece = pieces[it->second];

      // Verify every element of the piece matches arr in order
      for (int value : piece) {
        // Mismatch means pieces cannot form arr
        if (value != arr[index])
          return false;

        // Advance to next position in arr
        index++;
      }
    }

    // All positions matched whole pieces
    return true;
  }
};
