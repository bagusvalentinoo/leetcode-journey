/**
 * Problem: 1370. Increasing Decreasing String
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
  string sortString(string s)
  {
    // Frequency array for 26 lowercase letters (a-z)
    vector<int> frequency(26, 0);

    // Count frequency of each character in the input string
    for (char character : s)
      frequency[character - 'a']++;

    // String to build the result
    string result = "";

    // Continue until all characters have been used
    while (result.length() < s.length())
    {
      // Forward pass: pick smallest available character (increasing
      // order)
      for (int i = 0; i < 26; i++)
      {
        // If this character still has remaining count
        if (frequency[i] > 0)
        {
          // Append character to result string
          result += (char)(i + 'a');
          // Decrease its frequency by 1
          frequency[i]--;
        }
      }

      // Backward pass: pick largest available character (decreasing
      // order)
      for (int i = 25; i >= 0; i--)
      {
        // If this character still has remaining count
        if (frequency[i] > 0)
        {
          // Append character to result string
          result += (char)(i + 'a');
          // Decrease its frequency by 1
          frequency[i]--;
        }
      }
    }

    // Return the final sorted string
    return result;
  }
};
