/**
 * Problem: 1629. Slowest Key
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public char SlowestKey(int[] releaseTimes, string keysPressed)
  {
    // Initialize longest duration with first keypress duration
    int longestDuration = releaseTimes[0];

    // Initialize answer with first pressed key
    char answerKey = keysPressed[0];

    // Iterate through each subsequent keypress
    for (int i = 1; i < releaseTimes.Length; i++)
    {
      // Compute current keypress duration as difference of consecutive release times
      int duration = releaseTimes[i] - releaseTimes[i - 1];

      // Update answer if duration is longer, or equal with lexicographically larger key
      if (duration > longestDuration || (duration == longestDuration && keysPressed[i] > answerKey))
      {
        // Record the new longest duration
        longestDuration = duration;
        // Record the key holding the longest duration
        answerKey = keysPressed[i];
      }
    }

    // Return the key with the longest duration
    return answerKey;
  }
}
