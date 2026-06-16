/**
 * Problem: 3612. Process String with Special Operations I
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  string processStr(string s)
  {
    // Get length of input string (not used, can be removed)
    int n = s.size();

    // Initialize empty result string
    string resultString = "";

    // Process each character in the input string
    for (char currentChar : s)
    {
      // If character is a lowercase letter, append it to result
      if (currentChar >= 'a' && currentChar <= 'z')
        resultString.push_back(currentChar);
      // If character is '*', remove last character from result
      else if (currentChar == '*')
      {
        // Remove last character if result is not empty
        if (!resultString.empty())
          resultString.pop_back();
      }
      // If character is '#', duplicate the result (append to itself)
      else if (currentChar == '#')
        resultString += resultString;
      // If character is '%', reverse the result string
      else if (currentChar == '%')
        reverse(resultString.begin(), resultString.end());
    }

    // Return the final processed result string
    return resultString;
  }
};
