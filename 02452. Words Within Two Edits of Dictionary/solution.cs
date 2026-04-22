/**
 * Problem: 2452. Words Within Two Edits of Dictionary
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<string> TwoEditWords(string[] queries, string[] dictionary)
  {
    // Array to store matching queries
    List<string> matchingQueries = new List<string>();

    // Get length of each query (all strings have same length)
    int stringLength = queries[0].Length;

    // Iterate through each query
    for (int queryIndex = 0; queryIndex < queries.Length; queryIndex++)
    {
      // Compare with each word in dictionary
      for (int dictIndex = 0; dictIndex < dictionary.Length; dictIndex++)
      {
        // Counter for character differences (edits)
        int editCount = 0;

        // Compare characters at each position
        for (int charPosition = 0; charPosition < stringLength; charPosition++)
        {
          // Increment edit count if characters differ
          if (queries[queryIndex][charPosition] != dictionary[dictIndex][charPosition])
            editCount++;
          // Early exit if edits exceed 2
          if (editCount > 2)
            break;
        }

        // If edit count is within limit (<=2)
        if (editCount <= 2)
        {
          // Add query to result
          matchingQueries.Add(queries[queryIndex]);

          // Stop checking other dictionary words for this query
          break;
        }
      }
    }

    // Return array of matching queries
    return matchingQueries;
  }
}
