/**
 * Problem: 1967. Number of Strings That Appear as Substrings in Word
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
  int numOfStrings(vector<string> &patterns, string word)
  {
    // Counter for patterns found in word
    int matchCount = 0;

    // Check each pattern against the word
    for (const string &currentPattern : patterns)
    {
      // If pattern is found in word, increment counter
      if (word.find(currentPattern) != string::npos)
        matchCount++;
    }

    // Return the total number of patterns found in the word
    return matchCount;
  }
};
