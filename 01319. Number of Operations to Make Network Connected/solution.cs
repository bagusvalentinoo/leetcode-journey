/**
 * Problem: 1319. Number of Operations to Make Network Connected
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

public class Solution
{
  public int MakeConnected(int n, int[][] connections)
  {
    // Union-Find parent array, -1 means node is its own parent
    int[] parent = new int[n];

    // Initialize parent array
    for (int i = 0; i < n; i++)
      parent[i] = -1;

    // Initially, we need n-1 connections to connect all computers
    int remainingConnectionsNeeded = n - 1;
    // Count of redundant connections (connections that create cycles)
    int redundantConnections = 0;

    // Find function with path compression
    int Find(int node)
    {
      // If node is its own parent, return it
      if (parent[node] == -1)
        return node;

      // Path compression: make the node's parent the root
      parent[node] = Find(parent[node]);

      // Return the root
      return parent[node];
    }

    // Process each connection
    foreach (var connection in connections)
    {
      // Get the two nodes
      int nodeA = connection[0],
        nodeB = connection[1];

      // Find root of both nodes
      int rootA = Find(nodeA),
        rootB = Find(nodeB);

      // If nodes are in different components, union them
      if (rootA != rootB)
      {
        parent[rootB] = rootA;
        remainingConnectionsNeeded--;
      }
      // If nodes are already connected, this is a redundant connection
      else
        redundantConnections++;
    }

    // If we have enough redundant connections to connect remaining components
    return remainingConnectionsNeeded <= redundantConnections ? remainingConnectionsNeeded : -1;
  }
}
