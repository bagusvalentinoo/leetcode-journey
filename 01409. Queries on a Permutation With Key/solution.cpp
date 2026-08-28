/**
 * Problem: 1409. Queries on a Permutation With Key
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> processQueries(vector<int> &queries, int m) {
    // Initialize permutation with values 1 to m
    vector<int> permutation(m);

    // Populate permutation array with consecutive integers from 1 to m
    for (int i = 0; i < m; i++)
      permutation[i] = i + 1;

    // Store results for each query
    vector<int> answer;

    // Process each query
    for (int query : queries) {
      // Find current position of query element
      auto it = find(permutation.begin(), permutation.end(), query);
      int index = distance(permutation.begin(), it);

      // Record the index as result
      answer.push_back(index);

      // Remove query from its current position
      permutation.erase(it);
      // Move it to the front
      permutation.insert(permutation.begin(), query);
    }

    // Return the array containing positions of each queried element before
    // moving to front
    return answer;
  }
};
