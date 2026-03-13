/**
 * Problem: 3296. Minimum Number of Seconds to Make Mountain Height Zero
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

public class Solution
{
  int CalculateHeight(long totalTime, int workerTime)
  {
    // Using quadratic formula: totalTime = workerTime * h * (h+1) / 2
    // Solving for h: h = (sqrt(1 + 8*totalTime/workerTime) - 1) / 2
    long discriminant = 1L + 8L * (totalTime / workerTime);

    // If discriminant is zero, no units can be cleared
    if (discriminant == 0)
      return 0;

    // Calculate height using formula
    return (int)((Math.Sqrt(discriminant) - 1.0) / 2.0);
  }

  long CalculateTime(int height, int workerTime)
  {
    // Initialize height as long to prevent overflow
    long h = height;
    // Initialize squared height as long to prevent overflow
    long hSquared = h * h;

    // Formula: time = workerTime * h * (h + 1) / 2
    return (hSquared + h) / 2L * workerTime;
  }

  bool IsTimeValid(long availableTime, int mountainHeight, int[] workerTimes)
  {
    // Initialize total height cleared as long to prevent overflow
    long totalHeightCleared = 0;

    // Sum up height each worker can clear in available time
    foreach (int workerTime in workerTimes)
      totalHeightCleared += CalculateHeight(availableTime, workerTime);

    // Check if total meets or exceeds mountain height
    return totalHeightCleared >= mountainHeight;
  }

  long FindSmallestTrue(long left, long right, Func<long, bool> validate)
  {
    // Binary search for minimum valid time
    while (left < right)
    {
      // Calculate middle point (avoid overflow)
      long middle = left + checked(right - left) / 2;

      // If valid at middle, search left half
      if (validate(middle))
        right = middle;
      // Otherwise search right half
      else
        left = middle + 1;
    }

    // Return minimum valid time
    return left;
  }

  // Calculates ceiling division for integers
  int CeilingDivide(int dividend, int divisor) => (int)(((long)dividend + divisor - 1L) / divisor);

  public long MinNumberOfSeconds(int mountainHeight, int[] workerTimes)
  {
    // Find minimum and maximum worker times
    int minWorkerTime = int.MaxValue,
      maxWorkerTime = int.MinValue;

    // Iterate through worker times to find minimum and maximum
    foreach (int workerTime in workerTimes)
    {
      // Update minimum worker time
      minWorkerTime = Math.Min(minWorkerTime, workerTime);
      // Update maximum worker time
      maxWorkerTime = Math.Max(maxWorkerTime, workerTime);
    }

    // Calculate initial search bounds
    int heightPerWorker = CeilingDivide(mountainHeight, workerTimes.Length);

    // Best case: using fastest worker
    long bestEstimate = CalculateTime(heightPerWorker, minWorkerTime);

    // Worst case: using slowest worker (add 1 for safety)
    long worstEstimate = CalculateTime(heightPerWorker, maxWorkerTime) + 1L;

    // Binary search for minimum valid time
    return FindSmallestTrue(
      bestEstimate,
      worstEstimate,
      time => IsTimeValid(time, mountainHeight, workerTimes)
    );
  }
}
