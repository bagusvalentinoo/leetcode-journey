/**
 * Problem: 3386. Button with Longest Push Time
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int ButtonWithLongestTime(int[][] events)
  {
    // Initialize variables to store button and duration for the longest press
    int longestButton = events[0][0],
      longestDuration = events[0][1];

    // Iterate through each event starting from the second one
    for (int eventIndex = 1; eventIndex < events.Length; eventIndex++)
    {
      // Get current event
      int[] currentEvent = events[eventIndex];
      // Calculate duration of current press (time difference from previous event)
      int pressDuration = currentEvent[1] - events[eventIndex - 1][1];

      // If duration is greater than current maximum, update
      if (pressDuration > longestDuration)
      {
        longestButton = currentEvent[0];
        longestDuration = pressDuration;
      }
      // If duration equals current maximum and button number is smaller, update
      else if (pressDuration == longestDuration && currentEvent[0] < longestButton)
        longestButton = currentEvent[0];
    }

    // Return the button number with the longest press time
    return longestButton;
  }
}
