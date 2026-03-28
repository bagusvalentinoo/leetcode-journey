/**
 * Problem: 2573. Find the String with LCP
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  static string findTheString(vector<vector<int>> &lcp) {
    // Get the length of the string from the LCP matrix
    const int n = lcp.size();

    // Initialize string with placeholder characters (ASCII value less than 'a')
    string s(n, 'a' - 1);

    // Counter for assigned letters (starts at -1 because we increment before
    // use)
    int letterId = -1;

    // First pass: assign characters to positions based on LCP values
    for (int i = 0; i < n; i++) {
      // Skip if current position already has a character assigned
      if (s[i] >= 'a')
        continue;
      // If we need more than 26 letters (a-z), it's impossible to form the
      // string
      if (++letterId >= 26)
        return "";

      // Assign same character to all positions j where lcp[i][j] > 0
      // This ensures positions with positive LCP have the same character
      for (int j = 0; j < n; j++) {
        if (lcp[i][j])
          s[j] = 'a' + letterId;
      }
    }

    // Second pass: verify that the constructed string matches the LCP matrix
    for (int i = 0; i < n; i++) {
      // Check diagonal: lcp[i][i] should be n - i (length of suffix starting at
      // i)
      if (lcp[i][i] != n - i)
        return "";

      // Check all pairs (i, j) where i > j
      for (int j = 0; j < i; j++) {
        // Get LCP value for pair (i, j)
        const int x = lcp[i][j];

        // Check symmetry: LCP matrix must be symmetric (lcp[i][j] == lcp[j][i])
        if (x != lcp[j][i])
          return "";

        // Initialize expected LCP value to 0 (for different characters)
        int expected = 0;

        // If characters at positions i and j are the same
        if (s[i] == s[j])
          // Expected LCP is 1 plus LCP of next positions
          // For positions at the end (i == n-1 or j == n-1), next positions
          // don't exist, so expected is 1 (since matching characters give at
          // least LCP of 1)
          expected = (i < n - 1) ? lcp[i + 1][j + 1] + 1 : 1;

        // Verify that the given LCP value matches the expected value
        if (x != expected)
          return "";
      }
    }

    // Return the reconstructed string
    return s;
  }
};
