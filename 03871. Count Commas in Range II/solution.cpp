/**
 * Problem: 3871. Count Commas in Range II
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  long long countCommas(long long n) {
    // Store total commas accumulated across all thresholds
    long long totalCommas = 0;

    // Walk each comma threshold (1000, 1000000, ...) while it stays within
    // range
    for (long long threshold = 1000; threshold <= n; threshold *= 1000)
      // Every number from threshold to n gains one comma at this threshold
      totalCommas += n - threshold + 1;

    // Return the total commas counted across all thresholds
    return totalCommas;
  }
};
