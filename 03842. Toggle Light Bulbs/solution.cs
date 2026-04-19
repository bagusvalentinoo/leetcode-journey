/**
 * Problem: 3842. Toggle Light Bulbs
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> ToggleLightBulbs(IList<int> bulbs)
  {
    // Create a stack-allocated span for toggle states (1-100)
    Span<bool> toggleStates = stackalloc bool[101];

    // Toggle each bulb that appears in the input list
    for (int index = 0; index < bulbs.Count; index++)
    {
      // Get current bulb number
      int currentBulb = bulbs[index];

      // Flip the toggle state (on becomes off, off becomes on)
      toggleStates[currentBulb] = !toggleStates[currentBulb];
    }

    // Clear the original list to reuse it for results
    bulbs.Clear();

    // Collect bulbs that are currently on
    for (int i = 1; i < toggleStates.Length; i++)
      // If bulb is on, add it to the result list
      if (toggleStates[i])
        bulbs.Add(i);

    // Return the list of bulbs that are on
    return bulbs;
  }
}
