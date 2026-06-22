/**
 * Problem: 1189. Maximum Number of Balloons
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int maxNumberOfBalloons(string text)
  {
    // Create a hash map to store frequency of each character
    unordered_map<char, int> charFrequency;

    // Count occurrences of each character in the input string
    for (char character : text)
      charFrequency[character]++;

    // Calculate maximum number of "balloon" words that can be formed
    // 'b', 'a', 'n' appear once, 'l' and 'o' appear twice in "balloon"
    return min({charFrequency['b'], charFrequency['a'],
                charFrequency['l'] / 2, charFrequency['o'] / 2,
                charFrequency['n']});
  }
};
