/**
 * Problem: 3633. Earliest Finish Time for Land and Water Rides I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  private int Solve(int[] firstStartTimes, int[] firstDurations,
                    int[] secondStartTimes, int[] secondDurations)
  {
    // Find the earliest possible finish time for the first operation
    int firstFinishTime = int.MaxValue;

    // Iterate through all options for the first operation
    for (int i = 0; i < firstStartTimes.Length; i++)
      firstFinishTime = Math.Min(firstFinishTime, firstStartTimes[i] + firstDurations[i]);

    // Calculate the earliest finish time for the second operation
    int totalFinishTime = int.MaxValue;

    // The second operation can start at its earliest start time or after the first finishes
    for (int i = 0; i < secondStartTimes.Length; i++)
      totalFinishTime = Math.Min(totalFinishTime,
          Math.Max(secondStartTimes[i], firstFinishTime) + secondDurations[i]);

    // Return the minimum total completion time
    return totalFinishTime;
  }

  public int EarliestFinishTime(int[] landStartTime, int[] landDuration,
                                int[] waterStartTime, int[] waterDuration)
  {
    // Calculate minimum time for land-first sequence
    int landFirstTime = Solve(landStartTime, landDuration, waterStartTime, waterDuration);

    // Calculate minimum time for water-first sequence
    int waterFirstTime = Solve(waterStartTime, waterDuration, landStartTime, landDuration);

    // Return the better of the two sequences
    return Math.Min(landFirstTime, waterFirstTime);
  }
}
