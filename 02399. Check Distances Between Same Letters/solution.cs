/**
 * Problem: 2399. Check Distances Between Same Letters
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CheckDistances(string s, int[] distance)
  {
    // Iterate over each possible letter by its alphabet index
    for (var letterIndex = 0; letterIndex < distance.Length; letterIndex++)
    {
      // Read the expected gap for the current letter
      var expectedDistance = distance[letterIndex];
      // Convert the alphabet index into its lowercase character
      var letter = (char)(letterIndex + 'a');

      // Fail when the letter exists and its gap does not match the expected distance
      if (s.Contains(letter) && s.LastIndexOf(letter) - s.IndexOf(letter) - 1 != expectedDistance)
        return false;
    }

    // All letters are spaced correctly
    return true;
  }
}
