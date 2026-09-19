/**
 * Problem: 1736. Latest Time by Replacing Hidden Digits
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string maximumTime(string time) {
    // Fill first hour digit with largest valid value
    if (time[0] == '?')
      time[0] = time[1] == '?' || time[1] <= '3' ? '2' : '1';
    // Fill second hour digit with largest value allowed by first digit
    if (time[1] == '?')
      time[1] = time[0] == '2' ? '3' : '9';
    // Fill tens of minutes with largest valid value
    if (time[3] == '?')
      time[3] = '5';
    // Fill ones of minutes with largest valid value
    if (time[4] == '?')
      time[4] = '9';

    // Return the latest valid time string
    return time;
  }
};
