/**
 * Problem: 1319. Number of Operations to Make Network Connected
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int makeConnected(int n, vector<vector<int>> &connections) {
    // If there aren't enough cables to connect all computers (need at least
    // n-1)
    if (connections.size() < n - 1)
      return -1;

    // Initialize parent array for Union-Find
    vector<int> parent(n);

    // Set each node as its own parent initially
    iota(parent.begin(), parent.end(), 0);

    // Find function with path compression
    function<int(int)> find = [&](int x) -> int {
      // If x is not the root, recursively find its parent
      if (parent[x] != x)
        parent[x] = find(parent[x]);

      // Return the root
      return parent[x];
    };

    // Track number of connected components and redundant cables
    int components = n, redundantCables = 0;

    // Process each connection
    for (const auto &conn : connections) {
      // Find roots of both endpoints
      int rootA = find(conn[0]), rootB = find(conn[1]);

      // If already connected, this cable is redundant
      if (rootA == rootB)
        redundantCables++;
      // Otherwise, union the two components
      else {
        parent[rootA] = rootB;
        components--;
      }
    }

    // Number of cables needed to connect all components
    int cablesNeeded = components - 1;

    // Check if we have enough redundant cables
    if (redundantCables >= cablesNeeded)
      return cablesNeeded;

    // Return -1 if we don't have enough redundant cables
    return -1;
  }
};
