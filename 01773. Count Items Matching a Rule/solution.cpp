/**
 * Problem: 1773. Count Items Matching a Rule
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countMatches(vector<vector<string>> &items, string ruleKey,
                   string ruleValue) {
    // Map rule key to column index (type = 0, color = 1, name = 2)
    int keyIndex = ruleKey == "type" ? 0 : ruleKey == "color" ? 1 : 2;

    // Counter for matching items
    int matchesCount = 0;

    // Iterate through each item in the array
    for (auto &item : items) {
      // Check if the ruled column equals the rule value
      if (item[keyIndex] == ruleValue)
        matchesCount++;
    }

    // Return the total number of matching items
    return matchesCount;
  }
};
