/**
 * Problem: 1980. Find Unique Binary String
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string findDifferentBinaryString(vector<string> &nums) {
    // Get length of binary strings
    int length = nums.size();
    // Set to store seen numbers
    unordered_set<int> seenNumbers;

    // Add all numbers from nums to set
    for (const string &binary : nums)
      seenNumbers.insert(stoi(binary, nullptr, 2));

    // Check all possible numbers from 0 to 2^n - 1
    for (int i = 0; i < (1 << length); i++) {
      // If number not in set, it's our answer
      if (seenNumbers.find(i) == seenNumbers.end()) {
        // Convert to binary string
        string binary = bitset<16>(i).to_string();

        // Take only the last 'length' bits
        return binary.substr(16 - length, length);
      }
    }

    // If no answer found, return empty string
    return "";
  }
};
