/**
 * Problem: 2904. Shortest and Lexicographically Smallest Beautiful String
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ShortestBeautifulSubstring(string s, int k)
  {
    // Cache string length to avoid repeated property access
    const int n = s.Length;

    // Left and right pointers defining the current sliding window
    int left = 0, right = 0;

    // Track the shortest length found so far, start with max possible
    int minLen = int.MaxValue;

    // Store the best (shortest and lexicographically smallest) substring
    string ans = "";

    // Count of '1's within the current window
    int count = 0;

    // Sliding window: expand right, shrink left when needed
    while (left <= right && right < n)
    {
      // Count '1's entering the window
      if (s[right] == '1') count++;
      // Expand window if we haven't exceeded k ones yet
      if (count < k) right++;

      // Shrink window from left if we have too many ones
      if (count > k)
      {
        // Keep shrinking until we drop back to exactly k ones
        while (count > k)
        {
          // Remove the leftmost '1' from the window count
          if (s[left] == '1') count--;

          // Advance left pointer to shrink the window
          left++;
        }
      }

      // Window has exactly k ones: evaluate candidate
      if (count == k)
      {
        // Skip leading zeros to get shortest substring
        while (count == k && left <= right && s[left] == '0')
          left++;

        // Compare current window with best answer found so far
        int len = right - left + 1;

        // Current window is shorter than the best found so far
        if (len < minLen)
        {
          // Update the minimum length to this shorter window
          minLen = len;
          // Update answer to this shorter beautiful substring
          ans = s.Substring(left, len);
        }
        // Same length: pick lexicographically smaller one
        else if (len == minLen)
        {
          // Extract current candidate for lexicographic comparison
          string curr = s.Substring(left, len);

          // Compare character by character to find which is smaller
          for (int m = 0; m < len; m++)
          {
            // Current candidate is lexicographically smaller: take it
            if (curr[m] < ans[m])
            {
              // Replace answer with the smaller candidate
              ans = curr;

              // No need to check remaining characters
              break;
            }
            // Current candidate is larger: discard it
            if (curr[m] > ans[m]) break;
          }
        }

        // Move right to continue searching
        right++;
      }
    }

    // Return the best beautiful substring found
    return ans.TrimStart('0');
  }
}
