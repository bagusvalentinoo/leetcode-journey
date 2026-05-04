/**
 * Problem: 3545. Minimum Deletions for At Most K Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minDeletion(const string &s, int k) {
    // Array to store frequency of each letter (a-z)
    int charFrequency[26];

    // Initialize all frequencies to 0
    memset(charFrequency, 0, sizeof(charFrequency));

    // Count occurrences of each character in the string
    for (const char character : s)
      charFrequency[character - 'a']++;

    // Sort frequencies in ascending order
    sort(charFrequency, charFrequency + 26);

    // Accumulate total deletions needed
    int totalDeletions = 0;

    // Delete the smallest frequencies until only k distinct characters remain
    // Start from the smallest (index 0) and go up to index (25 - k)
    for (int index = 25 - k; index >= 0; index--)
      totalDeletions += charFrequency[index];

    // Return the minimum number of deletions required
    return totalDeletions;
  }
};
