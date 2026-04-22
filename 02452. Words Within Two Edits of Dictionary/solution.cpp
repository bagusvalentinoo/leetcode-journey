/**
 * Problem: 2452. Words Within Two Edits of Dictionary
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<string> twoEditWords(vector<string> &queries,
                              vector<string> &dictionary) {
    // Vector to store matching queries
    vector<string> matchingQueries;

    // Get length of each query (all strings have same length)
    int stringLength = queries[0].length();

    // Iterate through each query
    for (int queryIndex = 0; queryIndex < queries.size(); queryIndex++) {
      // Compare with each word in dictionary
      for (int dictIndex = 0; dictIndex < dictionary.size(); dictIndex++) {
        // Counter for character differences (edits)
        int editCount = 0;

        // Compare characters at each position
        for (int charPosition = 0; charPosition < stringLength;
             charPosition++) {
          // Increment edit count if characters differ
          if (queries[queryIndex][charPosition] !=
              dictionary[dictIndex][charPosition])
            editCount++;
          // Early exit if edits exceed 2
          if (editCount > 2)
            break;
        }

        // If edit count is within limit (<=2)
        if (editCount <= 2) {
          // Add query to result
          matchingQueries.push_back(queries[queryIndex]);

          // Stop checking other dictionary words for this query
          break;
        }
      }
    }

    // Return vector of matching queries
    return matchingQueries;
  }
};
