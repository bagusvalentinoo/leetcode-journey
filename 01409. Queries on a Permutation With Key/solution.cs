/**
 * Problem: 1409. Queries on a Permutation With Key
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] ProcessQueries(int[] queries, int m)
  {
    // Initialize permutation with values 1 to m
    List<int> permutation = new List<int>();

    // Populate permutation array with consecutive integers from 1 to m
    for (int i = 1; i <= m; i++) permutation.Add(i);

    // Store results for each query
    int[] answer = new int[queries.Length];

    // Process each query
    for (int i = 0; i < queries.Length; i++)
    {
      // Find current position of query element
      int index = permutation.IndexOf(queries[i]);

      // Record the index as result
      answer[i] = index;

      // Remove query from its current position
      permutation.RemoveAt(index);
      // Move it to the front
      permutation.Insert(0, queries[i]);
    }

    // Return the array containing positions of each queried element before moving to front
    return answer;
  }
}
