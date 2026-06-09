/**
 * Problem: 1408. String Matching in an Array
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
  vector<string> stringMatching(vector<string> &words)
  {
    // Vector to store strings that are substrings of another word
    vector<string> substringsFound;

    // Compare each word with every other word in the array
    for (int i = 0; i < words.size(); i++)
    {
      for (int j = 0; j < words.size(); j++)
      {
        // Skip comparing a word with itself
        if (i != j && words[j].find(words[i]) != string::npos)
        {
          // Current word is a substring of another word
          substringsFound.push_back(words[i]);

          // No need to check further for this word
          break;
        }
      }
    }

    // Return the vector of substrings found
    return substringsFound;
  }
};
