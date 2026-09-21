/**
 * Problem: 1773. Count Items Matching a Rule
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountMatches(IList<IList<string>> items, string ruleKey, string ruleValue)
  {
    // Map rule key to column index (type = 0, color = 1, name = 2)
    int keyIndex = ruleKey switch
    {
      "type" => 0,
      "color" => 1,
      "name" => 2,
      _ => 2,
    };

    // Count and return items where the ruled column equals the rule value
    return items.Count(item => item[keyIndex] == ruleValue);
  }
}
