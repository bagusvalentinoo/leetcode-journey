/**
 * Problem: 761. Special Binary String
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string MakeLargestSpecial(string s)
  {
    // Store processed special substrings
    List<string> result = new List<string>();

    // Track balance of 1s and 0s
    int balance = 0;

    // Track start position of current substring
    int last = 0;

    // Iterate through the string
    for (int i = 0; i < s.Length; i++)
    {
      // Increment balance for '1', decrement for '0'
      if (s[i] == '1')
        balance++;
      else
        balance--;

      // When balance reaches zero, we found a valid special substring
      if (balance == 0)
      {
        // Extract inner substring (excluding outer 1 and 0)
        string inner = s.Substring(last + 1, i - last - 1);

        // Recursively process inner substring
        inner = MakeLargestSpecial(inner);

        // Wrap with '1' at start and '0' at end
        result.Add("1" + inner + "0");

        // Move last to next position
        last = i + 1;
      }
    }

    // Sort in descending order for lexicographically largest result
    result.Sort((a, b) => string.Compare(b, a, StringComparison.Ordinal));

    // Concatenate and return
    return string.Join("", result);
  }
}
