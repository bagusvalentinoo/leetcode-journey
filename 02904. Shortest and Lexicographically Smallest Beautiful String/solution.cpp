/**
 * Problem: 2904. Shortest and Lexicographically Smallest Beautiful String
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string shortestBeautifulSubstring(string s, int k) {
    // Left and right window pointers, and count of '1's in current window
    int l = 0, r = 0, ones = 0;

    // Cache string length to avoid repeated calls
    int n = s.size();

    // Track the shortest length found so far
    int minlen = INT_MAX;

    // Store the best (shortest and lexicographically smallest) substring
    string ans = "";

    // Expand the window by moving the right pointer across the string
    while (r < n) {
      // Count '1's entering the window from the right
      if (s[r] == '1')
        ones++;

      // Window has exactly k ones: try to shrink from the left
      while (ones == k) {
        // Evaluate current window as a candidate answer
        if (ones == k) {
          // Current window length is equal to or shorter than the best found
          if (r - l + 1 <= minlen) {
            // Same length: pick lexicographically smaller substring
            if (r - l + 1 == minlen) {
              if (ans > s.substr(l, r - l + 1))
                ans = s.substr(l, r - l + 1);
            }
            // Shorter length: this window becomes the new best
            else
              ans = s.substr(l, r - l + 1);

            // Update the minimum length to current window size
            minlen = r - l + 1;
          }
        }

        // Remove the leftmost character from the window
        if (s[l] == '1')
          ones--;

        // Advance left pointer to shrink the window
        l++;
      }

      // Move right pointer to expand the window
      r++;
    }

    // Return the best beautiful substring found
    return ans;
  }
};
