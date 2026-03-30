/**
 * Problem: 2840. Check if Strings Can be Made Equal With Operations II
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  static bool checkStrings(string &s1, string &s2) {
    // Frequency array for even and odd indices: freq[parity][character]
    array<array<int, 26>, 2> frequency = {};

    // Get string length
    int n = s1.size();

    // Count character frequencies for each parity group
    for (int i = 0; i < n; i++) {
      // Determine if current index is odd
      bool isOdd = i & 1;

      // Increment count for s1 character at current parity
      frequency[isOdd][s1[i] - 'a']++;

      // Decrement count for s2 character at current parity
      frequency[isOdd][s2[i] - 'a']--;
    }

    // Check if all frequencies are zero (strings can be made equal)
    return frequency == array<array<int, 26>, 2>{};
  }
};

// Optimize I/O for faster execution
auto init = []() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);
  return 'c';
}();
