/**
 * Problem: 1310. XOR Queries of a Subarray
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> xorQueries(vector<int> &arr, vector<vector<int>> &queries) {
    // Get array length
    int arrayLength = arr.size();

    // Build prefix XOR array with extra element at start
    vector<int> prefixXors(arrayLength + 1, 0);

    // Compute prefix XOR where prefixXors[i] = XOR of arr[0..i-1]
    for (int i = 0; i < arrayLength; i++)
      prefixXors[i + 1] = prefixXors[i] ^ arr[i];

    // Process each query
    vector<int> results;

    // Reserve space for results
    results.reserve(queries.size());

    // Process each query
    for (const auto &query : queries) {
      // Get left and right from query
      int left = query[0], right = query[1];

      // XOR from left to right = prefix[right+1] ^ prefix[left]
      results.push_back(prefixXors[right + 1] ^ prefixXors[left]);
    }

    // Return results
    return results;
  }
};
