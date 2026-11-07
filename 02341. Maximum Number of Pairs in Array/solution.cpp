/**
 * Problem: 2341. Maximum Number of Pairs in Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> numberOfPairs(vector<int> &nums) {
    // Track values waiting to be matched with an equal value
    unordered_set<int> unmatched;

    // Count each completed pair
    int pairs = 0;

    // Match each number with an earlier unmatched equal number when possible
    for (int number : nums) {
      if (unmatched.erase(number)) pairs++;
      else unmatched.insert(number);
    }

    // Return the completed pairs and remaining unmatched integers
    return {pairs, static_cast<int>(unmatched.size())};
  }
};
