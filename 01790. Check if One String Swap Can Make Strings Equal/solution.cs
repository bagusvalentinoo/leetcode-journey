/**
 * Problem: 1790. Check if One String Swap Can Make Strings Equal
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool AreAlmostEqual(string s1, string s2)
  {
    // Store indices where the two strings differ
    List<int> diffs = new List<int>();

    // Compare each position and collect mismatches
    for (int i = 0; i < s1.Length; i++) if (s1[i] != s2[i]) diffs.Add(i);

    // Return true if strings are already equal
    if (diffs.Count == 0)
      return true;

    // Return false unless there are exactly two mismatches
    if (diffs.Count != 2)
      return false;

    // Store first and second mismatch positions
    int first = diffs[0], second = diffs[1];

    // Return true if swapping fixes both mismatches
    return s1[first] == s2[second] && s1[second] == s2[first];
  }
}
