/**
 * Problem: 1805. Number of Different Integers in a String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int numDifferentIntegers(string word) {
    // Track normalized integers using hash set
    unordered_set<string> seen;

    // Accumulate digits of current number
    string current = "";

    // Process each character to split digit blocks
    for (char c : word) {
      // Append digit to current number
      if (isdigit(c))
        current += c;
      // Letter ends current number, normalize and store it
      else if (!current.empty()) {
        // Strip leading zeros keeping at least one digit
        int start = 0;
        while (start + 1 < (int)current.size() && current[start] == '0')
          start++;

        // Mark normalized number as seen
        seen.insert(current.substr(start));

        // Reset accumulator for next number
        current = "";
      }
    }

    // Handle trailing number at end of string
    if (!current.empty()) {
      // Strip leading zeros keeping at least one digit
      int start = 0;
      while (start + 1 < (int)current.size() && current[start] == '0')
        start++;

      // Mark normalized number as seen
      seen.insert(current.substr(start));
    }

    // Return the count of distinct integers
    return seen.size();
  }
};
